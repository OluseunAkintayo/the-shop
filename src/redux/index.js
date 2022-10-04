import { configureStore } from "@reduxjs/toolkit";
import reducer from './slice';
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const config = {
	key: 'appState',
	storage
}

const storedReducer = persistReducer(config, reducer);

const store = configureStore({
	reducer: storedReducer,
	middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false })
});

export default store;