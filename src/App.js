

import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';

function App() {
  return (
   <Router>
        <Navigation />


        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
      </Router>
  );
}

export default App;
