import '../App.css'; // ../css/App.css // ./App.css
import {Routes, Route} from 'react-router-dom';
import {useState, useEffect} from 'react';
import AuthPage from '../pages/AuthPage';
import NavBar from './NavBar';
import {getUser} from '../utilities/users-service';
import RecipeForm from './RecipeForm';
import * as recipesAPI from '../utilities/recipes-api';

function App() {

 

  const [user, setUser] = useState(getUser());
  // const [recipe, setRecipe] = useState({});
  const [recipes, setRecipes] = useState({});

  const [showRecipeForm, setShowRecipeForm] = useState(false);
  // const [show, setShow] = useState(false);

  const [showRecipes, setShowRecipes] = useState(false);

  const getRecipes = () => {
    // recipesAPI.getRecipes.then(function (response) {
    //   // console.log(response.data);
    //   const recipeList = response.data;
    //   setRecipes(recipeList);
    // }).catch(function (error) {
    //   console.log(error);
    // })

    // const recipesList =  recipesAPI.getRecipes();
    // console.log("app.js getRecipes", recipes);
    // setRecipes(recipes); // breaks server!!!!!!!!
    
    // recipesAPI.getRecipes.then(function (response) {
    //   const recipeList = response.data;
    //   setRecipes(recipeList);
    // }).catch(function (error) {
    //   console.log(error);
    // })

    // try {
      // const recipeList = recipesAPI.getRecipes();
      // recipesAPI.getRecipes.then(function (response) {
      //   console.log("response", response);
      //   const recipeList = response.data;
      //   setRecipes(recipeList);
      //   console.log("recipeList", recipeList)
      // })
      // const recipeList = recipesAPI.getRecipes();

    //   console.log("recipeList", recipeList);
    // }catch {
    //   console.log("Something went wrong in getting recipes");
    // }

    // recipesAPI.getRecipes().then(function (response) {
    //   const recipeList = response.data;
    //   console.log("recipeList", recipeList);
    // }).catch(function (error) {
    //   console.log(error);
    // })

    // const recipeList = recipesAPI.getRecipes();
    const recipeList = getRecipesDifferentWay();
    console.log("recipeList after recipesAPI.getRecipes()", recipeList);
    // console.log("recipes", recipes);    
    // setRecipes(recipeList);
    console.log("recipes after setRecipes", recipes);
    

    // console.log("recipes after setRecipes with .PromiseResult", recipes.PromiseResult)
  }

  const getRecipesDifferentWay = () => {
    fetch("/api/recipes/").then((res) => {
      console.log("fetched recipes res", res);
      // return res.data or res.data.data
    })
  }

  // Might move this to own Page
  useEffect(() =>{
    getRecipes();
  }, [])

  // const getMovies = () => {
  //   axios.request(options).then(function (response) {
  //     // console.log(response.data);
  //     const movieList = response.data
  //     setMovies(movieList)
  //   }).catch(function (error) {
  //     console.error(error);
  //   });
  // }

  return (
    <div className="App">
      <header className="App-header">
        <h1>MERNingful Recipes!</h1>
        {
          user ?
            <>
              <NavBar user={user} setUser={setUser} />
              <h3>Recipes Index</h3>
              <h4>Go to recipes index, then click a recipe to view it, and leave a comment!</h4>
              <h4>Leave a rating as well.</h4>
              <h3>Create a recipe</h3>
              <h3>Get random Recipe from RapidAPI</h3>
            </>
            :
            <>
              <AuthPage setUser={setUser} />
              <h2>Don't have user</h2>
            </>
        }
      </header>

      <h3 onClick={() => setShowRecipeForm(!showRecipeForm)}>
        {showRecipeForm ?
            'Close Recipe Form'
            :
            'Show Recipe Form'    
        }
      </h3>
      {
        showRecipeForm ?
          (<div>

          </div>)
        :
        null
      }
      {/* <RecipeForm /> */}

      <h3 onClick={() => setShowRecipes(!showRecipes)}>
        {showRecipes ?
            'Close Recipes'
            :
            'Show Recipes'    
        }
      </h3>
      {
        showRecipeForm ?
          <RecipeForm />
        :
        null
      }

      <h3>Show recipes</h3>
      {
        (recipes.length > 0) ? 
        `recipes ${recipes}`
        :
        `shouldn't show, recipes ${recipes}`
      }


      <h4>Recipes or</h4>
      <h4>Recipes by user or</h4>
      <h4>Recipe show page with edit or delete button if by same user</h4>
      <h4>Also shows comments and ratings, and ability to add or edit or delete/undo them</h4>
      <h5>or</h5>
      <h4>Create recipe form or</h4>
      <h4>Edit recipe form or</h4>

      <footer>Copyright | About | Link to LinkedIn | Link to Github</footer>
    </div>
  );
}

export default App;
