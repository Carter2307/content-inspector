import React from "react";
import Number from "../Inputs/Number";
import ButtonGrouped from "../Buttons/ButtonGrouped";

export default function InputGrouped({ id, step, value, onchange }) {
	if (typeof value === "string") {
		value = parseInt(value.split("p")[0]);
	}

	return (
		<div>
			<Number id={id} defaultValue={value} step={step || 1} handler={onchange}></Number>
			<ButtonGrouped defaultValue={value} step={step || 1} handler={onchange}></ButtonGrouped>
		</div>
	);
}
