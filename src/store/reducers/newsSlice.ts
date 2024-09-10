import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "@utils/Article";

export interface NewsState {
  news: Article[];
  isLoading: boolean;
  error: string;
}

const initialState: NewsState = {
  news: [],
  isLoading: false,
  error: '',
}

export const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {
    newsFetching(state) {
      state.isLoading = true;
    },
    newsFetchingSuccess(state, action: PayloadAction<Article[]>) {
      state.isLoading = false;
      state.error = '';
      state.news = action.payload;
    },
    newsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
  }
})

export default newsSlice.reducer