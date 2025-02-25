import React from 'react';
import { useParams } from 'react-router-dom';

/**
 * UserProfile component displays a user id from route parameters.
 */
const UserProfile = () => {
  const { userId } = useParams();
  return <p>User ID: {userId}</p>;
};

export default UserProfile;
