import React from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Chat from "./Chat";

function App() {
  return (
    //BEM naming convention
    <div className="app">
      <Router>

      <Header/>
      <div className="app__body">
        <Sidebar/>
          <Switch>
            <Route path="/room/:roomId">
              <Chat/>
            </Route>
            <Route  path="/">
              <h1>Welcome</h1>
            </Route>
          </Switch>
      {/*react-router -> chat screen */ }
      </div>
      </Router>
    </div>
  );
}

export default App;
