import alt from '../alt'

class UserActions {
  constructor () {
    this.generateActions(
      'loginUserSuccess',
      'loginUserFail',
      'logoutUserSuccess'
    )
  }

  loginUser () {
    let request = {
      url: '/user/login',
      method: 'POST',
      data: JSON.stringify({ username: 'admin', password: 'admin' }),
      contentType: 'application/json'
    }

    $.ajax(request)
      .done(userId => {
        // this.setState({
        //   loggedInUserId: userId
        // })
        this.loginUserSuccess(userId)
      })
      .fail(err => {
        // console.log('UserMenu: err', err)
        // this.setState({
        //   loggedInUserId: '',
        //   message: err.responseJSON.message
        // })
        this.loginUserFail(err)
      })

    return true
  }

  logoutUser () {
    let request = {
      url: '/user/logout',
      method: 'POST'
    }

    $.ajax(request)
      .done(() => {
        // this.setState({
        //   loggedInUserId: ''
        // })
        this.logoutUserSuccess()
      })
      // .fail(err => {
      //   this.setState({
      //     error: err.responseJSON.message
      //   })
      // })

    return true
  }
}

export default alt.createActions(UserActions)
