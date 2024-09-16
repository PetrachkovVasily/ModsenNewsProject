import * as React from "react";
import {
  ArticleImg,
  ArticleInfo,
  AuthorAndDate,
  Date,
  Description,
  StyledSideArticle,
  Title,
} from "./styled";
import content from "@assets/image-off.svg";
import { useAppDispatch } from "@hooks/redux";
import { switchArticle } from "@store/reducers/ActionCreator";
import { SideArticleProps } from "@utils/types/SideArticleProps";
import { FIRST_ARTICLE } from "@constants/notes";

export function SideArticle({ article }: SideArticleProps) {
  const dispatch = useAppDispatch();

  function handleChangeArticle() {
    dispatch(switchArticle(article));
    window.scroll(FIRST_ARTICLE, FIRST_ARTICLE);
  }

  return (
    <StyledSideArticle onClick={handleChangeArticle}>
      <ArticleImg src={article.urlToImage || content} alt="Article Image" />
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
