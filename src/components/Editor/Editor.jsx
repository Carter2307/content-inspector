import React, { useState } from "react";
import Select from "./Select/Select";
import constants from "../common/constants";
import Toggler from "./Toggler/Toggler";
import Accordion from "./Accordion/Accordion";
import InputGrouped from "./Inputs/InputGrouped";
import Debugger from "../../utils/Debugger/Debugger";
import css from "./editor.module.css";

export default function Editor({ node, style, handler }) {
	if (!node) return;

	function onFontChange(value) {
		handler({ ...style, fontFamily: value }, node);
	}

	function onWeightChange(value) {
		handler({ ...style, fontWeight: value }, node);
	}

	function OnSizeChange(value) {
		handler({ ...style, fontSize: value + "px" }, node);
	}

	function onAlignChange(value) {
		handler({ ...style, textAlign: String(value) }, node);
	}

	function onLineHieghtChange(value) {
		handler({ ...style, lineHeight: parseFloat(value) }, node);
	}
	function onLetterSpacingChange(value) {
		handler({ ...style, letterSpacing: value + "px" }, node);
	}

	function onTextTransform(value) {
		handler({ ...style, textTransform: value }, node);
	}

	return (
		<div className={css.editor}>
			<EditorOption targetId="font" label="Font">
				<Select id="font" defaultValue={style.fontFamily} name="fonts" options={constants.FONTS} onchangeHandler={onFontChange}></Select>
			</EditorOption>

			<EditorOption targetId="weight" label="Weight">
				<Select
					id="weight"
					name="weight"
					defaultValue={style.fontWeight}
					options={constants.FONTWEIGHT}
					onchangeHandler={onWeightChange}
				></Select>
			</EditorOption>

			<EditorOption targetId="size" label="Size">
				<InputGrouped id="size" defaultValue={style.fontSize} onchange={OnSizeChange}></InputGrouped>
			</EditorOption>

			<EditorOption targetId="align" label="Align">
				<Toggler options={constants.ALIGN} handler={onAlignChange}></Toggler>
			</EditorOption>

			<Accordion label="More" open={true}>
				<EditorOption targetId="letter-spacing" label="Letter">
					<InputGrouped id="letter-spacing" defaultValue={style.letterSpacing} onchange={onLetterSpacingChange}></InputGrouped>
				</EditorOption>

				<EditorOption targetId="line-height" label="Line">
					<InputGrouped id="line-height" step={0.1} defaultValue={style.lineHeight} onchange={onLineHieghtChange}></InputGrouped>
				</EditorOption>

				<EditorOption targetId="transform" label="Format">
					<Toggler options={constants.FORMAT} handler={onTextTransform}></Toggler>
				</EditorOption>
			</Accordion>
		</div>
	);
}

function EditorOption({ targetId, label, children }) {
	return (
		<div className="editor-option">
			<label htmlFor={targetId}>{label}</label>
			{children}
		</div>
	);
}
