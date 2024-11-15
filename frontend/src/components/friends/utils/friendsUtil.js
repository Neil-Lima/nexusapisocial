import { useState, useEffect } from 'react';

export const mockFriends = [
  { id: 1, name: 'Naruto Uzumaki', image: 'https://example.com/naruto.jpg', isFriend: true },
  { id: 2, name: 'Sasuke Uchiha', image: 'https://example.com/sasuke.jpg', isFriend: true },
  { id: 3, name: 'Sakura Haruno', image: 'https://example.com/sakura.jpg', isFriend: false },
  { id: 4, name: 'Kakashi Hatake', image: 'https://example.com/kakashi.jpg', isFriend: true },
  { id: 5, name: 'Hinata Hyuga', image: 'https://example.com/hinata.jpg', isFriend: false },
  { id: 6, name: 'Shikamaru Nara', image: 'https://example.com/shikamaru.jpg', isFriend: true },
  { id: 7, name: 'Ino Yamanaka', image: 'https://example.com/ino.jpg', isFriend: true },
  { id: 8, name: 'Choji Akimichi', image: 'https://example.com/choji.jpg', isFriend: false },
  { id: 9, name: 'Rock Lee', image: 'https://example.com/lee.jpg', isFriend: true },
  { id: 10, name: 'Neji Hyuga', image: 'https://example.com/neji.jpg', isFriend: false }
];

export const useFriends = () => {
  const [friends, setFriends] = useState(mockFriends);
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (term) => {
    setSearchTerm(term);
    if (!term) {
      setFriends(mockFriends);
      return;
    }
    
    const filtered = mockFriends.filter(friend =>
      friend.name.toLowerCase().includes(term.toLowerCase())
    );
    setFriends(filtered);
  };

  const toggleFriendStatus = (id) => {
    setFriends(friends.map(friend => 
      friend.id === id 
        ? { ...friend, isFriend: !friend.isFriend }
        : friend
    ));
  };

  return {
    friends,
    searchTerm,
    handleSearch,
    toggleFriendStatus
  };
};

export const defaultCategories = [
  'All',
  'Close Friends',
  'Family',
  'Work',
  'School',
  'Gaming',
  'Sports',
  'Art',
  'Music',
  'Travel'
];

export const friendsNavItems = [
  { icon: 'home', text: 'Feed', color: '#FF0080' },
  { icon: 'user', text: 'Connections', color: '#7928CA' },
  { icon: 'globe', text: 'Latest News', color: '#4a00e0' },
  { icon: 'users', text: 'Groups', color: '#8e2de2' }
];

export const friendStats = {
  totalFriends: mockFriends.filter(f => f.isFriend).length,
  pendingRequests: 5,
  mutualFriends: 12,
  onlineFriends: 8
};
