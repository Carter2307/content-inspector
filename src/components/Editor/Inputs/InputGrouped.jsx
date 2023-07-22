import React from "react";
import Number from "../Inputs/Number";
import ButtonGrouped from "../Buttons/ButtonGrouped";
import Debugger from "../../../utils/Debugger/Debugger";

export default function InputGrouped({ id, step, defaultValue, onchange }) {
	let value = defaultValue;
	if (typeof value === "string") {
		value = parseFloat(value.split("p")[0]);
	}

	function onchangeHandler(v) {
		value = v;
		onchange(value);
	}

	return (
		<div>
			<Number id={id} defaultValue={value} step={step || 1} handler={onchangeHandler}></Number>
			<ButtonGrouped defaultValue={value} step={step || 1} handler={onchangeHandler}></ButtonGrouped>
		</div>
	);
}
