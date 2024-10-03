import React, { useState } from 'react';
import usersData from '../data/users.json';
import UserListItem from './UserListItem';

const UserList = ({ searchTerm }) => {
  const [users, setUsers] = useState(usersData);

  // Filter the users based on the search term
  const filteredUsers = users.filter((user) =>
    user.first.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleUserDelete = (userId) => {
    setUsers((prevUsers) => prevUsers.filter((user) => user.id !== userId));
  };

  return (
    <div className="user-list">
      {filteredUsers.map((user) => (
        <UserListItem
          key={user.id}
          user={user}
          onDelete={() => handleUserDelete(user.id)}
        />
      ))}
    </div>
  );
};

export default UserList;
