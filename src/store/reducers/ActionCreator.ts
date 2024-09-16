import { AppDispatch } from "..";
import { Article } from "@utils/types/Article";

import { newsSlice } from "./newsSlice";

export const switchArticle =
  (article: Article) => async (dispatch: AppDispatch) => {
    dispatch(newsSlice.actions.changeCurrentArticle(article));
  };

export const switchPage = (page: number) => async (dispatch: AppDispatch) => {
  dispatch(newsSlice.actions.changeCurrentPage(page));
};

export const chengeIsOpen = () => async (dispatch: AppDispatch) => {
  dispatch(newsSlice.actions.openMenu());
};
