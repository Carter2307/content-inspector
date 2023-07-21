import React from "react";
import ReactDOM from "react-dom/client";
import Editor from "../Editor/Editor";
import DomNodes from "../Domnodes/DomNode";
import { getNodeStyle } from "../../utils/utils";

export default function Inspect({ disabled, children }) {
	let [currentNode, setCurrentNode] = React.useState(null);
	let [currentNodeStyle, setCurrentNodeStyle] = React.useState(null);

	if (disabled) {
		return <>{children}</>;
	}

	function onStyleChange(style) {
		setCurrentNodeStyle(style);
	}

	function onDomNodeChange(node) {
		setCurrentNode(node);
		setCurrentNodeStyle(getNodeStyle(node));
	}

	return (
		<React.Fragment>
			<DomNodes handler={onDomNodeChange} style={currentNodeStyle}>
				{children}
			</DomNodes>
			<Editor node={currentNode} handler={onStyleChange}></Editor>
		</React.Fragment>
	);
}
