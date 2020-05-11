import axios from 'axios'

class ApiClient {
  constructor () {
    this.apiClient = axios.create({
      baseURL: 'http://localhost:3005',
      withCredentials: true
    })
  }

  get (endpoint) {
    return this.apiClient.get(endpoint)
  }

  post (endpoint, data) {
    return this.apiClient.post(endpoint, data)
  }
}

const apiClient = new ApiClient()
export default apiClient