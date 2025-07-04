import { getToken } from "./token";
import { baseUrl } from "./constants";

const baseHeaders = {
  Accept: "application/json",
  "Content-Type": "application/json",
};

function _checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
}

function _request(url, options) {
  return fetch(url, options).then(_checkResponse);
}

function getItems() {
  return _request(`${baseUrl}/items`, {
    headers: baseHeaders,
  });
}

function addItem({ name, imageUrl, weather }) {
  return _request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}

function deleteItem(_id) {
  return _request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

function addCardLike(_id) {
  return _request(`${baseUrl}/items/${_id}/likes`, {
    method: "PUT",
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

function removeCardLike(_id) {
  return _request(`${baseUrl}/items/${_id}/likes`, {
    method: "DELETE",
    headers: {
      ...baseHeaders,
      Authorization: `Bearer ${getToken()}`,
    },
  });
}

export {
  getItems,
  addItem,
  deleteItem,
  _checkResponse,
  _request,
  addCardLike,
  removeCardLike,
};
