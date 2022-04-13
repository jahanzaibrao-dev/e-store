import axios from 'axios'
import { authUtils } from '../utils/auth.utils'

const baseUrl = 'http://localhost:8080/api'

export const authService = {
  getAuthHeaders,
  signup,
  login,
  logout,
  getAllUsers,
  isLoggedIn
}

function isLoggedIn() {
  const token = getAccessToken()
  if (!token || token === '') {
    return false
  }

  if (authUtils.isTokenExpired(token)) return false

  return true
}

function getAuthHeaders() {
  const token = getAccessToken()
  if (token !== '') return { headers: { Authorization: 'Bearer ' + token } }
  else return {}
}

function logout() {
  localStorage.removeItem('user')
  setAccessToken('')
}

async function signup(user) {
  return axios
    .post(`${baseUrl}/users/signup`, user)
    .then((res) => {
      setAccessToken(res.data.token)
      setUser(res.data.user)
      return res.data
    })
    .catch((err) => {
      throw err.response.data
    })
}

async function login(email, password) {
  if (!email) {
    throw new Error('email is not present')
  }
  if (!password) {
    throw new Error('password is not present')
  }
  return axios
    .post(`${baseUrl}/users/login`, { email, password })
    .then((res) => {
      setAccessToken(res.data.token)
      setUser(res.data.user)
      return res.data
    })
    .catch((err) => {
      throw err.response.data
    })
}

async function getAllUsers() {
  return axios.get(`${baseUrl}/users`, getAuthHeaders())
}

function setAccessToken(token) {
  console.log('token: ', token)
  localStorage.setItem('accessToken', token)
}

function getAccessToken() {
  return localStorage.getItem('accessToken') ?? ''
}

function setUser(user) {
  console.log('token: ', user)
  localStorage.setItem('user', JSON.stringify(user))
}

function getUser() {
  return JSON.parse(localStorage.getItem('accessToken')) ?? ''
}
