import { combineReducers } from "redux";

const init = {
  shop: {
    items: [],
    item: {},
    cart: []
  }
}

const reducer = (state=init.shop, { type, payload }) => {
  switch(type) {
    case "GET_ALL_ITEMS":
      return { ...state, items: payload }
    case "GET_ITEM":
      return { ...state, item: payload }
    case "GET_CART":
      return { ...state, cart: payload }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter(item => item.id !== payload.itemId)
      }
    case "CLEAR_CART" :
      return { ...state, cart: [] }
    default: return state;
  }
}

const reducers = combineReducers({
  shop: reducer
})

export default reducers;
