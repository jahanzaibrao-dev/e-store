import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  Link
} from 'react-router-dom'
import Header from './components/Header'
import home from './pages/home'
import ProductDetail from './pages/ProductDetails/ProductDetail'
import Footer from './components/Footer'
import { Signup } from './pages/Signup/Signup'
import { GuardedRoute, GuardProvider } from 'react-router-guards'
import { authService } from './services/auth.service'
import { Login } from './pages/Login/Login'

const requireLogin = (to, from, next) => {
  if (to.meta.auth) {
    if (authService.isLoggedIn()) {
      next()
    }
    next.redirect('/login')
  } else {
    next()
  }
}

function App() {
  return (
    <div className="App">
      <Router>
        <GuardProvider guards={[requireLogin]}>
          <Header />
          <Switch>
            <Route
              exact
              path={'/'}
              render={() => {
                return <Redirect to={'/products'} />
              }}
            />
            <Route exact path={'/products'} component={home} />
            <Route exact path={'/login'} component={Login} />
            <Route exact path={'/signup'} component={Signup} />
            <GuardedRoute
              exact
              path={'/products/:id'}
              component={ProductDetail}
              meta={{ auth: true }}
            />
          </Switch>
          <Footer />
        </GuardProvider>
      </Router>
    </div>
  )
}

export default App
