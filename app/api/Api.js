class Api {

  static apiFetch(method, path, params) {
    const headers = {
      'X-Requested-With': 'XMLHttpRequest',
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    };

    const authToken = alt.stores.UsersStore.getAuthenticationToken();
    if (authToken) {
      headers.Authorization = `Token token=${authToken}`;
    }
    params.api = 'true';
    return fetch(`${CONFIG.API_URL}${path}`, {
      method: method,
      headers: headers,
      credentials: 'include',
      body: JSON.stringify(params),
    }).then( (response) => {
      if (response.status === 401) {
        alt.actions.UsersActions.logout();
        return Promise.reject(response);
      } else if (response.status !== 200 && response.status !== 201) {
        return Promise.reject(response);
      }
      return response.json();
    }).then( (json) => {
      return new Promise((resolve) => {
        React.InteractionManager.runAfterInteractions(() => {
          resolve(Immutable.fromJS(json));
        });
      });
    });
  }

  static get(path, params) {
    return this.fetch('GET', path, params);
  }

  static post(path, params) {
    return this.fetch('POST', path, params);
  }

  static put(path, params) {
    return this.fetch('PUT', path, params);
  }

  static delete(path, params) {
    return this.fetch('DELETE', path, params);
  }

}

export default Api;
