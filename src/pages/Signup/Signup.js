import React, { useEffect, useState } from 'react'
import { Alert } from 'react-bootstrap'
import { connect, useSelector } from 'react-redux'
import { authActions } from '../../actions/auth'
import '../Login/login.scss'

const Signup = (props) => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [phone, setPhone] = useState('')
  const [validation, setValidation] = useState(true)
  const [submitted, setSubmitted] = useState(false)
  const loggedIn = useSelector((state) => state.authentication.loggedIn)
  const error = useSelector((state) => state.authentication.error)

  useEffect(() => {
    props.dispatch(authActions.logout())
  }, [])

  useEffect(() => {
    if (submitted && !loggedIn) {
      setValidation(false)
    } else if (submitted && loggedIn) {
      props.history.push('/')
    }
  }, [loggedIn, submitted])

  function handleChange(e) {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        setName(value)
        return
      case 'email':
        setEmail(value)
        return
      case 'password':
        setPassword(value)
        return
      case 'phone':
        setPhone(value)
        return
      default:
        return
    }
  }

  function handleSubmit(e) {
    e.preventDefault()

    const { dispatch } = props

    const payload = {
      name,
      email,
      password,
      phone
    }
    setSubmitted(true)

    if (name && email && phone && password) {
      dispatch(authActions.signup(payload))
    }
  }

  return (
    <section className="vh-100" style={{ paddingTop: '6rem' }}>
      <div className="px-4 py-5 px-md-5 text-center text-lg-start">
        <div className="container">
          <div className="row gx-lg-5 align-items-center">
            <div className="col-lg-6 mb-5 mb-lg-0">
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
                      <Alert.Heading>Signup failed!</Alert.Heading>
                      <p>{error?.error?.message}</p>
                    </Alert>
                  ) : (
                    ''
                  )}
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-4 mt-4">
                      <input
                        type="text"
                        id="form3Example1"
                        className="form-control"
                        name="name"
                        value={name}
                        onChange={handleChange}
                      />
                      {submitted && !name && (
                        <div className="form-text text-danger">
                          Name is required
                        </div>
                      )}
                      <label className="form-label" htmlFor="form3Example1">
                        Name
                      </label>
                    </div>
                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        id="form3Example2"
                        className="form-control"
                        name="email"
                        value={email}
                        onChange={handleChange}
                      />
                      {submitted && !email && (
                        <div className="form-text text-danger">
                          Email is required
                        </div>
                      )}
                      <label className="form-label" htmlFor="form3Example2">
                        Email address
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        id="form3Example3"
                        className="form-control"
                        name="password"
                        value={password}
                        onChange={handleChange}
                      />
                      {submitted && !password && (
                        <div className="form-text text-danger">
                          Password is required
                        </div>
                      )}
                      <label className="form-label" htmlFor="form3Example3">
                        Password
                      </label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="text"
                        id="form3Example4"
                        className="form-control"
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                      />
                      {submitted && !phone && (
                        <div className="form-text text-danger">
                          Phone number is required
                        </div>
                      )}
                      <label className="form-label" htmlFor="form3Example4">
                        Phone
                      </label>
                    </div>

                    <button
                      type="submit"
                      className="btn btn-dark btn-block mb-4"
                    >
                      Sign up
                    </button>
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
  const { loggingIn, loggedIn } = state.authentication
  return {
    loggingIn,
    loggedIn
  }
}

const connectedSignupPage = connect(mapStateToProps)(Signup)
export { connectedSignupPage as Signup }
