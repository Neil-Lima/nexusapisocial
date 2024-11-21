'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground, GradientText, IconWrapper } from '@/styles/GlobalStyles';

// Componentes Globais
import NavMenuComp from '@/shared/navbar/NavMenuComp';
import ProfileCardComp from '@/shared/profile/ProfileCardComp';
import StoriesComp from '@/shared/stories/StoriesComp';
import CreatePostComp from '@/shared/post/CreatePostComp';
import PostCardComp from '@/shared/post/PostCardComp';
import LoadMoreComp from '@/shared/loadmore/LoadMoreComp';
import SuggestionsFriendComp from '@/shared/suggestions/SuggestionsFriendComp';
import NewsLatestComp from '@/shared/news/NewsLatestComp';
import MessengerWindowComp from '@/shared/messenger/MessengerWindowComp';
import MenuListComp from '@/shared/menu/MenuListComp';
import ProfileStatsCardComp from '@/shared/profile/ProfileStatsCardComp';

export default function FeedPage() {
  const { theme } = useTheme();

  return (
    <>
     <NavMenuComp />
     <GradientBackground theme={theme}>     
     <Container>
       <Row>
         <Col lg={3}>
           <ProfileCardComp />
           <ProfileStatsCardComp />
           <MenuListComp />
         </Col>
         <Col lg={6}>
           <StoriesComp />
           <CreatePostComp />
           <PostCardComp />
           <LoadMoreComp />
         </Col>
         <Col lg={3}>
         <SuggestionsFriendComp />
           <NewsLatestComp />
         </Col>
       </Row>
     </Container>
     <MessengerWindowComp />
   </GradientBackground>
    </>
 
  );
}
