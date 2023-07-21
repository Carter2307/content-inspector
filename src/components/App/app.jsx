import React from "react";
import style from "./app.module.css";

export default function App() {
	const text = "Hello world";
	return (
		<div className={style.app}>
			<h1>{text}</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure officia, iste cum suscipit delectus aliquam. Saepe obcaecati ea
				recusandae laudantium cupiditate inventore expedita officiis explicabo ullam accusantium, atque commodi quod cum voluptatem modi id
				minima quam aperiam magni harum sed dolor tenetur nemo facilis. Odit a doloribus in numquam itaque.
			</p>
		</div>
	);
}
