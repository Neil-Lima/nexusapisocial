'use client';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faNewspaper, faClock } from '@fortawesome/free-solid-svg-icons';
import { useTheme } from '@/context/ThemeContext';
import {
  NewsContainer,
  NewsHeader,
  NewsList,
  NewsItem,
  NewsTitle,
  NewsTime,
  NewsIcon
} from './styles/NewsStyles';
import { useNews } from './utils/NewsUtils';

function NewsLatestComp() {
  const { theme } = useTheme();
  const { news, handleNewsClick } = useNews();

  return (
    <NewsContainer theme={theme}>
      <NewsHeader theme={theme}>
        <NewsIcon theme={theme}>
          <FontAwesomeIcon icon={faNewspaper} />
        </NewsIcon>
        <h5>Latest News</h5>
      </NewsHeader>
      
      <NewsList>
        {news.map((newsItem) => (
          <NewsItem 
            key={newsItem.id}
            onClick={() => handleNewsClick(newsItem)}
            theme={theme}
          >
            <NewsTitle theme={theme}>{newsItem.title}</NewsTitle>
            <NewsTime theme={theme}>
              <FontAwesomeIcon icon={faClock} />
              <span>{newsItem.time}</span>
            </NewsTime>
          </NewsItem>
        ))}
      </NewsList>
    </NewsContainer>
  );
}

export default NewsLatestComp;
