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

export const addToCart = (id) => {
  return {
    type: "ADD_TO_CART",
    payload: { id: id }
  }
}
