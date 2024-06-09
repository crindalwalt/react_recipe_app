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
            const url = 'https://recipe-by-api-ninjas.p.rapidapi.com/v1/recipe?query=italian%20wedding%20soup';
            const options = {
                method: 'GET',
                headers: {
                    'x-rapidapi-key': 'cb3431dac5msh9a3074c753c74a2p1b95bcjsnd2d73b4f0bd6',
                    'x-rapidapi-host': 'recipe-by-api-ninjas.p.rapidapi.com'
                }
            };

            try {
                const response = await fetch(url, options);
                const result = await response.text();
                const data = JSON.parse(result);
                // console.log(data);
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

        <section className="padding-tb-100px background-light-grey">
            <div className="container">
                <div className="title text-center">
                    <h2 className="font-weight-700 text-main-color">Latest Recipes</h2>
                    <div className="row justify-content-center margin-bottom-45px">
                        <div className="col-md-7">
                            <p className="text-grey-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
                        </div>
                    </div>
                </div>

                <div className="recipes-masonry d-flex flex-wrap">
                    {recipes.map(recipe => (
                        
                        <SingleRecipeCard key={recipe.id} recipe={recipe} />

                    ))}

                    {/* <SingleRecipeCard /> */}


                </div>
                <div className="text-center">
                    <a href="#" className="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-second-color text-white">Show All Recipes</a>
                </div>
            </div>
            {/* <!-- // container --> */}
        </section>

    );
}

export default AllRecipe;