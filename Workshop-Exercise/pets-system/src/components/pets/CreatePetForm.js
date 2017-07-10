import React, { Component } from 'react'
import Input from '../common/forms/Input'
import Select from '../common/forms/Select'

class CreatePetForm extends Component {
  render () {
    const petTypes = ['Cat', 'Dog', 'Turtle', 'Other']

    return (
      <div>
        <form>
          <div>{this.props.error}</div>
          <Input
            name='name'
            placeholder='Name'
            value={this.props.pet.name}
            onChange={this.props.onChange} />
          <br />
          <Input
            name='image'
            type='url'
            placeholder='Image'
            value={this.props.pet.image}
            onChange={this.props.onChange} />
          <br />
          <Input
            name='age'
            type='number'
            placeholder='Age'
            value={this.props.pet.age}
            onChange={this.props.onChange} />
          <br />
          <Select
            name='type'
            label='Type'
            value={this.props.pet.type}
            options={petTypes}
            onChange={this.props.onChange} />
          <br />
          <Input
            name='breed'
            placeholder='Breed'
            value={this.props.pet.breed}
            onChange={this.props.onChange} />
          <br />

          <input type='submit' onClick={this.props.onSave} />
        </form>
      </div>
    )
  }
}

export default CreatePetForm
