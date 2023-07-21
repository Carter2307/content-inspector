import React from "react";
import css from "./buttonGrouped.module.css";

export default function ButtonGrouped({ defaultValue, step, handler }) {
	function increase() {
		handler(defaultValue + step);
	}

	function decrease() {
		handler(defaultValue - step);
	}

	return (
		<div className={css.buttonGrouped}>
			<button type="button" onClick={decrease}>
				<i className="ri-subtract-fill"></i>
			</button>
			<button type="button" onClick={increase}>
				<i className="ri-add-fill"></i>
			</button>
		</div>
	);
}
