import React, { useState } from "react";
import css from "./input.module.css";

export default function Number({ id, step, defaultValue, handler }) {
	function onchange(e) {
		handler(parseFloat(e.target.value));
	}

	return <input className={css.inputNumber} type="number" step={String(step)} id={id} value={defaultValue} onChange={onchange} />;
}
