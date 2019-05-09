export const ADD_TO_CART = 'globel/ADD_TO_CART'
export const REMOVE_FROM_CART = 'globel/REMOVE_FROM_CART'
export const CHNAGE_CART_ITEM_QTY = 'globel/CHNAGE_CART_ITEM_QTY'
export const CART_PURCHASING = 'globel/CART_PURCHASING'
export const CART_PURCHASE_SUCCESS = 'globel/CART_PURCHASE_SUCCESS'
export const CART_PURCHASE_FAILED = 'globel/CART_PURCHASE_FAILED'


const initialState = {
  cartItems: [],
  total: 0,
  purchasing: false,
  success: false,
  error: false,
  errorMsg: ""
}

export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      //add intial qty as 1
      var cartItem = action.cartItem
      cartItem.qty = 1

      //calculate the discounted price
      if (cartItem.discount){
        cartItem.discountedPrice =  cartItem.price - (cartItem.price * cartItem.discount/100)
      } else {
        cartItem.discountedPrice = cartItem.price
      }
      //add cart item to the redux store
      const cartItems = [...state.cartItems, cartItem]

      //add to total
      var total = state.total + cartItem.discountedPrice

      return {
        ...state,
        cartItems: cartItems,
        total: total
      }
    }
    case CHNAGE_CART_ITEM_QTY: {
      var cartItems = [...state.cartItems]

      cartItems.forEach(item => {
        if (item._id == action.prductID) {
          item.qty = parseInt(action.qty, 10);
        }
      })

      //recalculate Total
      var total = 0
      cartItems.forEach(product => {
        var productTotal = product.discountedPrice * product.qty
        total = total + productTotal
      })

      return {
        ...state,
        cartItems: cartItems,
        total: total
      }
    }
    case REMOVE_FROM_CART: {
      var cartItems = [...state.cartItems]

      var removeIndex = 0

      cartItems.forEach((item,index) => {
        if (item._id == action.prductID) {
          removeIndex = index
        }
      })

      cartItems.splice(removeIndex, 1);

        //recalculate Total
        var total = 0
        cartItems.forEach(product => {
          var productTotal = product.discountedPrice * product.qty
          total = total + productTotal
        })

      return {
        ...state,
        cartItems: cartItems,
        total: total
      }
    }
    case CART_PURCHASING: {
      return {
        ...state,
        purchasing: true
      }
    }
    case CART_PURCHASE_SUCCESS: {
      return {
        ...state,
        purchasing: false,
        success: true
      }
    }
    case CART_PURCHASE_FAILED: {
      return {
        ...state,
        purchasing: false,
        error: true,
        errorMsg: action.errorMsg
      }
    }
    default:
      return state
  }
}


