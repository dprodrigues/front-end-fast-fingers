import React from "react";
import ReactDOM from "react-dom";

import Reset from "./styles/Reset";
import Colors from "./styles/Colors";
import Background from "./styles/Background";

import App from "./App";

ReactDOM.render(
    <React.StrictMode>
        <Reset />
        <Colors />

        <App />

        <Background />
    </React.StrictMode>,
    document.getElementById("root")
);
