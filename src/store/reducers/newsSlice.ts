import { Article } from "@utils/types/Article";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BURGER_ID, MAX_RIGHT, MIN_PAGE, MIN_RIGHT } from "@constants/notes";

export interface NewsState {
  news: Article[];
  isLoading: boolean;
  error: string;
  currentPage: number;
  currentArticle: Article;
  isOpen: boolean;
}

const initialState: NewsState = {
  news: [],
  isLoading: false,
  error: "",
  currentPage: MIN_PAGE,
  currentArticle: {
    author: "",
    content: "",
    description: "",
    publishedAt: "",
    source: {
      name: "",
    },
    title: "",
    url: "",
    urlToImage: "",
  },
  isOpen: false,
};

export const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    newsFetching(state) {
      state.isLoading = true;
    },
    newsFetchingSuccess(state, action: PayloadAction<Article[]>) {
      state.isLoading = false;
      state.error = "";
      if (state.currentPage == MIN_PAGE) {
        state.news = action.payload;
      } else {
        state.news = [...state.news, ...action.payload];
      }
    },
    newsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload + MIN_PAGE;
    },
    changeCurrentArticle(state, action: PayloadAction<Article>) {
      state.currentArticle = action.payload;
    },
    openMenu(state) {
      state.isOpen = !state.isOpen;

      const element = document.getElementById(BURGER_ID);
      if (element) {
        if (state.isOpen) element.style.right = MIN_RIGHT;
        else element.style.right = MAX_RIGHT;
      }
    },
  },
});

export default newsSlice.reducer;
