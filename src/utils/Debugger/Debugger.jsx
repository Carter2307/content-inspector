import React from "react";
import css from "./debugger.module.css";

export default function Debugger({ value }) {
	return <span className={css.debugger}>{JSON.stringify(value)}</span>;
}
