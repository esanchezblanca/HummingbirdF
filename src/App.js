import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Navigation from './components/Navigation/Navigation';
import Home from './containers/Home/Home';
import About from './containers/About/About';
import Login from './containers/Login/Login';
import Register from './containers/Register/Register';
import Dashboard from './containers/Dashboard/Dashboard';
import Task from './containers/Task/Task';
import Profile from './containers/Profile/Profile';
import TaskDetail from './containers/TaskDetail/TaskDetail';

function App() {
  return (
   <Router>
        <Navigation />


        <Route path="/" exact component={Home}/>
        <Route path="/about" component={About}/>
        <Route path="/login" component={Login}/>
        <Route path="/register" component={Register}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/task" component={Task}/>
        <Route path="/profile" component={Profile}/>
        <Route path="/detail" component={TaskDetail}/>
      </Router>
  );
}

export default App;
