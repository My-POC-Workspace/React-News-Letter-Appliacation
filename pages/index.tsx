import NewsArticleEntry from "@/components/NewsArticleEntry";
import NewsArticleGrid from "@/components/NewsArticleGrid";
import { NewsArticle, NewsResponse } from "@/models/NewsArticle";
import { GetServerSideProps } from "next";
import { Alert } from "react-bootstrap";
import Head from "next/head";

interface BreakingNewsPageProps{
  newsArticles: NewsArticle[];
}

// Server side rendering --> means we want to extract the data from server rather than the client. getServerSideProps will only work on server but not on client.
export const getServerSideProps: GetServerSideProps<BreakingNewsPageProps> = async() => {
  // await new Promise(returnData => setTimeout(returnData, 2000)); now code will wait for 2000ms for response and if response not found then it will call 
  const response = await fetch("https://newsapi.org/v2/everything?q=apple&from=2023-04-30&to=2023-04-30&sortBy=popularity&apiKey=" + process.env.NEWS_API_KEY);
  const newsResponse: NewsResponse = await response.json();

  return {
    props: {newsArticles: newsResponse.articles}
  }
}

export default function BreakingNewsPage( {newsArticles} : BreakingNewsPageProps ) {
  return (
    <>
      <Head>
        <title key="title">Breaking News - NextJS with TS News App</title>
      </Head>
      <main>
        <h1> Breaking News... </h1>
        <Alert>
          This page uses <strong>getServerSideProps</strong> to fetch data server side on every requests. This allow search engines to crawl the page content and <strong>imporves SEO</strong> 
        </Alert>
        <NewsArticleGrid articles={newsArticles}/>
      </main>
    </>
  )
}
