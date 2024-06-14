import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SingleRecipeCard = ({ recipe }) => {
    // Debugging: Log the received recipe prop
    console.log('RecipeCard received recipe:', recipe);

    // Check if recipe is undefined and handle it
    if (!recipe) {
        return <p>No recipe data provided</p>;
    }
    return (


        <div className="col-lg-6 margin-bottom-30px">
            <div className="background-white thum-hover box-shadow hvr-float full-width">
                <div className="float-md-left margin-right-30px thum-xs">
                    <img
                        className="img-fluid"
                        src={recipe.image}
                        alt=""
                    />
                </div>
                <div className="padding-25px">
                    <div className="rating">
                        <ul>
                            <li className="active" />
                            <li className="active" />
                            <li className="active" />
                            <li className="active" />
                            <li />
                        </ul>
                    </div>
                    <h3>
                        <Link to={`/recipe/${recipe.id}`}
                            className="d-block text-dark text-capitalize text-medium margin-tb-15px"
                        >
                            {recipe.title}
                        </Link>
                    </h3>
                    <hr />
                    <div className="row no-gutters">
                        <div className="col-4 text-left">
                            <a href="#" className="text-red">
                                {recipe.cook_time}hr Cook Time
                            </a>
                        </div>
                        <div className="col-8 text-right">
                            <a href="#" className="text-grey-2">
                                <i className="fas fa-users" /> {recipe.servings} servings
                            </a>
                        </div>
                    </div>
                </div>
                <div className="clearfix" />
            </div>
        </div>
    );
}
SingleRecipeCard.propTypes = {
    recipe: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        servings: PropTypes.string.isRequired,
        ingredients: PropTypes.string.isRequired,
        instructions: PropTypes.string.isRequired,
        image: PropTypes.string.isRequired,
        cook_time: PropTypes.string.isRequired,
        // Add any other properties you expect in the recipe object
    }).isRequired,
};
export default SingleRecipeCard;