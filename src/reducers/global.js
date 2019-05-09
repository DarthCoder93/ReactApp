export const AUTH_STATE_CHANGED = 'globel/AUTH_STATE_CHANGED'


const initialState = {
  signedIn: false,
  uid: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case AUTH_STATE_CHANGED:
      return {
        ...state,
        signedIn: action.isSignedIn,
        uid: action.uid
      }

    default:
      return state
  }
}

