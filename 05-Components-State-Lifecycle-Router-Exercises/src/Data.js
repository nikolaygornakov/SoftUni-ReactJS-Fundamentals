let books = [
  { id: 1, title: 'a', description: 'First Book', authorId: 2, image: 'http://smartmobilestudio.com/wp-content/uploads/2012/06/leather-book-preview.png', price: '2', date: '2017-06-28' },
  { id: 2, title: 'b', description: 'Second Book', authorId: 1, image: 'https://rachelandrew.co.uk/perch/resources/sb3-smashing-book-3-redesign-the-web1.png', price: '12', date: '2017-06-24' },
  { id: 3, title: 'c', description: 'Third Book', authorId: 3, image: 'http://www.thefutureorganization.com/wp-content/uploads/2014/03/book-image-crop.jpg', price: '23', date: '2017-05-16' },
  { id: 4, title: 'd', description: 'Fourth Book', authorId: 1, image: 'https://static01.nyt.com/images/2017/06/15/arts/15BOOKWINSLOW1/15BOOKWINSLOW1-videoLarge.jpg', price: '5', date: '2017-06-25' },
  { id: 5, title: 'e', description: 'Fifth Book', authorId: 3, image: 'https://i.imgur.com/1w6UFY9.jpg', price: '13', date: '2017-06-27' }
]

let authors = [
  { id: 1, name: 'Author 1', image: 'http://www.picgifs.com/clip-art/cartoons/tasmanian-devil/clip-art-tasmanian-devil-400744.jpg' },
  { id: 2, name: 'Author 2', image: 'http://www.mejorperu.com/wp-content/commentavatars/FH03%20copy.gif' },
  { id: 3, name: 'Author 3', image: 'http://scrumandkanban.co.uk/wp-content/uploads/2013/07/DavidLowe.jpg' }
]

let comments = [
  { id: 1, text: 'Comment 1', bookId: 2 },
  { id: 2, text: 'Comment 2', bookId: 3 },
  { id: 3, text: 'Comment 3', bookId: 1 },
  { id: 4, text: 'Comment 4', bookId: 2 }
]

const data = {
  getBooks: (bookId) => {
    return new Promise((resolve, reject) => {
      if (!bookId) {
        resolve(books)
        return
      }

      let index = -1
      for (let i = 0; i < books.length; i += 1) {
        if (books[i].id === Number(bookId)) {
          index = i
          break
        }
      }
      let bookById = ''
      if (index > -1) {
        bookById = books.splice(index, 1)
      }
      resolve(bookById)
    })
  },
  getAuthors: (id) => {
    return new Promise((resolve, reject) => {
      if (!id) {
        resolve(authors)
        return
      }
      let index = -1
      for (let i = 0; i < authors.length; i += 1) {
        if (authors[i].id === Number(id)) {
          index = i
          break
        }
      }
      let authorById = ''
      if (index > -1) {
        authorById = authors.splice(index, 1)
      }

      resolve(authorById)
    })
  },
  getComments: () => {
    return new Promise((resolve, reject) => {
      resolve(comments)
    })
  }
}

export default data
