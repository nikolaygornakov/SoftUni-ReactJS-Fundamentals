let books = [
  { id: 1, title: 'One', author: 'First' },
  { id: 1, title: 'Two', author: 'Second' },
  { id: 1, title: 'Three', author: 'Third' },
  { id: 1, title: 'Four', author: 'Fourth' },
  { id: 1, title: 'Five', author: 'Fifth' }
]

let authors = [
  { id: 1, name: 'Author 1' },
  { id: 2, name: 'Author 2' },
  { id: 3, name: 'Author 3' }
]

let comments = [
  { id: 1, text: 'Comment 1' },
  { id: 2, text: 'Comment 2' },
  { id: 3, text: 'Comment 3' },
  { id: 4, text: 'Comment 4' }
]

const data = {
  getBooks: () => {
    return new Promise((resolve, reject) => {
      resolve(books)
    })
  },
  getAuthors: () => {
    return new Promise((resolve, reject) => {
      resolve(authors)
    })
  },
  getComments: () => {
    return new Promise((resolve, reject) => {
      resolve(comments)
    })
  }
}

export default data
