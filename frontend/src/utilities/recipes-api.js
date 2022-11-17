const BASE_URL = "/api/recipes";

export async function getRecipes() {
    console.log("api recipes getRecipes")
    // const res = await fetch(BASE_URL, {
    //     method: "GET",
    //     headers: {"Content-Type" : "application/json"},
    // })

    // works but terminal has a lot of messages
    // const res = await fetch(BASE_URL, {method: "GET"});
    // console.log("recipes api getRecipes res", res);
    // if (res.ok) return res.json();
    // else throw new Error("Something went wrong getting recipes");

    //console.log("utilities recipes-api res", res);

    // works it seems but trying another way
    // const options = {method: "GET", 'Content-Type': 'application/json'};
    // // options.headers = {'Content-Type': 'application/json'};
    // // options.bo
    // const res = await fetch(BASE_URL, options);
    // if (res.ok) return res.json();
    // else throw new Error("Bad get recipes request");

    // const res = await fetch(BASE_URL);
    // console.log("recipes api res", res);
    
    // const options = {method: "GET"};
    // options.headers = {'Content-Type' : 'application/json'};

    // return fetch(BASE_URL) // , options
    // .then(resp => resp.json())
    // .then(data => data)
    // .catch(e => console.log(e))

    // Partially works
    // const options = {method: "GET"};
    // options.headers = {'Content-Type' : 'application/json'};

    // const res = await fetch(BASE_URL);
    // if(res.ok) {
    //     console.log("recipes api res", res);
    //     console.log("recipes api res", res)
    //     // DOESN'T WORK
    //     // res.then((response) => {
    //     //     console.log('response', response)
    //     // })
    //     // console.log("res.json()", res.json())
    //     return res;
    // }
    // throw new Error('Bad get recipes request');

    const res = await fetch(BASE_URL, {
        method: "GET",
        headers: {"Content-Type": "application/json"},
        // body: JSON.stringify()
    });

    if(res.ok) {
        console.log("utilities/recipes-api/ res", res);
        return res.json();
    } else {
        throw new Error("utilities/recipes-api/getRecipes went bad");
    }

}

export async function createRecipe(recipeData) {
  
    // console.log("recipesAPI createRecipe, recipeData:", recipeData);
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(recipeData),
    });

    if(res.ok) {
        console.log("utilities recipes-api res seems to be ok, res.ok:", res.ok);
    } else {
        throw new Error("Invalide New Recipe");
    }

    // const res = await fetch(BASE_URL, { // Fetch uses options object as 2nd arg to make requests other than basic GET requests,
    //     method: "POST",                 // include data, headers, etc
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(recipeData),
    // });
    // console.log('utilities recipes-api res', res);

    // if(res.ok) {
    //     console.log("utilities recipes-api res seems to be ok, res.ok:", res.ok);
    // } else {
    //     throw new Error("Invalid New Recipe");
    // }


}

export async function editRecipe(user, recipe_id) {
    const res = await fetch(`${BASE_URL}/${recipe_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
    }).then((res) => {
        return res.json();
    })

    if(res.status === "success") return res;
    else throw new Error("Something went wrong with edit recipe");
}

export async function deleteRecipe(id) {
    const res = await fetch(BASE_URL + `/${id}`, {
        method: "DELETE"
    });

    if(res.ok) {
        return res.json();
    } else {
        throw new Error("Something went wrong with deleting")
    }
}