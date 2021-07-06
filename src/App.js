import React from "react";
import Home from "./pages/Home"
import GlobalStyles from "./components/globalStyles"
import {Route} from "react-router-dom"
import {Navigation} from "./components/Nav"

function App() {

  return (
    <div className="App">
      <GlobalStyles/>
      <Route path={["/game/:id", "/"]}>
        <Navigation/>
        <Home/>
      </Route>
    </div>
  );
}

export default App;
