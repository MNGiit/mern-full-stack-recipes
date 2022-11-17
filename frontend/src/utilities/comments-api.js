const BASE_URL = "/api/comments";

// might make that recipes has comments array which has comments_id and it just gets them all for that particular recipe
export async function getComments() {
    console.log("api comments getComments")

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

export async function createComment(commentData) {
  
    // console.log("recipesAPI createRecipe, recipeData:", recipeData);
    const res = await fetch(BASE_URL, {
        method: "POST",
        headers: {"Content-Type" : "application/json"},
        body: JSON.stringify(recipeData),
    });

    if(res.ok) {
        console.log("utilities comments-api res seems to be ok, res.ok:", res.ok);
    } else {
        throw new Error("Invalid New Comment");
    }
}

export async function editComment(user, comment_id) {
    const res = await fetch(`${BASE_URL}/${comment_id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(user),
    }).then((res) => {
        return res.json();
    })

    if(res.status === "success") return res;
    else throw new Error("Something went wrong with edit comment");
}

export async function deleteComment(id) {
    const res = await fetch(BASE_URL + `/${id}`, {
        method: "DELETE"
    });

    if(res.ok) {
        return res.json();
    } else {
        throw new Error("Something went wrong with deleting")
    }
}