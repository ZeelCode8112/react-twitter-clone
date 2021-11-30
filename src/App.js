import { Fragment } from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom"
import './App.css';
import Bookmark from "./Bookmark";
import Explore from "./Explore";
import Feed from './Feed';
import List from "./List";
import Message from "./Message";
import More from "./More";
import Notification from "./Notification";
import Profile from "./Profile";
// import Home from './Home';
import Sidebar from './Sidebar';
import Trends from './Trends';

function App() {
  return (

    <div className="app">
      
      <Router>
        
          <Route exact path="/">
            <Sidebar/>
            <Feed/>
            <Trends/>
          </Route>
      
      <Switch>
        {/* <Route path="/explore" component={Explore}/> */}
        <Route exact path="/explore">
            <Sidebar/>
            <Explore/>
          </Route>
      </Switch>

      <Switch>
        <Route path="/notification"> 
          <Sidebar/>
          <Notification/>
        </Route>
      </Switch>

      <Switch>
        <Route path="/message"> 
          <Sidebar/>
          <Message/>
        </Route>
      </Switch>

      <Switch>
        <Route path="/bookmarks"> 
          <Sidebar/>
          <Bookmark/>
        </Route>
      </Switch>

      <Switch>
        <Route path="/list"> 
          <Sidebar/>
          <List/>
        </Route>
      </Switch>

      <Switch>
        <Route path="/profile"> 
          <Sidebar/>
          <Profile/>
        </Route>
      </Switch>

      <Switch>
        <Route path="/more"> 
          <Sidebar/>
          <More/>
        </Route>
      </Switch>

      </Router>
    </div>
  );
}

export default App;
