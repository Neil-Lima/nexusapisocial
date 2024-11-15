'use client';
import React from 'react';
import { Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUsers, faUserPlus, faUserFriends, faCircle } from '@fortawesome/free-solid-svg-icons';
import { StyledCard, GradientText } from './styles/friendsStyle';
import { friendStats } from './utils/friendsUtil';
import { useTheme } from '@/context/ThemeContext';

function FriendsStatsComp() {
  const { theme } = useTheme();

  const stats = [
    { icon: faUsers, label: 'Total Friends', value: friendStats.totalFriends },
    { icon: faUserPlus, label: 'Pending Requests', value: friendStats.pendingRequests },
    { icon: faUserFriends, label: 'Mutual Friends', value: friendStats.mutualFriends },
    { icon: faCircle, label: 'Online Friends', value: friendStats.onlineFriends }
  ];

  return (
    <StyledCard className="mb-4">
      <Card.Body>
        <h5 className="mb-4">Friends Statistics</h5>
        <Row>
          {stats.map((stat, index) => (
            <Col key={index} xs={6} className="mb-3">
              <div className="d-flex align-items-center">
                <FontAwesomeIcon icon={stat.icon} className="me-2" />
                <div>
                  <small>{stat.label}</small>
                  <GradientText theme={theme} className="d-block">
                    {stat.value}
                  </GradientText>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Card.Body>
    </StyledCard>
  );
}

export default FriendsStatsComp;
