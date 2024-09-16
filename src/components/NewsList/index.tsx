import * as React from "react";
import { StyledNewsList } from "./styled";
import { useAppSelector } from "@hooks/redux";
import { Link } from "react-router-dom";
import { MAIN } from "@constants/routsPaths";
import { SideArticle } from "@components/SideArticle";

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
