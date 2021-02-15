import React, {useState, useEffect} from 'react';
import Recipe from './Recipe';
import './App.css';

const App = () => {
  const APP_ID='634b4ad3';
  const APP_KEY='8bd303c0cfd8a418b20c0b945f681dcb';

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('mushroom');

  const getRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`);
    const data = await response.json();
    setRecipes(data.hits);
  }

  useEffect(()=>{
    getRecipes();
  }, [query]);
  
  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }

  return (
    <div className="App">
      <form className="search-form" onSubmit={getSearch}>
        <input type="text" className="search-bar" value={search} onChange={updateSearch}/>
        <button type="submit" className="search-button">search</button>
      </form>
      <div className="recipes">
        {recipes.map((recipe,index)=>(
          <Recipe
            key = {index}
            title = {recipe.recipe.label}
            calories={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients = {recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
}

export default App;
