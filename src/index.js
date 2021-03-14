import React from "react"
import ReactDOM from "react-dom"

import "./styles/styles.scss"

import App from "./app"

const RenderApp = () => (
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

ReactDOM.render(<RenderApp />, document.getElementById("root"))