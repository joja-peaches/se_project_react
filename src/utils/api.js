import { getToken } from "./token";

const baseUrl = "http://localhost:3001";
const baseHeaders = { "Content-Type": "application/json" };

function _checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
}

function _request(url, options) {
  return fetch(url, options).then(_checkResponse);
}

function getItems() {
  return _request(`${baseUrl}/items`, { headers: baseHeaders });
}

function addItem(name, imageUrl, weather) {
  return _request(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}

function deleteItem(_id) {
  return _request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: baseHeaders,
  });
}

function addCardLike(_id) {
  return _request(`${baseUrl}/items/${_id}/likes`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ isLiked: true }),
  });
}

function removeCardLike(_id) {
    return _request(`${baseUrl}/items/${_id}/likes`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${getToken()}`,
    },
    body: JSON.stringify({ isLiked: false }),
  });
}

export {
  getItems,
  addItem,
  deleteItem,
  _checkResponse,
  addCardLike,
  removeCardLike,
};
