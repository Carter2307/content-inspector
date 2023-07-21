import React from "react";
import ReactDOM from "react-dom/client";
import Editor from "../Editor/Editor";
import css from "./inspect.module.css";

export default function Inspect({ disabled, children }) {
	let [isInspected, setIsInspected] = React.useState(false);
	let [nodeAsRef, setNodeAsRef] = React.useState(undefined);

	if (disabled) {
		return <>{children}</>;
	}

	function mouseOverHandler(e) {
		//e.stopPropagation();
		const nodes = document.elementsFromPoint(e.clientX, e.clientY);
		setNodeAsRef(e.target);

		nodes.forEach((node) => {
			if (node.nodeName === "BODY" || node.nodeName === "HTML" || node.getAttribute("id") == "root") return;
			node.classList.add(css.node);
		});
	}

	nodeAsRef.onclick = (e) => {
		e.stopPropagation();
		nodeAsRef.classList.add(css["node-actived"]);
		inspectSize(node);
		setIsInspected(true);
	};

	nodeAsRef.onmouseover = (e) => {
		e.stopPropagation();
		nodeAsRef.classList.add(css["node-hovered"]);
	};

	nodeAsRef.onmouseleave = (e) => {
		e.stopPropagation();
		nodeAsRef.classList.remove(css["node-hovered"]);
	};

	return (
		<>
			<span onMouseOver={mouseOverHandler} className="inspector">
				{children}
			</span>
			{isInspected && <Editor node={nodeAsRef}></Editor>}
		</>
	);
}

function uninspect() {}

function inspectSize(node) {
	const gap = 16;
	node.setAttribute("node-inspector-active", "");
	const { width, height, top, bottom, left, right } = node.getBoundingClientRect();
	const x = left + width / 2;
	const y = top + height + gap / 2;
	const value = `${width} x ${height}`;

	createMarker(x, y, value);
}

function createMarker(x, y, value) {
	const marker = document.createElement("marker");
	marker.classList.add(css.marker);
	marker.textContent = value;
	marker.style.left = x + "px";
	marker.style.top = y + "px";
	document.body.appendChild(marker);
}
