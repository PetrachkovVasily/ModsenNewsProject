import React from "react";

import { SideArticleProps } from "@utils/types/SideArticleProps";

import {
  ArticleHeader,
  Author,
  Date,
  Description,
  StyledTitles,
} from "./styled";

function Titles({ article }: SideArticleProps) {
  return (
    <StyledTitles>
      <ArticleHeader>{article.title}</ArticleHeader>
      <Description>
        <Date>{article.publishedAt}</Date>
        <Author>by {article.source.name}</Author>
      </Description>
    </StyledTitles>
  );
}

export default Titles;
