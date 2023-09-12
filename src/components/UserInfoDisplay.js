import React from 'react';

function UserInfoDisplay({ userData }) {
  return (
    <div>
      <h2>User Information</h2>
      <p>Name: {userData.name}</p>
      <p>Public Repositories: {userData.public_repos}</p>
    </div>
  );
}

export default UserInfoDisplay;
