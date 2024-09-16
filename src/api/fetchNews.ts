import axios from "axios";
import { AppDispatch } from "@store/index";
import { newsSlice } from "@store/reducers/newsSlice";
import { IArticles } from "@utils/types/Article";

const API_KEY = process.env.APP_KEY;
const URL =
  "https://newsapi.org/v2/everything?" + "q=all&" + "pageSize=8&" + "page=";
const KEY_PARAMS = "&apiKey=" + API_KEY;

export const fetchNews = (page: number) => async (dispatch: AppDispatch) => {
  try {
    dispatch(newsSlice.actions.newsFetching());
    const response = await axios.get<IArticles>(URL + page + KEY_PARAMS);
    dispatch(newsSlice.actions.newsFetchingSuccess(response.data.articles));

    if (page == 1) {
      dispatch(
        newsSlice.actions.changeCurrentArticle(response.data.articles[0])
      );
    }
  } catch (error) {
    let message;
    if (error instanceof Error) message = error.message;
    else message = String(error);
    dispatch(newsSlice.actions.newsFetchingError(message));
  }
};
