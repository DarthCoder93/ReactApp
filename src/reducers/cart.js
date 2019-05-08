export const ADD_TO_CART = 'globel/ADD_TO_CART'
export const REMOVE_FROM_CART = 'globel/REMOVE_FROM_CART'
export const CHNAGE_CART_ITEM_QTY = 'globel/CHNAGE_CART_ITEM_QTY'


const initialState = {
  cartItems: []
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      //add intial qty as 1
      var cartItem = action.cartItem
      cartItem.qty = 1
      //add cart item to the redux store
      const cartItems = [...state.cartItems, cartItem]
      return {
        ...state,
        cartItems: cartItems
      }
    }
    case CHNAGE_CART_ITEM_QTY: {
      var cartItems = [...state.cartItems]

      cartItems.forEach(item => {
        if (item._id == action.prductID) {
          item.qty = parseInt(action.qty, 10);
        }
      })

      return {
        ...state,
        cartItems: cartItems
      }
    }
    default:
      return state
  }
}

