import styled from "styled-components";

export const StyledSideArticle = styled.div`
  display: flex;
  width: 100%;
  height: 170px;
  align-items: center;
  gap: 24px;
  border-bottom: 1px solid #F0F1F1;
  padding-top: 24px;
  padding-bottom: 24px;
  cursor: pointer;

  &:hover {
    background-color: #F0F1F1;
  }
`

export const ArticleImg = styled.img`
  width: 32.7%;
  max-width: 140px;
  height: 122px;
  object-fit: cover;

  @media (max-width: 698px) {
    width: 140px;
  }
`

export const ArticleInfo = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 122px;
  text-decoration: none;
`

export const Title = styled.h1`
  font-size: 16px;
  font-weight: 700;
  line-height: 20.8px;
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  height: 2.6em;
  text-decoration: none;
`

export const Description = styled.p`
  font-size: 13px;
  font-weight: 300;
  line-height: 16.25px;
  color: #393939;

  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  line-height: 1.3em;
  height: 3.9em;

  @media (max-width: 876px) {
    -webkit-line-clamp: 2;
    height: 2.6em;
  }

  @media (max-width: 698px) {
    -webkit-line-clamp: 3;
    height: 3.9em;
  }
`

export const AuthorAndDate = styled.h3`
  font-size: 13px;
  font-weight: 300;
  line-height: 16.25px;
`

export const Date = styled.time`
  color: #898989;
`