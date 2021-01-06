import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages';
import SigninPage from './pages/signin';
import SignupPage from './pages/signup';
import ProfilePage from './pages/profile';
import RoutesPage from './pages/routesp';
import PlacesPage from './pages/places';
import PlacePage from './pages/place';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact/>
        <Route path="/signin" component={SigninPage} exact/>
        <Route path="/signup" component={SignupPage} exact/>
        <Route path="/profile" component={ProfilePage} exact/>
        <Route path="/routes" component={RoutesPage} exact/>
        <Route path="/places" component={PlacesPage} exact/>
        <Route path="/place" component={PlacePage} exact/>
      </Switch>
    </Router>
  );
}

export default App;
