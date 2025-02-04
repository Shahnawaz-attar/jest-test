import React from 'react';
import useFetch from './useFetch';

const FetchDemo = () => {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/users');

  if (loading) return <p>Loading users...</p>;
  if (error) return <p>Error fetching users: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {data.map(user => (
          <li key={user.id}>
            <strong>{user.name}</strong> ({user.email})
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FetchDemo;
