import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link,
} from "react-router-dom";
import Header from "./components/Header";
import home from "./pages/home";
import ProductDetail from "./pages/productDetail";
import Footer from "./components/Footer";
import signup from "./pages/Signup/signup";
import { GuardedRoute, GuardProvider } from "react-router-guards";
import { authService } from "./services/auth.service";
import { Login } from "./pages/Login/Login";

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (authService.isLoggedIn()) {
      next();
    }
    next.redirect("/login");
  } else {
    next();
  }
};

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <GuardProvider guards={[requireLogin]}>
          <Switch>
            <Route
              exact
              path={"/"}
              render={() => {
                return <Redirect to={"/home"} />;
              }}
            />
            <Route exact path={"/products"} component={home} />
            <Route exact path={"/login"} component={Login} />
            <Route exact path={"/signup"} component={signup} />
            <GuardedRoute
              exact
              path={"/products/:id"}
              component={ProductDetail}
              meta={{ auth: true }}
            />
          </Switch>
        </GuardProvider>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
