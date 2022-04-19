import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import bootstrap from 'bootstrap'
import { authService } from '../services/auth.service'
import { useSelector } from 'react-redux'

const Header = (props) => {
  const isLoggedIn = useSelector((state) => state.authentication.loggedIn)
  const user = useSelector((state) => state.authentication.user)

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          E-Store
        </NavLink>
        {isLoggedIn ? (
          <span className="text-white">
            Welcome,
            <NavLink className="text-white" to={'#'}>
              {user.name}
            </NavLink>
          </span>
        ) : (
          'Guest'
        )}
        <div>
          <ul className="navbar-nav ml-auto">
            {isLoggedIn ? (
              <>
                {user.userType === 'admin' && (
                  <NavLink className="nav-link" to={'#'}>
                    Admin Dashboard
                  </NavLink>
                )}
                <li className="nav-item">
                  <NavLink className="nav-link" to={'/cart'}>
                    <i className="fa fa-shopping-cart" aria-hidden="true"></i>
                    Cart
                  </NavLink>
                </li>
                <li>
                  <NavLink className="nav-link" to={'/login'}>
                    Logout
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {' '}
                <li className="nav-link">
                  <Link className="nav-link" to={'/login'}>
                    Login
                  </Link>
                </li>
                <li className="nav-link">
                  <Link className="nav-link" to={'/signup'}>
                    Signup
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Header
