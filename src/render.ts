interface Render {
	(items: (string|(string|string[])[])[]): void

}
interface RenderLevel {
	(items: (string|(string|string[])[])[], level: number): void

}
export const render: Render = (items) => {
	console.info('sample render:')
	return renderLevel(items, -1)
}

export const renderLevel: RenderLevel = (items, level) => {
	for(const data of items) {
		if (!Array.isArray(data)) {
			// actual render here
			let tabs = ''
			let tabsNum = level
			// populate tabs
			while (tabsNum) {
				tabs = tabs + '\t'
				tabsNum--
			}
			console.info(`${tabs}${data}`)
		} else {
			renderLevel(data, level + 1)
		}
	}
}
