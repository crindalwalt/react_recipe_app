// import React from "react";
import { useEffect, useState } from "react";
import SingleRecipeCard from "./SingleRecipeCard";

const AllRecipe = () => {
    // let arrayLength = 29;

    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchRecipes = async () => {
            const baseURL = "https:geekonweb.com";
            const endpoint = "/recipes";
            const url = `${baseURL}${endpoint}`;

            // const url = 'http://127.0.0.1:8000/recipes';


            try {
                const response = await fetch(url);
                const result = await response.text();
                const data = JSON.parse(result);
                console.log(data);
                setRecipes(data);
                setLoading(false)
            } catch (error) {
                setError(error)
                setLoading(false);
                console.error(error);
            }
        }
        fetchRecipes()
    }, [])
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading recipes: {error.message}</p>
    return (

        <div className="container margin-bottom-100px">
            <div className="row">

                {
                    recipes.map(recipe => (
                        <SingleRecipeCard key={recipe.id} recipe={recipe} />
                    ))
                }
            </div>
            
        </div>

    );
}

export default AllRecipe;