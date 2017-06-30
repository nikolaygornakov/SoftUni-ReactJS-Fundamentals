import alt from '../alt'

class FooterActions {
  constructor () {
    this.generateActions(
      'getFiveRecentMoviesSuccess'
    )
  }

  getFiveRecentMovies () {
    let request = {
      url: '/api/movies/five-recent',
      method: 'GET'
    }

    $.ajax(request)
      .done(data => {
        this.getFiveRecentMoviesSuccess(data)
      })

    return true
  }
}

export default alt.createActions(FooterActions)
