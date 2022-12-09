import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = [];
export const fetchFoodCategories = createAsyncThunk("categories", () => {
  return axios
    .get("https://developers.zomato.com/api/v2.1/categories")
    .then((response) => response.data.map((category) => category.id));
});

const foodSlice = createSlice({
  name: "food",
  initialState,
  reducers: {
    
  },
});
export default foodSlice.reducer;
