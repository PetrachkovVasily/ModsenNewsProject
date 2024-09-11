import { createSlice, current, PayloadAction } from "@reduxjs/toolkit";
import { Article } from "@utils/Article";

export interface NewsState {
  news: Article[];
  isLoading: boolean;
  error: string;
  currentPage: number;
  currentArticle: Article;
  isOpen: boolean
}

const initialState: NewsState = {
  news: [],
  isLoading: false,
  error: '',
  currentPage: 1,
  currentArticle: {
    author: "",
    content: "",
    description: "",
    publishedAt: "",
    source: {
      name: ""
    },
    title: "",
    url: "",
    urlToImage: ""
  },
  isOpen: false,
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
      if (state.currentPage == 1){
        state.news = action.payload
      } else {
        state.news = [...state.news, ...action.payload];
      }
    },
    newsFetchingError(state, action: PayloadAction<string>) {
      state.isLoading = false;
      state.error = action.payload;
    },
    changeCurrentPage(state, action: PayloadAction<number>) {
      state.currentPage = action.payload + 1;
    },
    changeCurrentArticle(state, action: PayloadAction<Article>) {      
      state.currentArticle = action.payload;
    },
    openMenu(state) {
      state.isOpen = !state.isOpen;
      
      const element = document.getElementById('sideWrapper')
      if (element) {
        if (state.isOpen)
        element.style.right = '0'
        else 
        element.style.right = '-390px'
      }
    }
  }
})

export default newsSlice.reducer