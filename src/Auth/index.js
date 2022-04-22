const baseURL = process.env.REACT_APP_API_URL
export const getToken = async ({ username, password }) => {
  try {
    let token = await fetch(baseURL + '/api/token', {
      method: 'POST',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded',
        Accept: 'application/json',
      },
      body: `grant_type=&username=${username}&password=${password}&scope=&client_id=&client_secret=`,
    })
    token = await token.json()
    if (token.access_token)
      return {
        authToken: token.access_token,
        success: true,
      }

    return { success: false }
  } catch (error) {
    console.log('Unable to login')
    return {
      success: false,
    }
  }
}
export const getUser = async () => {
  try {
    const authToken = localStorage.getItem('authToken')
    const user_json = await fetch(baseURL + '/api/users/me', {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + authToken,
      },
    })
    const user = await user_json.json()
    console.log(user)
    if (user.firstname) {
      localStorage.setItem('user', JSON.stringify(user))
      return { ...user, success: true }
    }
    return { success: false }
  } catch (error) {
    console.log(error)
    return { success: false }
  }
}

export const createUser = async (user) => {
  console.log(user)
}
export const signout = () => {
  localStorage.removeItem('authToken')
  window.location.href = '/login'
}
