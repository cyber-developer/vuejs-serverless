import axios from 'axios'

const BASE_URL = "https://k9gpvso2ge.execute-api.ap-northeast-2.amazonaws.com/beta/";

export function get(url, params) {
    return new Promise(function (resolve, reject) {
        axios.get(BASE_URL + url, { params: params })
            .then(response => {
                if (response) {
                    resolve(response);
                }
            })
            .catch(error => {
              reject(error);
            });
    })
}

export function post(url, payload) {
    return new Promise(function (resolve, reject) {
        axios.post(BASE_URL + url, payload)
            .then(response => {
                if (response) {
                    resolve(response);
                }
            })
            .catch(error => {
              reject(error);
            });
    })
}

export function put(url, payload) {
    return new Promise(function (resolve, reject) {
        axios.put(BASE_URL + url, payload)
            .then(response => {
                if (response) {
                    resolve(response);
                }
            })
            .catch(error => {
                reject(error);
            });
    })
}

export default {
    get,
    put,
    post
}