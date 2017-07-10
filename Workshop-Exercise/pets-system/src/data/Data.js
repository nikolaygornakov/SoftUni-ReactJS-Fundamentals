const baseUrl = 'http://localhost:5000'

const getOptions = () => ({
  mode: 'cors',
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }
})

const handleJsonResponse = res => res.json()

class Data {
  static post (url, data) {
    let options = getOptions()
    options.method = 'POST'
    options.body = JSON.stringify(data)

    return window.fetch(`${baseUrl}/${url}`, options)
      .then(handleJsonResponse)
  }
}

export default Data
