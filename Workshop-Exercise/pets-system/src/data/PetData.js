import Data from './Data'

const baseUrl = '/pets'

class PetData {
  static create (pet) {
    return Data.post(`${baseUrl}/create`, pet, true)
  }
}

export default PetData
