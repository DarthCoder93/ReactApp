export const ADD_TO_CART = 'globel/ADD_TO_CART'


const initialState = {
    cartItems: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
       const cartItems = [...state.cartItems, action.cartItem]
      return {
        ...state,
        cartItems: cartItems
      }

    default:
      return state
  }
}

