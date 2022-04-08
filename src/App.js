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
import home from "./pages/Home";
import ProductDetail from "./pages/productDetail";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Switch>
          <Route
            exact
            path={"/"}
            render={() => {
              return <Redirect to={"/products"} />;
            }}
          />
          <Route exact path={"/products"} component={home} />
          <Route exact path={"/products/:id"} component={ProductDetail} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
