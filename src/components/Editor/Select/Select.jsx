import React from "react";
import css from "./select.module.css";
import { removeQuoteToString } from "../../../utils/utils";

//Schema
//Options = [{value: "Time", label="Time"}]
export default function Select({ id, name, defaultValue, options, onchangeHandler }) {
	console.log(defaultValue, removeQuoteToString(defaultValue));
	const ops = options.map((option, index) => <SelectOption key={index} value={option} />);

	function onchange(e) {
		onchangeHandler(e.target.value);
	}

	return (
		<div className={css.select}>
			<select className={css["Select-input"]} value={removeQuoteToString(defaultValue)} name={name} id={id} onChange={onchange}>
				{ops}
			</select>
			<span className={css["select-icon"]}>
				<i className="ri-arrow-drop-down-fill"></i>
			</span>
		</div>
	);
}

function SelectOption({ value }) {
	return <option value={value}>{value}</option>;
}
