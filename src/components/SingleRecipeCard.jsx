import PropTypes from 'prop-types';

const SingleRecipeCard = ({ recipe }) => {
    // Debugging: Log the received recipe prop
    console.log('RecipeCard received recipe:', recipe);

    // Check if recipe is undefined and handle it
    if (!recipe) {
        return <p>No recipe data provided</p>;
    }
    return (

        <div className="col-xl-3 col-lg-4 col-md-6 recipe-item margin-bottom-40px">
            <div className="card border-0 box-shadow">
                <div className="card-img-top"><a href="#"><img src="https://plus.unsplash.com/premium_photo-1661265874417-f9a2f1981eda?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" /></a></div>
                <div className="padding-lr-30px padding-tb-20px">
                    <h5 className="margin-bottom-20px margin-top-10px">
                        <a className="text-dark" href="#">

                            {recipe.title}

                        </a>
                    </h5>
                    <div className="rating">
                        <ul>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li className="active"></li>
                            <li></li>
                        </ul>
                    </div>
                    <hr />
                    <div className="row no-gutters">
                        <div className="col-4 text-left"><a href="#" className="text-red"><i className="far fa-heart"></i> Save</a></div>
                        <div className="col-8 text-right"><a href="#" className="text-grey-2"><i className="fas fa-users"></i> 6-8 servings</a></div>
                    </div>
                </div>
                <div className="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                    <a href="#" className="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"><img src="http://placehold.it/50x50" className="height-30px border-radius-30 margin-right-15px" alt="" /> Salim Aldosery</a>
                </div>
            </div>
        </div>

    );
}
SingleRecipeCard.propTypes = {
    recipe: PropTypes.shape({
        title: PropTypes.string.isRequired,
        servings: PropTypes.string.isRequired,
        ingredients: PropTypes.string.isRequired,
        instructions: PropTypes.string.isRequired,
        // Add any other properties you expect in the recipe object
    }).isRequired,
};
export default SingleRecipeCard;