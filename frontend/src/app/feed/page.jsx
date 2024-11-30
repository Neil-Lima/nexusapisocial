'use client';
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground, GradientText, IconWrapper } from '@/styles/GlobalStyles';

// Componentes Globais
import NavMenuComp from '@/shared/navbar/NavMenuComp';
import ProfileCardComp from '@/shared/profile/components/ProfileCardComp';
import StoriesComp from '@/shared/stories/StoriesComp';
import CreatePostComp from '@/shared/post/components/CreatePostComp';
import PostCardComp from '@/shared/post/components/PostCardComp';
import LoadMoreComp from '@/shared/loadmore/LoadMoreComp';
import SuggestionsFriendComp from '@/shared/suggestions/SuggestionsFriendComp';
import NewsLatestComp from '@/shared/news/NewsLatestComp';
import MessengerWindowComp from '@/shared/messenger/MessengerWindowComp';
import ProfileStatsCardComp from '@/shared/profile/components/ProfileStatsCardComp';
import MenuListComp from '@/shared/profile/components/MenuListComp';

export default function FeedPage() {
  const { theme } = useTheme();

  return (
    <>
     <NavMenuComp />
     <GradientBackground theme={theme}>     
     <Container>
       <Row>
         <Col lg={3}>
         <ProfileCardComp theme={theme}/>
           <ProfileStatsCardComp theme={theme}/>
           <MenuListComp theme={theme} /> 
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
