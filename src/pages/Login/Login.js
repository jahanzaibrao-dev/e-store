import React, { useEffect, useState } from 'react'
import { useRef } from 'react'
import { Alert } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import { connect } from 'react-redux'
import { authActions } from '../../actions/auth'
import './login.scss'

const Login = (props) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [validation, setValidation] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const isMounted = useRef(false)
  const loggedIn = useSelector((state) => state.authentication.loggedIn)
  const error = useSelector((state) => state.authentication.error)
  const loggingIn = useSelector((state) => state.authentication.loggingIn)

  useEffect(() => {
    props.dispatch(authActions.logout())
  }, [])

  useEffect(() => {
    if (isMounted.current) {
      if (submitted && !loggedIn) {
        setValidation(false)
      } else if (loggedIn) {
        props.history.push('/')
      }
    } else {
      isMounted.current = true
    }
  }, [loggedIn, submitted])

  function handleChange(e) {
    const { name, value } = e.target
    name === 'email' ? setEmail(value) : setPassword(value)
    console.log(name, ': ', value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    const mail = email
    const pass = password
    setSubmitted(true)

    const { dispatch } = props
    if (mail && pass) {
      console.log(loggedIn)
      dispatch(authActions.login(mail, pass))
      console.log(loggedIn)
    }
  }

  return (
    <section className="vh-100" style={{ paddingTop: '6rem' }}>
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-md-9 col-lg-6 col-xl-5">
              <img
                src="https://www.pngkey.com/png/full/501-5010058_online-store-png-e-business-ecommerce-clipart.png"
                className="img-fluid"
                alt="Sample img"
              />
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0">
              <div className="card">
                <div className="card-body py-5 px-md-5">
                  <img
                    src="https://www.logolynx.com/images/logolynx/97/977e0290e82162aab107754b2b18ff07.png"
                    className="img-fluid"
                    alt="Sample img"
                  />
                  {!validation ? (
                    <Alert
                      variant="danger"
                      onClose={() => {
                        setValidation(true)
                        setSubmitted(false)
                      }}
                      dismissible
                    >
                      <Alert.Heading>Auth failed!</Alert.Heading>
                      <p>{error?.error.message}</p>
                    </Alert>
                  ) : (
                    ''
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4 mt-4">
                      <input
                        type="email"
                        id="form3Example3"
                        className="form-control form-control-lg"
                        placeholder="Enter a valid email address"
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                      {submitted && !email && (
                        <div className="form-text text-danger">
                          Email is required
                        </div>
                      )}
                    </div>

                    <div className="form-outline mb-3">
                      <input
                        type="password"
                        id="form3Example4"
                        className="form-control form-control-lg"
                        name="password"
                        placeholder="Enter password"
                        value={password}
                        onChange={handleChange}
                      />
                      {submitted && !password && (
                        <div className="help-block text-danger">
                          Password is required
                        </div>
                      )}
                    </div>

                    <div className="d-flex justify-content-between align-items-center">
                      <a href="#!" className="text-body">
                        Forgot password?
                      </a>
                    </div>

                    <div className="text-center text-lg-start mt-4 pt-2">
                      <button
                        type="submit"
                        className="btn btn-dark btn-lg"
                        style={{
                          paddingLeft: '2.5rem',
                          paddingRight: '2.5rem'
                        }}
                      >
                        Login
                      </button>
                      <p className="small fw-bold mt-2 pt-1 mb-0">
                        Don't have an account?{' '}
                        <a href="/signup" className="link-danger">
                          Register
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function mapStateToProps(state) {
  const { loggingIn } = state.authentication
  return {
    loggingIn
  }
}

const connectedLoginPage = connect(mapStateToProps)(Login)
export { connectedLoginPage as Login }
