const baseUrl = "http://localhost:3001";
const baseHeaders = { "content-type": "application/json" };

function _checkResponse(res) {
  return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
}

function _request(url, options) {
  return fetch(url, options).then(_checkResponse);
}

function signUp() {
  return _request(`${baseUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name, avatar, email, password }),
  });
}

function signIn() {
  return _request(`${baseUrl}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, password }),
  });
}

function getItems() {
  return _request(`${baseUrl}/items`, { headers: baseHeaders });
}

function addItem(name, imageUrl, weather) {
  return _request(`${baseUrl}/items`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}

function deleteItem(_id) {
  return _request(`${baseUrl}/items/${_id}`, {
    method: "DELETE",
    headers: baseHeaders,
  });
}

export { signUp, signIn, getItems, addItem, deleteItem, _checkResponse };
