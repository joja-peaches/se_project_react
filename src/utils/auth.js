import { setToken, getToken } from "./token";

const baseUrl = "http://localhost:3001";
const baseHeaders = { "Content-Type": "application/json" };

function _checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(res);
}

function _request(url, options) {
  return fetch(url, options).then(_checkResponse);
}

function signUp(email, password, name, avatar) {
  return _request(`${baseUrl}/signup`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ email, password, name, avatar }),
  });
}

function signIn(email, password) {
  return _request(`${baseUrl}/signin`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ email, password }),
  }).then((res) => {
    // localStorage.setItem("jwt", res.token);
    setToken(res.token);
    return res;
  });
}

function getUserInfo(token) {
  return _request(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
}

export { signUp, signIn, getUserInfo };
