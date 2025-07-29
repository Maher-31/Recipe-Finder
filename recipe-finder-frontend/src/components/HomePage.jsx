// HomePage.jsx
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import "./style.css";


function HomePage() {
  const [recipeName, setRecipeName] = useState('');
  const [components, setComponents] = useState('');
  const [procedure, setProcedure] = useState('');
  const [searchQuery, setSearchQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const history = useHistory();

  useEffect(() => {
    fetchRecipes();
  }, []);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get('http://localhost:5000/recipes');
      setRecipes(response.data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (!recipeName || !components || !procedure) {
        alert('Please fill in all fields');
        return;
      }
      await axios.post('http://localhost:5000/recipes', { name: recipeName, components: components.split(','), procedure });
      alert('Recipe created successfully');
      fetchRecipes();
      setRecipeName('');
      setComponents('');
      setProcedure('');
    } catch (error) {
      console.error('Error creating recipe:', error);
    }
  };
  
  const handleSearch = async () => {
    try {
      let response;
      if (searchQuery) {
        response = await axios.post('http://localhost:5000/search', { searchQuery });
      } else {
        response = await axios.get('http://localhost:5000/recipes');
      }
      setSearchResults(response.data);
    } catch (error) {
      console.error('Error searching recipes:', error.response.data.message);
    }
  };

  const handleLogout = () => {
    // Perform logout actions, e.g., clear local storage, redirect to default view
    history.push('/');
  };

  return (
    <div><nav>
      <button ><a href='#create'>Create Recipes</a></button>
      <button ><a href='#search'>Search Recipes</a></button>
        <button ><a href='#view'>View Recipes</a></button>
        <button onClick={handleLogout}>Logout</button>
      </nav>
      <div className='homevie'><h1>HOME</h1><b><h2>RECIPE FINDER</h2>
      <h2>All in one website.<br/> You will add/create your recipe view the recipe you want.<br/> if you have no idea what to cook you will search by the components your faveroute </h2></b></div>
<div className='creatmain' id="create">
      <h3 >Create Recipe</h3>
      <form onSubmit={handleSubmit} >
        <label htmlFor="recipeName">Recipe Name:</label>
        <input type="text" id="recipeName" name="recipeName" value={recipeName} onChange={(e) => setRecipeName(e.target.value)} required />

        <label htmlFor="components">Components:</label>
        <input type="text" id="components" name="components" value={components} onChange={(e) => setComponents(e.target.value)} required />

        <label htmlFor="procedure">Procedure:</label>
        <textarea id="procedure" name="procedure" value={procedure} onChange={(e) => setProcedure(e.target.value)} required></textarea>
      <div className='btn'>
        <br/><br/><button  type="submit">Submit</button></div>
      </form></div>
<div className='searchmain' id="search"><div className='sear'>
      <h3 >Search Recipes</h3>
      <input type="text" placeholder="Enter search query" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
      <button onClick={handleSearch}>Search</button></div>
      <div>
        <h4>Search Results</h4>
        <ul>
          {searchResults.map((recipe) => (<>
              <div className='card'>
                <h5>{recipe.name}</h5>
                <p>Components: {recipe.components.join(', ')}</p>
                <p>Procedure: {recipe.procedure}</p>
              </div>
              </>
          ))}
        </ul>
      </div></div>
<div className='viewmain' id="view">
      <h3 >View Recipes</h3>
      <ul>
        {recipes.map((recipe) => (
          <>
            <div className='card'>
              <h5>{recipe.name}</h5>
              <p>Components: {recipe.components.join(', ')}</p>
              <p>Procedure: {recipe.procedure}</p>
            </div>
            </>
        ))}
      </ul>
    </div>
    </div>
  );
}

export default HomePage;
