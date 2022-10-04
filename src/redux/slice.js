import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
	shop: {
		items: {
			loading: false,
			data: [],
			error: null
		},
		item: {
			loading: false,
			data: [],
			error: null
		},
		cart: []
	}
}

export const getItems = createAsyncThunk("items/getItems", async () => {
	const productsUrl = "https://fakestoreapi.com/products";
	const res = await fetch(productsUrl);
	const res_1 = await res.json();
	let data = res_1.map(item => {
		return { ...item, added: 0, price: item.price * 30 }
	})
	return data;
});

export const appSlice = createSlice({
	name: 'appState',
	initialState,
	reducers: {
		setCart: (state, action) => {
			state.shop.cart = action.payload
		},
		viewItem: (state, action) => {
			state.item = action.payload
		},
		clearCart: (state) => {
			state.cart = [];
		}
	},
	extraReducers: {
		[getItems.pending]: state => {
			state.shop.items.loading = true;
		},
		[getItems.fulfilled]: (state, action) => {
			state.shop.items.data = action.payload;
			state.shop.items.loading = false;
		},
		[getItems.rejected]: state => {
			state.shop.items.loading = false;
		},
	}
});

export const { setCart, viewItem, removeFromCart, clearCart } = appSlice.actions;
export default appSlice.reducer;