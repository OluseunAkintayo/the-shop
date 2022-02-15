export const loadItems = items => {
  return {
    type: "GET_ALL_ITEMS",
    payload: items
  }
}

export const loadItem = item => {
  return {
    type: "GET_ITEM",
    payload: item
  }
}

export const loadCart = cart => {
  return {
    type: "GET_CART",
    payload: cart
  }
}

export const clearCart = () => {
  return {
    type: "CLEAR_CART",
  }
}

export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: { itemId: id }
  }
}

export const qtyChange = (id, qty) => {
  return {
    type: "ADJUST_QTY",
    payload: { id: id, added: qty }
  }
}

export const removeItem = id => {
  return {
    type: "REMOVE_FROM_CART",
    payload: { itemId: id }
  }
}
