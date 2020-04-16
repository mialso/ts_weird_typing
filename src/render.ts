interface Render {
	(header: string, items: (string|(string|string[])[])[]): void

}
interface RenderLevel {
	(items: (string|(string|string[])[])[], level: number): void

}
export const render: Render = (header, items) => {
	console.info(header)
	renderLevel(items, -1)
	console.info('')
}

export const renderLevel: RenderLevel = (items, level) => {
	for(const data of items) {
		if (!Array.isArray(data)) {
			// actual render here
			let tabs = ''
			let tabsNum = level > 0 ? level : 0
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
