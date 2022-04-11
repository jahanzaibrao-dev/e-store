import axios from "axios";
import { authUtils } from "../utils/auth.utils";

const baseUrl = process.env.API_URl;

export const authService = {
  getAuthHeaders,
  signup,
  login,
  logout,
  getAllUsers,
  isLoggedIn,
};

function isLoggedIn() {
  const token = getAccessToken();
  if (!token || token === "") {
    return false;
  }

  if (authUtils.isTokenExpired(token)) return false;

  return true;
}

function getAuthHeaders() {
  const token = getAccessToken();
  if (token !== "") return { headers: { Authorization: "Bearer " + token } };
  else return {};
}

function logout() {
  localStorage.removeItem("user");
  setAccessToken("");
}

async function signup(user) {
  axios.post(`${baseUrl}/user/signup`, user);
}

async function login(email, password) {
  if (!email) {
    throw new Error("email is not present");
  }
  if (!password) {
    throw new Error("password is not present");
  }
  return axios
    .post(`${baseUrl}/user/login`, { email, password })
    .then((res) => {
      setAccessToken(res.data.token);
      setUser(res.data.user);
      return res.data;
    })
    .catch((err) => {
      throw new Error(err.message);
    });
}

async function getAllUsers() {
  return axios.get(`${baseUrl}/user`, getAuthHeaders());
}

function setAccessToken(token) {
  localStorage.setItem("accessToken", token);
}

function getAccessToken() {
  return localStorage.getItem("accessToken") ?? "";
}

function setUser(user) {
  localStorage.setItem("accessToken", JSON.stringify(user));
}

function getUser() {
  return JSON.parse(localStorage.getItem("accessToken")) ?? "";
}
