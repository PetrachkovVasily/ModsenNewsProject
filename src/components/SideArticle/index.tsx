import * as React from "react"
import { ArticleImg, ArticleInfo, AuthorAndDate, Date, Description, StyledSideArticle, Title } from "./styled"
import content from "@assets/image-off.svg"
import { Article } from "@utils/Article";
import { SideArticleProps } from "@utils/SideArticleProps";
import { useAppDispatch, useAppSelector } from "@hooks/redux";
import { switchArticle } from "@store/reducers/ActionCreator";

function SideArticle({article}: SideArticleProps) {
  const dispatch = useAppDispatch()
  const {currentArticle, isLoading, error} = useAppSelector(state => state.newsReducer)

  function handleChangeArticle() {
    dispatch(switchArticle(article))
    window.scroll(0, 0)
  }
  
  return (
    <StyledSideArticle onClick={handleChangeArticle}>
      <ArticleImg src={article.urlToImage || content} alt="Article Image"/>
      <ArticleInfo>
        <Title>
          {article.title}
        </Title>
        <Description>
          {article.description}
        </Description>
        <AuthorAndDate>
          {article.author} - <Date>{article.publishedAt}</Date>
        </AuthorAndDate>
      </ArticleInfo>
    </StyledSideArticle>
  )
}

export default SideArticle