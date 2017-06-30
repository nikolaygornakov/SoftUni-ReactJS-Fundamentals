export default class Helpers {
  static sortElements (array, sortBy, order) {

    if (order === 'ascending' || order === 'asc') {
      array = array.sort((e1, e2) => {
        if (sortBy === 'title') {
          return e1.title > e2.title
        } else if (sortBy === 'author') {
          return e1.author > e2.author
        } else if (sortBy === 'date') {
          return e1.date > e2.date
        } else if (sortBy === 'price') {
          return e1.id > e2.id
        }

        return e1.id > e2.id
      })
    } else if (order === 'descending' || order === 'desc') {
      array = array.sort((e1, e2) => {
        if (sortBy === 'title') {
          return e1.title < e2.title
        } else if (sortBy === 'author') {
          return e1.author < e2.author
        } else if (sortBy === 'date') {
          return e1.date < e2.date
        } else if (sortBy === 'price') {
          return e1.id < e2.id
        }

        return e1.id < e2.id
      })
    }
    return array
  }

  static getElements (array, count) {
    let elements = array.slice(0, count)

    return elements
  }
}
