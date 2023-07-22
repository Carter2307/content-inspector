import React from "react";
import Editor from "../Editor/Editor";
import DomNodes from "../Domnodes/DomNode";
import css from "../Domnodes/domnode.module.css";

export default function Inspect({ disabled, children }) {
	let [currentNode, setCurrentNode] = React.useState(null);
	let [currentNodeStyle, setCurrentNodeStyle] = React.useState({});

	if (disabled) {
		return <>{children}</>;
	}

	function onStyleChange(style, node) {
		setCurrentNodeStyle(style);
		Object.assign(node.style, style);
	}

	function onDomNodeChange(node, style) {
		setCurrentNode(node);
		setCurrentNodeStyle(style);
	}

	return (
		<div className={css.inspector}>
			<DomNodes handler={onDomNodeChange}>{children}</DomNodes>
			<Editor node={currentNode} style={currentNodeStyle} handler={onStyleChange}></Editor>
		</div>
	);
}
