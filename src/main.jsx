import React from "react";
import ReactDOM from "react-dom/client";
import Inspect from "./components/Inspect/Inspect";
import App from "./components/App/app";
import "./main.css";

function Main() {
	return <App></App>;
}

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Inspect disabled={false}>
			<Main />
		</Inspect>
	</React.StrictMode>
);
