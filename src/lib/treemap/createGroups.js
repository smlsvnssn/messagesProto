import { chain } from 'ouml/chain'
import { groupBy } from 'ouml'

const sliceOnLargest = 5

const groupBySubcategory = map => {
	map.forEach((category, categoryName, map) => {
		map.set(categoryName, groupBy(category, 'subcategory'))
	})

	return map
}

const convertToHierachicObject = map => {
	let root = {
		name: 'Totalt',
		children: [],
	}

	map.forEach((category, categoryName) => {
		const cat = { name: categoryName, children: [] }
		category.forEach((subcategory, subcategoryName) => {
			cat.children.push({ name: subcategoryName, children: subcategory })
		})
		root.children.push(cat)
	})

	return root
}

const sumAndSortGroups = obj => {
	if (!obj.children) return obj

	const children = obj.children
		.map(sumAndSortGroups)
		.sort((a, b) => (b.amount ?? b.sum) - (a.amount ?? a.sum))

	return {
		...obj,
		children,
		sum: children.reduce(
			(v, transaction) => (v += transaction.amount ?? transaction.sum),
			0,
		),
	}
}

const cleanup = obj => {
	// If only one category, replace root level with children
	if (obj.children.length === 1) return obj.children[0]

	// Else, slice root to largest categories
	obj.children = [
		...obj.children.slice(0, sliceOnLargest),
		{
			name: 'Övriga kategorier',
			children: obj.children.slice(sliceOnLargest),
		},
	]

	return obj
}

export default data =>
	chain(data)
		.filter(o => o.category !== 'Inkomst')
		.map(o => ({ ...o, amount: -o.amount }))
		.groupBy('category')
		.f(groupBySubcategory)
		.f(convertToHierachicObject)
		.f(sumAndSortGroups)
		.f(cleanup)
		//.peek()
		.return()
