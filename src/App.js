import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Header from './header/Header'
import Footer from './footer/Footer'
import Home from './home/Home';
import About from './about/About'
import Login from './login/Login';
import Register from './register/Register'


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
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
