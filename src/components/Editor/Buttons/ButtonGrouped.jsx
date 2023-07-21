import React from "react";
import css from "./buttonGrouped.module.css";

export default function ButtonGrouped({ defaultValue, step, handler }) {
	let [value, setValue] = React.useState(defaultValue);

	function increase() {
		setValue((prev) => {
			return prev + step;
		});

		handler(value);
	}

	function decrease() {
		setValue((prev) => {
			return prev - step;
		});

		handler(value);
	}

	return (
		<div className={css.buttonGrouped} value={value}>
			<button type="button" onClick={decrease}>
				<i className="ri-subtract-fill"></i>
			</button>
			<button type="button" onClick={increase}>
				<i className="ri-add-fill"></i>
			</button>
		</div>
	);
}
