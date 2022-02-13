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
    case "ADD_TO_CART":
      let cartItem = state.shop.cart.find(item => item.id === payload.id);
      return {
        ...state,
        cart: []
      }
    default: return state
  }
}

const reducers = combineReducers({
  shop: reducer
})

export default reducers;
