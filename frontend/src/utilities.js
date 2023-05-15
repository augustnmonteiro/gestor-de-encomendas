function Request(url, options) {
    url = 'http://localhost:3001' + url;
    return fetch(url, options);
  }

export default Request;