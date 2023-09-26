import React from 'react';

function UserSelector({ users, selectedUser, onSelectUser }) {
  return (
    <div>
      <label>Select User: </label>
      <select value={selectedUser} onChange={onSelectUser}>
        {users.map((user) => (
          <option key={user.id} value={user.id}>
            {user.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default UserSelector;
