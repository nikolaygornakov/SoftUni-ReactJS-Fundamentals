import alt from '../alt'

import MovieAddActions from '../actions/MovieAddActions'
import Helpers from '../utilities/Helpers'

class MovieAddStore {
  constructor () {
    this.bindActions(MovieAddActions)

    this.name = ''
    this.description = ''
    this.genres = ''
    this.moviePosterUrl = ''
    this.genresValidationState = ''
    this.nameValidationState = ''
    this.helpBlock = ''
  }

  onAddMovieSuccess () {
    console.log('Movie added!')
  }

  onAddMovieFail (err) {
    console.log('Movie faild to add!', err)
  }

  onHandleNameChange (event) {
    this.name = event.target.value
    this.nameValidationState = ''
    this.helpBlock = ''
  }

  onHandleDescriptionChange (event) {
    this.description = event.target.value
    this.genresValidationState = ''
    this.helpBlock = ''
  }

  onHandleGenresChange (event) {
    let genreValue = event.target.value

    if (this.genres.indexOf(genreValue) === -1) {
      this.genres = Helpers.appendToArray(genreValue, this.genres)
    } else {
      this.genres = Helpers.removeFromArray(genreValue, this.genres)
    }

    this.genresValidationState = ''
    this.helpBlock = ''
  }

  onNameValidationFail () {
    this.nameValidationState = 'has-error'
    this.helpBlock = 'Enter movie name'
  }

  onGenresValidationFail () {
    this.genresValidationState = 'has-error'
    this.helpBlock = 'Select at least one movie genre'
  }
}

export default alt.createStore(MovieAddStore)
