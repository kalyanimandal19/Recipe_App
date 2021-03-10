import React, { useState, useEffect } from 'react';
import './App.css';
import Recipe from './Recipe';


function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('chicken');

  const APP_ID = process.env.REACT_APP_API_ID
  const APP_KEY = process.env.REACT_APP_API_KEY

  const exampleReq = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;
  // console.log(exampleReq);

  useEffect(() => {
    getRecipes()
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(exampleReq);
    const data = await response.json();
    // console.log(data.hits);
    setRecipes(data.hits);
  };
  const updateSearch = (e) => {
    // e.preventDefault;
    setSearch(e.target.value);
    // console.log(search);
  };
  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  };


  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch} />
        <button type="submit" className="search-button" >Search</button>
      </form>
      <div className="recipes">
        {
          recipes.map((recipe) => {
            return (
              <Recipe
                keys={recipe.recipe.label}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
                image={recipe.recipe.image}
                ingredients={recipe.recipe.ingredients}
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
