export default class HttpClient {

  headers = null
  api_url = ''

  constructor(apiUrl) {
    this.headers = new Headers()
    this.api_url = apiUrl
  }

  initRequest() {
    return {
      cache: 'default',
      headers: this.headers
    }
  }

  handleError(response) {
    if (!response.ok) throw new Error(response.statusText)
    return response
  }

  get(endPoint) {
    const init = {
      ...this.initRequest(),
      method: 'GET'
    }
    const url = `${this.api_url}${endPoint}`

    return fetch(url, init)
      .then(response => this.handleError(response))
      .then(response => response.json())
      .catch(error => { throw new Error(error.message) })
  }

}
