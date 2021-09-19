import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './home/Home';
import About from './about/About'
import Login from './login/Login';
import User from './user/User'
import Register from './register/Register'
import Logout from './logout/Logout';
import Admin from './admin/Admin'
import Deposit from './deposit/Deposit'
import Withdraw from './withdraw/Withdraw';
import AddRecipient from './transfer/AddRecipient';
import Transfer from './transfer/Transfer'


function App() {
  return (

    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/user">
            <User />
          </Route>
          <Route exact path="/admin">
            <Admin />
          </Route>
          <Route exact path="/logout">
            <Logout />
          </Route>
          <Route exact path="/deposit">
            <Deposit />
          </Route>
          <Route exact path="/withdraw">
            <Withdraw />
          </Route>
          <Route exact path="/recipient">
            <AddRecipient />
          </Route>
          <Route exact path="/transfer">
            <Transfer />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
