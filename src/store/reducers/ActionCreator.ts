import { Article, IArticles } from "@utils/Article";
import { AppDispatch } from "..";
import { newsSlice } from "./newsSlice";
import axios from "axios";

const API_KEY = 'deffc5a5a03d4d18b6e5b2e3980a2810';
const URL = 'https://newsapi.org/v2/everything?' +
'q=all&' +
'pageSize=8&' +
'page=';
const KEY_PARAMS = '&apiKey=' + API_KEY;

export const fetchNews = (page: number) => async (dispatch: AppDispatch) => {  
    try {
        dispatch(newsSlice.actions.newsFetching());
        const response = await axios.get<IArticles>(URL + page + KEY_PARAMS);
        dispatch(newsSlice.actions.newsFetchingSuccess(response.data.articles)); 

        if (page == 1) {
            dispatch(newsSlice.actions.changeCurrentArticle(response.data.articles[0]))
        }
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        dispatch(newsSlice.actions.newsFetchingError(message));
    }
}

export const switchArticle = (article: Article) => async (dispatch: AppDispatch) => {
    dispatch(newsSlice.actions.changeCurrentArticle(article))
}

export const switchPage = (page: number) => async (dispatch: AppDispatch) => {
    dispatch(newsSlice.actions.changeCurrentPage(page))
}

export const chengeIsOpen = () => async (dispatch: AppDispatch) => {
    dispatch(newsSlice.actions.openMenu())
}