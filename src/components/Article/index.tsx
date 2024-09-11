import * as React from "react"
import { ArticleImg, ArticleWrapper, Text } from "./styled"
import Chips from "@components/Chips"
import Titles from "@components/Titles"
import content from "@assets/image-off.svg"
import { useAppSelector } from "@hooks/redux"

function Article() {
  const {currentArticle} = useAppSelector(state => state.newsReducer)

  return (
    <ArticleWrapper>
      <Chips publisher={currentArticle.source.name}/>
      <Titles article={currentArticle}/>
      <ArticleImg src={currentArticle.urlToImage || content} alt="Article Image"/>
      <Text>
        <h2></h2>
        <p>{currentArticle.content}</p>
      </Text>
    </ArticleWrapper>
  )
}

export default Article