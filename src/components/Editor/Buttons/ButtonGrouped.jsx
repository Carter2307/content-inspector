import React from "react";
import css from "./buttonGrouped.module.css";

export default function ButtonGrouped({ defaultValue, step, handler }) {
	function increase() {
		const calc = defaultValue + step;
		handler(Math.round(calc * 100) / 100);
	}

	function decrease() {
		const calc = defaultValue - step;
		handler(Math.round(calc * 100) / 100);
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
