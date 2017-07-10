import React, { Component } from 'react'
import FormHelpers from '../common/forms/FormHelpers'
import CreatePetForm from '../pets/CreatePetForm'
import petActions from '../../actions/PetActions'
import petStore from '../../stores/PetStore'

import toastr from 'toastr'

class CreatePetPage extends Component {
  constructor (props) {
    super(props)

    this.state = {
      pet: {
        name: 'Kotaka',
        age: 3,
        type: 'Cat',
        image: 'https://static.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg',
        breed: 'Random'
      },
      error: ''
    }

    this.handlePetChange = this.handlePetChange.bind(this)
    this.handlePetForm = this.handlePetForm.bind(this)
    this.handlePetCreation = this.handlePetCreation.bind(this)

    petStore.on(
      petStore.eventTypes.PET_CREATED,
      this.handlePetCreation
    )
  }

  componentWillUnmount () {
    petStore.removeListener(
      petStore.eventTypes.PET_CREATED,
      this.handlePetCreation
    )
  }

  handlePetChange (event) {
    FormHelpers.handleFormChange.bind(this)(event, 'pet')
  }

  handlePetCreation (data) {
    if (!data.success) {
      const firstError = FormHelpers.getError(data)

      toastr.error(firstError)

      this.setState({
        error: firstError
      })
    } else {
      toastr.success(data.message)
      this.props.history.push(`/pets/details/${data.pet.id}`)
    }
  }

  handlePetForm (event) {
    event.preventDefault()

    // validate form data

    petActions.createPet(this.state.pet)
  }

  render () {
    return (
      <div>
        <h1>Add New Pet</h1>
        <CreatePetForm
          pet={this.state.pet}
          error={this.state.error}
          onChange={this.handlePetChange}
          onSave={this.handlePetForm} />
      </div>
    )
  }
}

export default CreatePetPage
