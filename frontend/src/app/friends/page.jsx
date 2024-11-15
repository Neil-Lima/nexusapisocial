'use client';
import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTheme } from '@/context/ThemeContext';
import { GradientBackground } from '@/styles/GlobalStyles';
import FriendsStatsComp from '@/components/friends/friendsStatsComp';
import FriendsFilterComp from '@/components/friends/friendsFilterComp';
import { useFriends } from '@/components/friends/utils/friendsUtil';
import FriendsHeaderComp from '@/components/friends/FriendsHeaderComp';
import FriendsSearchComp from '@/components/friends/FriendsSearchComp';
import FriendsListComp from '@/components/friends/FriendsListComp';
import ProfileCardComp from '@/shared/profile/ProfileCardComp';
import MenuListComp from '@/shared/profile/MenuListComp';
import NavMenuComp from '@/shared/navbar/NavMenuComp';

export default function FriendsPage() {
  const { theme } = useTheme();
  const [selectedCategory, setSelectedCategory] = useState('All');
  const { friends, searchTerm, handleSearch, toggleFriendStatus } = useFriends();

  return (
    <>
    <NavMenuComp />
     <GradientBackground theme={theme}>
      <Container>
        <Row>
        <Col lg={3}>
           <ProfileCardComp />
           <MenuListComp />
         </Col>
          <Col lg={6}>
            <FriendsHeaderComp />
            <FriendsSearchComp 
              searchTerm={searchTerm} 
              onSearch={handleSearch} 
            />                         
            <FriendsListComp 
              friends={friends}
              onToggleFriend={toggleFriendStatus}
            />
          </Col>
          <Col lg={3}>
          <FriendsStatsComp />
          <FriendsFilterComp 
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </Col>
        </Row>
      </Container>
    </GradientBackground>
    </>
   
  );
}
