import App from "./App";
import { BrowserRouter } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom";
import registerServiceWorker from "./registerServiceWorker";
import "./index.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/style.css";
import "@blueprintjs/core/lib/css/blueprint.css";
import "@blueprintjs/icons/lib/css/blueprint-icons.css";

ReactDOM.render(
	<BrowserRouter>
		<App />
	</BrowserRouter>, document.getElementById("root"));
registerServiceWorker();
