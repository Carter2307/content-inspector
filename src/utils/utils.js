export function getNodeStyle(node) {
	if (!node) return;
	const id = node.getAttribute("inspector-node-id");
	const nodeType = node.tagName;
	const { width, height } = node.getBoundingClientRect();
	let { fontFamily, fontWeight, fontSize, textAlign, letterSpacing, lineHeight, textTransform } = window.getComputedStyle(node);

	if (fontWeight == "normal") {
		fontWeight = 400;
	} else if (fontWeight == "bold") {
		fontWeight = 700;
	}

	lineHeight = "normal" ? 1.2 : lineHeight;
	letterSpacing = "normal" ? 0 : letterSpacing;

	return { nodeType, id, width, height, fontFamily, fontWeight, fontSize, textAlign, letterSpacing, lineHeight, textTransform };
}

export function removeQuoteToString(string) {
	let arr = string.split('"');
	return arr.length == 1 ? arr[0] : arr[1];
}
