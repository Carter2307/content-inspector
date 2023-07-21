import React from "react";
import css from "./toggler.module.css";

//schema :
//const options = [{ label: "Ag", value: "uppercase"}];

export default function Toggler({ options, handler }) {
	function onclickHandler(e) {
		handler(e.currentTarget.value);
	}
	return (
		<div className={css.toggler}>
			{options &&
				options.map((option, index) => <TogglerOption key={index} value={option.value} label={option.label} onclick={onclickHandler} />)}
		</div>
	);
}

function TogglerOption({ value, label, onclick }) {
	return <button type="button" value={value} onClick={onclick} dangerouslySetInnerHTML={{ __html: label }}></button>;
}
