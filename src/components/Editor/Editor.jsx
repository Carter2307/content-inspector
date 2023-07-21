import React, { useState } from "react";
import Select from "./Select/Select";
import constants from "../common/constants";
import Toggler from "./Toggler/Toggler";
import Accordion from "./Accordion/Accordion";
import InputGrouped from "./Inputs/InputGrouped";

export default function Editor({ node }) {
	let nodeStyle = getNodeStyle(node);
	let [style, setStyle] = useState(nodeStyle);

	function onFontChange(value) {
		setStyle({ ...style, fontFamily: value });
	}

	function onWeightChange(value) {
		setStyle({ ...style, fontWeight: value });
	}

	function OnSizeChange(value) {
		setStyle({ ...style, fontSize: value + "px" });
	}

	function onAlignChange(value) {
		setStyle({ ...style, textAlign: String(value) });
	}

	function onLineHieghtChange(value) {
		setStyle({ ...style, lineHeight: parseFloat(value) });
	}
	function onLetterSpacingChange(value) {
		setStyle({ ...style, letterSpacing: parseInt(value) });
	}

	function onTextTransform(value) {
		setStyle({ ...style, textTransform: value });
	}

	Object.assign(node.style, style);

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

			<Accordion label="More" open="false">
				<EditorOption targetId="letter-spacing" label="Letter">
					<InputGrouped id="letter-spaing" step={0.1} value={style.lineHeight} onchange={onLineHieghtChange}></InputGrouped>
				</EditorOption>
				<EditorOption targetId="line-height" label="Line">
					<InputGrouped id="line-height" value={style.letterSpacing} onchange={onLetterSpacingChange}></InputGrouped>
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

function getNodeStyle(node) {
	const { width, height } = node.getBoundingClientRect();
	let { fontFamily, fontWeight, fontSize, textAlign, letterSpacing, lineHeight, textTransform } = window.getComputedStyle(node);
	fontWeight = "normal" ? "500" : fontStyle;
	lineHeight = "normal" ? 1.2 : lineHeight;
	letterSpacing = "normal" ? 0 : letterSpacing;
	textAlign = "start" ? "left" : textAlign;

	return { width, height, fontFamily, fontWeight, fontSize, textAlign, letterSpacing, lineHeight, textTransform };
}
