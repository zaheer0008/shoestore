import './App.css';
import { React } from "react";
import Menu from "./components/Menu";
import { Switch, Route } from 'react-router-dom';
import Children from "./components/Children";
import { Home } from "./components/Home";
import { Men } from "./components/Men";
import { Women } from "./components/Women";


function App() {
  return (
    <div className="app">
      <Menu />
      {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
      <div className="main">
        <Switch>
          <Route path="/Children">
            <Children />
          </Route>
          <Route path="/Men">
            <Men />
          </Route>
          <Route path="/Women">
            <Women />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}


export default App;
