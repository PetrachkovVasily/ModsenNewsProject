import * as React from "react";
import { StyledNewsList } from "./styled";
import SideArticle from "@components/SideArticle";
import { useAppSelector } from "@hooks/redux";
import { Link } from "react-router-dom";
import { MAIN } from "@constants/routsPaths";

function NewsList() {
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

export default NewsList;
