import {configureStore} from "@reduxjs/toolkit";
import myReducer from "./cartSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: "root",
    storage,
  };

  const persistedReducer = persistReducer(persistConfig, myReducer);
const store= configureStore({
    reducer:{
       mycart:persistedReducer
    }
})


export const persistor = persistStore(store);
export default store;