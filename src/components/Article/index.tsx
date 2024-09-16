import * as React from "react";

import Titles from "@components/Titles";
import { Chips } from "@components/Chips";
import { EMPTY_IMG } from "@constants/notes";
import { useAppSelector } from "@hooks/redux";

import { ArticleImg, ArticleWrapper, Text } from "./styled";

export function Article() {
  const { currentArticle } = useAppSelector((state) => state.newsReducer);

  return (
    <ArticleWrapper>
      <Chips publisher={currentArticle.source.name} />
      <Titles article={currentArticle} />
      <ArticleImg
        src={currentArticle.urlToImage || EMPTY_IMG}
        alt="Article Image"
      />
      <Text>
        <h2></h2>
        <p>{currentArticle.content}</p>
      </Text>
    </ArticleWrapper>
  );
}
