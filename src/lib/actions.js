export const clickOutside = (node, cb) => {
	const handleOutsideClick = ({ target }) => {
		//console.log(target, node.contains(target))
		if (!node.contains(target)) {
			if (cb) cb()
			else node.dispatchEvent(new Event('clickoutside'))
		}
	}
	window.addEventListener('click', handleOutsideClick)
	return {
		destroy() {
			window.removeEventListener('click', handleOutsideClick)
		},
	}
}
