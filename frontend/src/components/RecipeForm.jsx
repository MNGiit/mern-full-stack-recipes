import React from "react";
import { useState } from "react";
// import { signUp } from "../utilities/users-service";
import * as recipesAPI from '../utilities/recipes-api';
// import Form from "react-bootstrap/Form";
// import Button from "react-bootstrap/Button";

function RecipeForm({ setRecipe }) {
    const [name, setName] = useState("");
    const [ingredents, setIngredients] = useState(["", "", "", "", ""])
    const [ingredientName, setIngredientName] = useState("");
    const [error, setError] = useState("");

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleIngredientNameChange = (e) => {
        setIngredientName(e.target.value);
    };

    const handleErrorChange = (e) => {
        setError(e.target.value);
    };

    const handleFormSubmission = async (e) => {
        // stop submit
        e.preventDefault();

        // retrieve collective recipe object state
        // const state = { name, email, password, confirm, error };
        // console.log('e', e);
        // console.log('e.target', e.target);
        // console.log('e.target.ingredientName', e.target.ingredientName);
        // // console.log('e.target.ingredientName.RadioNodeList', e.target.ingredientName.RadioNodeList) // undefined
        // console.log('e.target.ingredientName.length', e.target.ingredientName.length) // 5
        // console.log('e.target.ingredientName[1]', e.target.ingredientName[1]); //
        console.log('00 e.target.ingredientName[1].value', e.target.ingredientName[1].value); // works
        let ingredients = [];
        for(let i = 0; i < e.target.ingredientName.length; i++) {ingredients.push(e.target.ingredientName[i].value);}

        console.log('ingredients', ingredients);

        // console.log('e.target[2]', e.target[2]);
        // console.log('e.target[2].ingredientName', e.target[2].ingredientName);
        // console.log('e.target[2].value', e.target[2].ingredientName);
        
        // const state = { name, ingredientName, error };
        const state = {name, ingredients, error};
        console.log(state);
        try {
            // duplicate state to formdata
            const formData = { ...state };
            // purge unneeded properties
            delete formData["error"];

            // const recipe = await signUp(formData);
            // Test out if can call recipe api
            recipesAPI.createRecipe(formData);

            // console.log(recipe);
            // setUser(user.data);
        } catch (error) {
            setError("Something went wrong with this recipe - Try Again");
        }
    };

    return (
        <div>
            <div className="form-container">
                <form onSubmit={(e) => {return handleFormSubmission(e);}}>
                    <label>Name</label>
                    <input type="text" name="name" onChange={(e) => {return handleNameChange(e);}} value={name} required />
                    
                    <label>Ingredient</label>
                    {/* <input type="text" name="ingredientName" onChange={(e) => {return handleIngredientNameChange(e);}} value={ingredientName} required /> */}
                    <input type="text" name="ingredientName" onChange={(e) => {return handleIngredientNameChange(e);}} required />

                    <label>Ingredient</label>
                    {/* <input type="text" name="ingredientName" onChange={(e) => {return handleIngredientNameChange(e);}} value={ingredientName} required /> */}
                    <input type="text" name="ingredientName" onChange={(e) => {return handleIngredientNameChange(e);}} required />

                    <label>Ingredient</label>
                    {/* <input type="text" name="ingredientName" onChange={(e) => {return handleIngredientNameChange(e);}} value={ingredientName} /> */}
                    <input type="text" name="ingredientName" onChange={(e) => {return handleIngredientNameChange(e);}} />

                    <label>Ingredient</label>
                    {/* <input type="text" name="ingredientName" onChange={(e) => {return handleIngredientNameChange(e);}} value={ingredientName} /> */}
                    <input type="text" name="ingredientName" onChange={(e) => {return handleIngredientNameChange(e);}} />

                    <label>Ingredient</label>
                    {/* <input type="text" name="ingredientName" onChange={(e) => {return handleIngredientNameChange(e);}} value={ingredientName} /> */}
                    <input type="text" name="ingredientName" onChange={(e) => {return handleIngredientNameChange(e);}} />

                    <button type="submit">Submit Recipe</button>
                </form>
            </div>
            <p className="error-message">&nbsp;{error}</p>
        </div>
    );
}

export default RecipeForm;
