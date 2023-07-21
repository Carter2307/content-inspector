import React, { useState } from "react";
import css from "./accordion.module.css";

export default function Accordion({ label, open, children }) {
	let [state, setState] = useState(open);

	function onclick(e) {
		setState(!state);
	}

	return (
		<div className={css.accordion}>
			<div className={css["accordion-header"]} onClick={onclick}>
				<span className={css["accordion-label"]}>{label}</span>
				<span className={css["accordion-icon"]}>
					<i className="ri-arrow-drop-down-fill"></i>
				</span>
			</div>
			<div className={css["accordion-body"]} accordion-open={String(state)}>
				{children}
			</div>
		</div>
	);
}
