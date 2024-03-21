import { NewsArticle } from '@/models/NewsArticle'
import React from 'react'
import { Card } from 'react-bootstrap'

interface NewsArticleEntryProps {
    article: NewsArticle;
}

// Each of this will represent one news article on UI
const NewsArticleEntry = ({ article: { title, description, url, urlToImage } }: NewsArticleEntryProps) => {

    const validateUrl = (urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://")) ? urlToImage : undefined;

    return (
        <div>
            <a href={url}>
                <Card className='h-100'>
                    <Card.Img variant='top' src={url}>
                    </Card.Img>
                    <Card.Body>
                        <Card.Title>
                            {title}
                        </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                    </Card.Body>
                </Card>
            </a>
        </div>
    )
}

export default NewsArticleEntry
