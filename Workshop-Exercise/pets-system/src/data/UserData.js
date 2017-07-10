const baseUrl = 'http://localhost:5000'

const getOptions = (method) => ({
  method: method,
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const handleJsonResponse = res => res.json()

class UserData {
  static register (user) {
    const method = 'POST'
    const options = getOptions(method)
    options.body = JSON.stringify(user)

    return window
    .fetch(`${baseUrl}/auth/signup`, options)
    .then(handleJsonResponse)
  }

  static login (user) {
    const method = 'POST'
    const options = getOptions(method)
    options.body = JSON.stringify(user)

    return window.fetch(`${baseUrl}/auth/login`, options)
    .then(handleJsonResponse)
  }
}

export default UserData
