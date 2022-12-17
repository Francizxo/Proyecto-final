import React, { useState } from 'react';
import axios from 'axios';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchArticles = async (e) => {
    e.preventDefault();
    const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=popularity&apiKey=66cc2401f8b54cdb92e90030a001350e`);
    setResults(res.data.articles);
  }

  return (
    <div>
      <form onSubmit={searchArticles}>
        <input
          type="text"
          placeholder="Search for articles"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>
      {results.length > 0 && (
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>
            {results.map((article) => (
              <tr key={article.title}>
                <td>{article.title}</td>
                <td>{article.author}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default Search;


