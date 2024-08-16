import { chain } from 'ouml/chain'
import { groupBy } from 'ouml'

const LARGEST_CATEGORIES = 5

const toGrouped = (arr, prop) =>
	[...groupBy(arr, prop).entries()].map(([key, val]) => ({
		name: key,
		children: val,
	}))

const convertToTree = transactions => ({
	name: 'Totalt',
	children: toGrouped(transactions, 'category').map(category => ({
		...category,
		children: toGrouped(category.children, 'subcategory'),
	})),
})

const sumAndSortGroups = obj => {
	if (!obj.children) return obj

	let children = obj.children
		.map(sumAndSortGroups)
		.sort((a, b) => (b.amount ?? b.sum) - (a.amount ?? a.sum))

	return {
		...obj,
		children,
		sum: children.reduce((acc, o) => (acc += o.amount ?? o.sum), 0),
	}
}

const cleanup = obj => {
	// If only one category, replace root level with children
	if (obj.children.length === 1) return obj.children[0]

	// Else, slice root to largest categories
	obj.children = [
		...obj.children.slice(0, LARGEST_CATEGORIES),
		{
			name: 'Övriga kategorier',
			children: obj.children.slice(LARGEST_CATEGORIES),
		},
	]

	return obj
}

export default transactions =>
	// prettier-ignore
	chain(transactions)
		.filter(transaction => transaction.category !== 'Inkomst')
		.map(transaction => ({ ...transaction, amount: -transaction.amount }))
		(convertToTree)
		(sumAndSortGroups)
		(cleanup)
		//.peek()
		.return()
