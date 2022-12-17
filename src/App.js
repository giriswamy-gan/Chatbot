import './App.css';
import Navbar from './components/Navbar/Navbar';
import Chat from './components/Chat/Chat';
import Login from './components/Login/Login';
import {BrowserRouter as Router, Redirect, Route, Switch} from 'react-router-dom';
import ChatList from './components/ChatList/ChatList';
import SignUp from './components/SignUp/SignUp';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar/>
        <Switch>
          <Route exact path="/">
            <Login/>
          </Route>
          <Route exact path="/signup">
            <SignUp/>
          </Route>
          <Route exact path="/chatlist/:userid">
            <ChatList />
          </Route>
          <Route exact path="/chat/:id/:userid/:username">
            <Chat/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
