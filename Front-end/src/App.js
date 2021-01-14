import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./pages";
import SigninPage from "./pages/signin";
import SignupPage from "./pages/signup";
import ProfilePage from "./pages/profile";
import RoutesPage from "./pages/routesp";
import PlacesPage from "./pages/places";
import Cookies from "js-cookie";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      Cookies.get("token") ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/signin",
            state: { from: props.location },
          }}
        />
      )
    }
  />
);

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SigninPage} exact />
        <Route path="/signup" component={SignupPage} exact />
        <PrivateRoute path="/profile" component={ProfilePage} exact />
        <Route path="/routes" component={RoutesPage} exact />
        <Route path="/places" component={PlacesPage} exact />
      </Switch>
    </Router>
  );
}

export default App;
