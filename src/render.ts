export type Node = string | Node[]

interface Render {
	(header: string, items: Node): void

}
interface RenderLevel {
	(items: Node, level: number): void

}
export const render: Render = (header, items) => {
	console.info(header)
	renderLevel(items, -1)
	console.info('')
}

export const renderLevel: RenderLevel = (item, level) => {
	if (!Array.isArray(item)) {
		// actual render here
		let tabs = ''
		let tabsNum = level > 0 ? level : 0
		// populate tabs
		while (tabsNum) {
			tabs = tabs + '\t'
			tabsNum--
		}
		console.info(`${tabs}${item}`)
	} else {
		for(const data of item) {
			renderLevel(data, level + 1)
		}
	}
}
