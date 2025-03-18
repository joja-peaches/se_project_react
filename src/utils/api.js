const baseUrl = "http://localhost:3001";
const baseHeaders = { "content-type": "application/json" };

// function _checkResponse(res) {
//   return res.ok ? res.json() : Promise.reject(`Error ${res.status}`);
// }

// function _request(url, options) {
//   return fetch(url, options).then(_checkResponse);
// }

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => {
    return res.ok ? res.json() : Promise.reject(`Error: ${res.status}`);
  });
  // return _request(`${baseUrl}/items`);
}

function addItem({name, imageUrl, weather}) {
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: baseHeaders,
    body: JSON.stringify({ name, imageUrl, weather }),
  });
}

// function deleteItem(id) {
//   return _request(`${baseUrl}/items/${id}`, {
//     method: "DELETE",
//     headers: baseHeaders,
//   });
// }

export { getItems, addItem };
