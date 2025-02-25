import React from 'react';

/**
 * UserCard displays user information based on passed props.
 *
 * @param {object} props - Component properties.
 * @param {string} props.name - The user's name.
 * @param {number} props.age - The user's age.
 */
const UserCard = ({ name, age }) => {
  return (
    <div className="user-card">
      <h2>{name}</h2>
      <p>Age: {age}</p>
    </div>
  );
};

export default UserCard;
