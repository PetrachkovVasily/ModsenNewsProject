import React from "react";

import { useAppDispatch } from "@hooks/redux";
import { EMPTY_IMG, FIRST_ARTICLE } from "@constants/notes";
import { switchArticle } from "@store/reducers/ActionCreator";
import { SideArticleProps } from "@utils/types/SideArticleProps";

import {
  ArticleImg,
  ArticleInfo,
  AuthorAndDate,
  Date,
  Description,
  StyledSideArticle,
  Title,
} from "./styled";

export function SideArticle({ article }: SideArticleProps) {
  const dispatch = useAppDispatch();

  const memorisedChangeAtricle = React.useCallback(handleChangeArticle, [
    article,
  ]);

  function handleChangeArticle() {
    dispatch(switchArticle(article));
    window.scroll(FIRST_ARTICLE, FIRST_ARTICLE);
  }

  return (
    <StyledSideArticle onClick={memorisedChangeAtricle}>
      <ArticleImg src={article.urlToImage || EMPTY_IMG} alt="Article Image" />
      <ArticleInfo>
        <Title>{article.title}</Title>
        <Description>{article.description}</Description>
        <AuthorAndDate>
          {article.author} - <Date>{article.publishedAt}</Date>
        </AuthorAndDate>
      </ArticleInfo>
    </StyledSideArticle>
  );
}
