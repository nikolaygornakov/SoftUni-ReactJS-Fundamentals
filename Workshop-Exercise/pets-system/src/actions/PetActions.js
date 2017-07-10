import dispatcher from '../dispatcher'

const petActions = {
  types: {
    CREATE_PET: 'CREATE_PET'
  },
  createPet (pet) {
    dispatcher.dispatch({
      type: this.types.CREATE_PET,
      pet
    })
  }
}

export default petActions
