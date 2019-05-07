export const AUTH_STATE_CHANGED = 'globel/AUTH_STATE_CHANGED'


const initialState = {
  signedIn: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_STATE_CHANGED:
      return {
        ...state,
        signedIn: action.isSignedIn
      }

    default:
      return state
  }
}

