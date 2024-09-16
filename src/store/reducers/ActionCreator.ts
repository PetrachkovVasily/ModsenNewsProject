import { AppDispatch } from "..";
import { newsSlice } from "./newsSlice";
import { Article } from "@utils/types/Article";

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
