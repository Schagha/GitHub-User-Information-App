import React, { useState } from 'react';
import axios from 'axios';
import UserInfoDisplay from './UserInfoDisplay';
import RepositoriesList from './RepositoriesList';

function UserInfo() {
  const [username, setUsername] = useState('');
  const [userData, setUserData] = useState(null);
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUserData = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/users/${username}`);
      setUserData(response.data);
      setError(null);
      setLoading(false);
    } catch (error) {
      setError('User not found. Please enter a valid GitHub username.');
      setUserData(null);
      setRepos([]);
      setLoading(false);
    }
  };

  const fetchUserRepos = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`https://api.github.com/users/${username}/repos`);
      setRepos(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching user repos:', error);
      setLoading(false);
    }
  };

  const handleGetUserInfo = () => {
    if (username.trim() !== '') {
      fetchUserData();
      fetchUserRepos();
    }
  };

  return (
    <div>
      <h1>GitHub User Information</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <button onClick={handleGetUserInfo} disabled={loading}>
        {loading ? 'Fetching...' : 'Get User Info'}
      </button>

      {error && <p className="error">{error}</p>}

      {userData && !error && <UserInfoDisplay userData={userData} />}
      
      {repos.length > 0 && !error && <RepositoriesList repos={repos} />}
    </div>
  );
}

export default UserInfo;