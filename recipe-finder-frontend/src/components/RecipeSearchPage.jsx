// RecipeSearchPage.jsx

import  { useState } from 'react';
import axios from 'axios';

function RecipeSearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      const response = await axios.post('https://recipe-finder-5-gzng.onrender.com/search', { searchQuery });
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching recipes:', error.response.data.message);
      alert('Error searching recipes');
    }
  };

  return (
    <div>
      <h2>Search Recipes</h2>
      <input type="text" placeholder="Enter search query" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button>
      <div>
        <h3>Search Results</h3>
        <ul>
          {searchResults.map((recipe, index) => (
            <li key={index}>{recipe.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default RecipeSearchPage;
