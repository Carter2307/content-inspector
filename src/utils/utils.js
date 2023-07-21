export function getNodeStyle(node) {
	if (!node) return;
	const id = node.getAttribute("inspector-node-id");
	const nodeType = node.tagName;
	const { width, height } = node.getBoundingClientRect();
	let { fontFamily, fontWeight, fontSize, textAlign, letterSpacing, lineHeight, textTransform } = window.getComputedStyle(node);
	lineHeight = "normal" ? 1.2 : lineHeight;
	letterSpacing = "normal" ? 0 : letterSpacing;

	return { nodeType, id, width, height, fontFamily, fontWeight, fontSize, textAlign, letterSpacing, lineHeight, textTransform };
}
