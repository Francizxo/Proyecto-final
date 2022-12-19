import React from 'react';
import useSearch from '../Hooks/useSearch';
import {Button,Row,Col, Container,Card,Navbar,Nav,Carousel} from 'react-bootstrap';

function SearchResults() {
  const { query, setQuery, results } = useSearch();

  return (
    <div>
      <form>
        <input
          type="text"
          placeholder="Search for articles"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit" class="btn btn-dark">Search</button>
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

export default SearchResults;