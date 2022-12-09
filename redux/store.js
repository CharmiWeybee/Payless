import { createWrapper, HYDRATE } from 'next-redux-wrapper';
import { configureStore } from '@reduxjs/toolkit';
import { foodApi } from "./api/Food/foodApi";

export const store = configureStore({
      reducer: {
            [foodApi.reducerPath]: foodApi.reducer,
      },
      middleware:(getDefaultMiddleware)=> {
        return getDefaultMiddleware().concat(foodApi.middleware);
      }
    });
  
