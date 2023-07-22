import React from "react";
import css from "./domnode.module.css";
import { getNodeStyle } from "../../utils/utils";

export default function DomNodes({ children, handler }) {
	let Node = React.useRef(null);
	let [currentNode, setCurrentNode] = React.useState(Node.current);
	let inspector = React.useRef(null);

	function resetActiveNode(nodes) {
		nodes.forEach((node) => node.classList.remove(css["node-actived"]));
	}

	function mouseOverHandler(e) {
		e.stopPropagation();
		inspector.current = e.currentTarget; // lorsque la souris survole la span.inspector je sauvegade l'élément qui à appéler l'événement

		const childNodes = [...inspector.current.querySelectorAll("*")]; //Je sauvegarde dans un tableau tous les enfants de cette span
		const target = e.target; // je récupère l'élément sur lequel la souris pointe

		childNodes.forEach((node, index) => {
			// Pour chaques enfants
			node.classList.add(css.node); // Pour l'enfant courant j'ajoute la classe css "node"
			node.setAttribute("inspector-node-id", String(index)); // Je défini un id unique à chaque noeud;
			node.onmouseover = (event) => {
				// Lorsque la souris survole l'élément
				event.target.classList.add(css["node-hovered"]); // J'ajoute la classe ".node-hovered"
				uninspectSize(node, index);
			};

			node.onmouseleave = (event) => {
				inspectSize(node, index);
			};

			node.onmouseout = (event) => {
				// lorsque la souris quitte l'élément
				event.target.classList.remove(css["node-hovered"]); // je rétire la classe css "node-hovered"
			};
		});

		target.onclick = (event) => {
			//Lorsque je clique  sur l'élément sur lequel la souris pointe
			resetActiveNode(childNodes); // Je rétire la classe "node-actived" tous les enfants de la span
			target.classList.add(css["node-actived"]); // j'ajoute la classe "node-actived sur l'élément cliqué"
			Node.current = target; // je définis la propriété current de l'objet node à event.target(l'élément sur lequel j'ai cliqué)
			setCurrentNode(target); // je met à jour l'état du noeud (node) actif : Déclenche un nouveau rendu
			//setNodeStyle(targetStyle); // Je met à jour l'état des style : en React ceci déclenche un nouveau Rendu
			handler(target, getNodeStyle(target));
		};
	}

	return (
		<span onMouseOver={mouseOverHandler} ref={inspector} className={css.canva}>
			{children}
		</span>
	);
}

function uninspectSize(node, nodeId) {
	const marker = document.getElementById(`marker-${nodeId}`);

	if (!marker) return;
	marker.remove();
}
function inspectSize(node, nodeId) {
	const gap = 16;
	node.setAttribute("node-inspector-active", "");
	const { width, height, top, bottom, left, right } = node.getBoundingClientRect();
	const x = left + width / 2;
	const y = top + height + gap / 2;
	const value = `${width} x ${height}`;

	createMarker(x, y, value, nodeId);
}

function createMarker(x, y, value, id) {
	const marker = document.createElement("marker");
	marker.id = "marker-" + id;
	marker.classList.add(css.marker);
	marker.textContent = value;
	marker.style.left = x + "px";
	marker.style.top = y + "px";
	document.body.appendChild(marker);
}
