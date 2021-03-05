import React, { useState } from "react";
import './App.css';
import Header from "./Header";
import Sidebar from "./Sidebar";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Chat from "./Chat";

function App() {

  const [user, setUser] =useState(null);
  return (
    //BEM naming convention
    <div className="app">
      <Router>
        {!user?(
          <h1>
            LOGIN page
          </h1>
        ):(
          <>
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
        </>
        )}
      </Router>
    </div>
  );
}

export default App;
