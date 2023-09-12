import React from 'react';

function RepositoriesList({ repos }) {
  return (
    <div>
      <h2>Repositories</h2>
      <ul>
        {repos.map((repo) => (
          <li key={repo.id}>
            <strong>{repo.name}</strong>: {repo.description || 'No description available'}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default RepositoriesList;
