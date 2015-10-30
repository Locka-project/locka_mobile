class Api {

  static apiFetch(method, path, params) {
    const headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    let url = `${CONFIG.API_URL}${path}`;
    params.api = 'true';

    const authToken = alt.stores.UsersStore.getAuthenticationToken();
    if (authToken) {
      headers.Authorization = `Bearer ${authToken}`;
    }

    if (method === 'GET') {
      params = _.map(params, (value, key) => {
        if (Array.isArray(value)) {
          return _.map(value, (v) => {
            return `${key}[]=${v}`;
          }).join('&');
        }
        return `${key}=${value}`;
      }).join('&');
      params = encodeURI(params);
      url = `${url}?${params}`;
      params = null;
    }
    return fetch(url, {
      method: method,
      headers: headers,
      credentials: 'include',
      body: params ? JSON.stringify(params) : null,
    }).then( (response) => {
      console.log('res', response);
      if (response.status === 401) {
        alt.actions.UsersActions.logout();
        return Promise.reject(response);
      } else if (response.status !== 200 && response.status !== 201) {
        return Promise.reject(response);
      }
      return response.json();
    }).then( (json) => {
      return Immutable.fromJS(json);
    });
  }

  static get(path, params) {
    return this.apiFetch('GET', path, params);
  }

  static post(path, params) {
    return this.apiFetch('POST', path, params);
  }

  static put(path, params) {
    return this.apiFetch('PUT', path, params);
  }

  static delete(path, params) {
    return this.apiFetch('DELETE', path, params);
  }

}

export default Api;
