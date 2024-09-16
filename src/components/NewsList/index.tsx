import * as React from "react";

import { Link } from "react-router-dom";

import { MAIN } from "@constants/routsPaths";
import { useAppSelector } from "@hooks/redux";
import { SideArticle } from "@components/SideArticle";

import { StyledNewsList } from "./styled";

export function NewsList() {
  const { news } = useAppSelector((state) => state.newsReducer);

  return (
    <StyledNewsList>
      {news.map((article) => {
        return (
          <Link key={article.url} to={MAIN}>
            <SideArticle key={article.url} article={article} />
          </Link>
        );
      })}
    </StyledNewsList>
  );
}
