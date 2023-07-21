import React, { useState } from "react";
import css from "./input.module.css";

export default function Number({ id, step, defaultValue, handler }) {
	let [value, setValue] = useState(defaultValue);

	function onchange(e) {
		setValue(e.target.value);
		handler(e.target.value);
	}

	return <input className={css.inputNumber} type="number" step={step} id={id} value={value} onChange={onchange} />;
}
