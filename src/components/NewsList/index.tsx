import * as React from "react"
import { StyledNewsList } from "./styled"
import SideArticle from "@components/SideArticle"
import { useAppDispatch, useAppSelector } from "@hooks/redux"

function NewsList() {
  const dispatch = useAppDispatch()
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer)

  return (
    <StyledNewsList>
      {
        news.map((article) => {
          return <SideArticle key={article.url} article={article}/>
        })
      }
    </StyledNewsList>
  )
}

export default NewsList