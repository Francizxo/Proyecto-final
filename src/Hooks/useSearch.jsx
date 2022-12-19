import { useState, useEffect } from 'react';
import axios from 'axios';

const useSearch = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const searchArticles = async () => {
    const res = await axios.get(`https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=08aa99e674574c1badc83e209d9eb4ea`);
    setResults(res.data.articles);
  };

  useEffect(() => {
    if (query) {
      searchArticles();
    }
  }, [query]);

  return { 
    query, 
    setQuery, 
    results };
};

export default useSearch;