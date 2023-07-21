import React, { useState } from "react";
import Select from "./Select/Select";
import constants from "../common/constants";
import Toggler from "./Toggler/Toggler";
import Accordion from "./Accordion/Accordion";
import InputGrouped from "./Inputs/InputGrouped";
import { getNodeStyle } from "../../utils/utils";

export default function Editor({ node, handler }) {
	if (!node) return;
	let [style, setStyle] = useState(getNodeStyle(node));

	function onFontChange(value) {
		setStyle((prev) => {
			return { ...prev, fontFamily: value };
		});
		handler({ ...style, fontFamily: value });
	}

	function onWeightChange(value) {
		setStyle({ ...style, fontWeight: value });
		handler({ ...style, fontWeight: value });
	}

	function OnSizeChange(value) {
		setStyle({ ...style, fontSize: value + "px" });
		handler({ ...style, fontSize: value + "px" });
	}

	function onAlignChange(value) {
		setStyle({ ...style, textAlign: String(value) });
		handler({ ...style, textAlign: String(value) });
	}

	function onLineHieghtChange(value) {
		setStyle((prev) => {
			return { ...prev, lineHeight: parseFloat(value) };
		});
		handler({ ...style, lineHeight: parseFloat(value) });
	}
	function onLetterSpacingChange(value) {
		setStyle({ ...style, letterSpacing: value + "px" });
		handler({ ...style, letterSpacing: value + "px" });
	}

	function onTextTransform(value) {
		setStyle({ ...style, textTransform: value });
		handler({ ...style, textTransform: value });
	}

	return (
		<div className="editor">
			<EditorOption targetId="font" label="Font">
				<Select id="font" name="fonts" options={constants.FONTS} onchangeHandler={onFontChange}></Select>
			</EditorOption>
			<EditorOption targetId="weight" label="Weight">
				<Select id="weight" name="styles" options={constants.FONTWEIGHT} onchangeHandler={onWeightChange}></Select>
			</EditorOption>
			<EditorOption targetId="size" label="Size">
				<InputGrouped id="size" value={style.fontSize} onchange={OnSizeChange}></InputGrouped>
			</EditorOption>
			<EditorOption targetId="align" label="Align">
				<Toggler options={constants.ALIGN} handler={onAlignChange}></Toggler>
			</EditorOption>

			<Accordion label="More" open={true}>
				<EditorOption targetId="letter-spacing" label="Letter">
					<InputGrouped id="letter-spacing" value={style.letterSpacing} onchange={onLineHieghtChange}></InputGrouped>
				</EditorOption>
				<EditorOption targetId="line-height" label="Line">
					<InputGrouped id="line-height" step={0.1} value={style.lineHeight} onchange={onLetterSpacingChange}></InputGrouped>
				</EditorOption>
				<EditorOption targetId="transform" label="Format">
					<Toggler options={constants.FORMAT} handler={onTextTransform}></Toggler>
				</EditorOption>
			</Accordion>
			{JSON.stringify(style)}
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
