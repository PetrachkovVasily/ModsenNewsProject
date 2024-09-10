import { Article } from "@utils/Article";
import { AppDispatch } from "..";
import { newsSlice } from "./newsSlice";
import axios from "axios";

const API_KEY = 'deffc5a5a03d4d18b6e5b2e3980a2810';
const URL = 'https://newsapi.org/v2/everything?' +
'q=all&' +
'pageSize=8&' +
'page=1&' +
'apiKey=' + API_KEY;

export const fetchNews = () => async (dispatch: AppDispatch) => {  
    try{
        dispatch(newsSlice.actions.newsFetching());
        const response = await axios.get<Article[]>(URL);
        dispatch(newsSlice.actions.newsFetchingSuccess(response.data)); 
    } catch(error) {
        let message
        if (error instanceof Error) message = error.message
        else message = String(error)
        dispatch(newsSlice.actions.newsFetchingError(message));
    }
     
}