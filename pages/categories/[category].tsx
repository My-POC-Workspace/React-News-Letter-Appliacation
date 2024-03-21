// import NewsArticleGrid from '@/components/NewsArticleGrid';
// import { NewsArticle, NewsResponse } from '@/models/NewsArticle';
// import { GetStaticPaths, GetStaticProps } from 'next';
// import React from 'react'

// interface CategoryNewsPageProps {
//   newsArticles: NewsArticle[],
// }

// export const getStaticPaths: GetStaticPaths = async () => {
//   const categorySlugs = [
//     "business",
//     "entertainment",
//     "general",
//     "health",
//     "science",
//     "sports",
//     "technology",
//   ];

//   const paths = categorySlugs.map(slug => ({ params: {category: slug} }));

//   return {
//      paths, 
//      fallback: false,  // means if none of the business categories found, then whether we want to provide some fallback or 404.
//     };

// }

// export const getStaticProps: GetStaticProps<CategoryNewsPageProps> = async ({ params }) => {
//   const category = params?.category?.toString();  // category should be same as [filename]
//   const response = await fetch(`https://newsapi.org/v2/top-headlines?category=${category}&apiKey=+${process.env.NEWS_API_KEY}`)

//   const newsResponse: NewsResponse = await response.json();

  
//   return {
//     props: {
//         newsArticles: newsResponse.articles
//       }
//   }
// }

// const categoryNewsPage = ({ newsArticles }: CategoryNewsPageProps) => {
//   return (
//     <>
//       <main>
//         <NewsArticleGrid articles={newsArticles} />
//       </main>
//     </>
//   )
// }

// export default categoryNewsPage;
