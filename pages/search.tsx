import NewsArticleGrid from '@/components/NewsArticleGrid';
import { NewsArticle } from '@/models/NewsArticle';
import { FONT_MANIFEST } from 'next/dist/shared/lib/constants';
import React, { FormEvent, useState } from 'react'
import { Button, Form, Spinner } from "react-bootstrap";
import Head from "next/head";

const search = () => {

  const [searchResult, setSearchResult] = useState<NewsArticle[] | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [searchResultLoadingIsError, setSearchResultLoadingIsError] = useState(false);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement)
    const searchQuery = formData.get("searchQuery")?.toString().trim();

    if (searchQuery) {
      try {
        setSearchResult(null);
        setSearchResultLoadingIsError(false);
        setIsLoading(true);
        const response = await fetch("/api/search-news?q=" + searchQuery);
        const articles: NewsArticle[] = await response.json();
        setSearchResult(articles);
      } catch (error) {
        console.error(error);
        setSearchResultLoadingIsError(true);
      }
      finally {
        setIsLoading(false);
      }
    }
  }

  return (
    <>
      <Head>
        <title key="title">Search-News</title>
      </Head>
      <main>
        <h1>Search News...</h1>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='search-input'>
            <Form.Label>
              Search Query
            </Form.Label>
            <Form.Control name='searchQuery' placeholder='E.g. sports, geo-politics, ...' />
          </Form.Group>
          <Button type='submit' className='mb-3' disabled={isLoading}>Submit</Button>
        </Form>
        <div className='d-flex flex-column align-items-center'>
          {isLoading && <Spinner animation='border' />}
          {searchResultLoadingIsError && <p>Something went wrong. Please try again...</p>}
          {searchResult?.length === 0 && <p>Not found...</p>}
          {searchResult && <NewsArticleGrid articles={searchResult} />}
        </div>
      </main>
    </>
  )
}

export default search
