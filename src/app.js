import React from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"

import HomePage from "./components/home/HomePage"
import ColorsPage from "./components/colors/ColorsPage"

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact={true} path="/" component={HomePage} />
        <Route exact={true} path="/colors" component={ColorsPage} />
      </Switch>
    </BrowserRouter>
  )
}

export default App