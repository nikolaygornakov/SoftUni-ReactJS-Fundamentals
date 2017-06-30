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
        this.loginUserSuccess(userId)
      })
      .fail(err => {
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
        this.logoutUserSuccess()
      })

    return true
  }
}

export default alt.createActions(UserActions)
