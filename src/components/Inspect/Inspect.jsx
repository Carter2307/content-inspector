import React from "react";
import ReactDOM from "react-dom/client";
import Editor from "../Editor/Editor";
import css from "./inspect.module.css";

export default function Inspect({ disabled, children }) {
	let [isInspected, setIsInspected] = React.useState(false);
	let node = React.useRef(null);
	let [currentNode, setCurrentNode] = React.useState(node);
	let inspector = React.useRef(null);

	if (disabled) {
		return <>{children}</>;
	}

	function mouseOverHandler(e) {
		inspector.current = e.currentTarget;
		const childNodes = [...inspector.current.querySelectorAll("*")];
		const target = e.target;

		childNodes.forEach((node) => {
			node.classList.add(css.node);
			node.onmouseover = (event) => {
				event.target.classList.add(css["node-hovered"]);
			};

			node.onmouseout = (event) => {
				event.target.classList.remove(css["node-hovered"]);
			};
		});

		target.onclick = (event) => {
			resetActiveNode(childNodes);
			target.classList.add(css["node-actived"]);
			node.current = event.target;
			setCurrentNode(target);
			setIsInspected(true);
		};
	}

	function resetActiveNode(nodes) {
		nodes.forEach((node) => node.classList.remove(css["node-actived"]));
	}

	return (
		<React.Fragment>
			<span onMouseOver={mouseOverHandler} ref={inspector} className={css.inspector}>
				{children}
			</span>
			{isInspected && <Editor node={currentNode}></Editor>}
		</React.Fragment>
	);
}

function uninspect(node) {
	console.lgo(node);
}
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

function ex() {
	inspector.current = e.currentTarget;
	setPreviousNode((prev) => {
		return document.elementFromPoint(e.clientX, e.clientY);
	});
	const target = e.target;
	const childNodes = [...inspector.current.querySelectorAll("*")];

	//childNodes.forEach((child) => child.classList.add(css.node));

	target.classList.add(css.node);
	target.onclick = (event) => {
		node.current = event.target;
		if (previousNode) {
			previousNode.classList.remove(css["node-actived"]);
		}
		if (previousNode === node.current) return;
		console.log(node.current, target);

		target.classList.add(css["node-actived"]);
	};
}
