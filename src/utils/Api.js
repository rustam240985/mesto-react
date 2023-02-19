import { configApi } from "./constants";

class Api {
  constructor({ baseUrl, cohortId, headers }) {
    this._baseUrl = baseUrl;
    this._cohortId = cohortId;
    this._headers = headers;
  }

  _checkStatus(res) {
    if (res.ok) {
      return res.json()
    }
    return Promise.reject(res.status)
  }

  getUser() {
    return fetch(`${this._baseUrl}/${this._cohortId}/users/me`, {
      headers: this._headers
    })
      .then(this._checkStatus)
  }

  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/${this._cohortId}/cards`, {
      method: 'POST',
      headers: this._headers,
      body: JSON.stringify({
        name,
        link
      })
    })
      .then(this._checkStatus)
  }

  setUser({ name, info }) {
    return fetch(`${this._baseUrl}/${this._cohortId}/users/me`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        name,
        about: info
      })
    })
      .then(this._checkStatus)
  }

  setUserAvatar({ avatar }) {
    return fetch(`${this._baseUrl}/${this._cohortId}/users/me/avatar`, {
      method: 'PATCH',
      headers: this._headers,
      body: JSON.stringify({
        avatar
      })
    })
      .then(this._checkStatus)
  }

  likeCard(id) {
    return fetch(`${this._baseUrl}/${this._cohortId}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._headers
    })
      .then(this._checkStatus)
  }

  deleteLikeCard(id) {
    return fetch(`${this._baseUrl}/${this._cohortId}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkStatus)
  }

  deleteCard(id) {
    return fetch(`${this._baseUrl}/${this._cohortId}/cards/${id}`, {
      method: 'DELETE',
      headers: this._headers
    })
      .then(this._checkStatus)
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/${this._cohortId}/cards`, {
      headers: this._headers
    })
      .then(this._checkStatus)
  }

}

const api = new Api(configApi);

export default api;