import * as React from "react"
import { StyledNewsList } from "./styled"
import SideArticle from "@components/SideArticle"
import { useAppDispatch, useAppSelector } from "@hooks/redux"
import { Link } from "react-router-dom"

function NewsList() {
  const dispatch = useAppDispatch()
  const {news, isLoading, error} = useAppSelector(state => state.newsReducer)

  return (
    <StyledNewsList>
      {
        news.map((article) => {
          return (
            <Link key={article.url} to={''}>
              <SideArticle key={article.url} article={article}/>
            </Link>
          )
        })
      }
    </StyledNewsList>
  )
}

export default NewsList