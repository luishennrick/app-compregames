import axios from 'axios';

const API_URL = 'http://127.0.0.1:8000/produtos/';

export function getProducts() {
    return axios.get(API_URL)
        .then(response => response.data);
}

export function getProduct(id) {
  return axios.get(`${API_URL}${id}/`)
      .then(response => response.data);
}