import {configureStore} from "@reduxjs/toolkit"
import { setupListeners } from '@reduxjs/toolkit/query'
import { productsApi } from "./service/productsService/products"
import { setUserData, userApi } from "./service/productsService/userAuth"

export const store = configureStore({
    reducer:{
        [productsApi.reducerPath]: productsApi.reducer,
        [userApi.reducerPath]: userApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(productsApi.middleware, userApi.middleware),
})
store.dispatch(setUserData(null));
setupListeners(store.dispatch)