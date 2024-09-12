export type Article = {
  author: string;
  content: string;
  description: string;
  publishedAt: string;
  source: {
    name: string;
    
  };
  title: string;
  url: string;
  urlToImage: string;
}

export type IArticles = {
  articles: Article[]
}