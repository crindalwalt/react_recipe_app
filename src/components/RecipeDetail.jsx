import  { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Header from './Header';

const RecipeDetail = () => {
    const { id } = useParams();
    const [recipe, setRecipe] = useState(null);

    useEffect(() => {
        const fetchRecipe = async () => {
            try {
                const baseURL = "http://geekonweb.com";
                // const endpoint = "/recipes";
                // const url = `${baseURL}${endpoint}`;
                const response = await fetch(`${baseURL}/recipe/${id}`);
                if (!response.ok) {
                    throw new Error('Failed to fetch recipe');
                }
                const data = await response.json();
                setRecipe(data);
            } catch (error) {
                console.error('Error fetching recipe:', error);
            }
        };

        fetchRecipe();
    }, [id]);

    if (!recipe) {
        return <p>Loading...</p>;
    }

    return (
        <>
        <Header />
        {/* // Header  */}
        <div id="page-title" className="padding-tb-30px gradient-white">
          <div className="container text-left">
            <ol className="breadcrumb opacity-5">
              <li>
                <a href="#">Home</a>
              </li>
              <li className="active">Recipe</li>
            </ol>
            <h1 className="font-weight-300">{recipe.title}</h1>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="margin-bottom-40px card border-0 box-shadow">
                <div className="card-img-top">
                  <a href="#">
                    <img src={recipe.image} alt="" />
                  </a>
                </div>
                <div className="padding-lr-30px padding-tb-20px">
                  <h5 className="margin-bottom-20px margin-top-10px">
                    <a className="text-dark" href="#">
                    {recipe.title}
                    </a>
                  </h5>
                  <p>
                    {recipe.description}
                  </p>
                  
                  <hr />
                  <h3>Ingredients</h3>
                  <ul>
                    {recipe.ingredients.map( item => (
                        <li key={item.id}>
                        <strong>{item.quantity}</strong>{item.name}
                      </li>
                    ))}
                    
                    {/* <li>
                      <strong>24 oz</strong> spaghetti sauce (prego traditional)
                    </li>
                    <li>
                      <strong>1/2 lb</strong> ground beef
                    </li>
                    <li>
                      <strong>15 oz</strong> ricotta cheese
                    </li>
                    <li>
                      <strong>14 oz</strong> mozzarella shredded
                    </li>
                    <li>
                      <strong>1 can</strong> sliced olives
                    </li>
                    <li>
                      <strong>1 packages</strong> pepperoni slices
                    </li> */}
                  </ul>
                  {/* <h3>Method</h3>
                  <ol>
                    <li>preheat oven to 350º</li>
                    <li>bring noodles to a boil then drain</li>
                    <li>
                      while noodles are cooking in a bowl mix ricotta cheese,
                      mozzarella cheese and olives together. it will be thick
                    </li>
                    <li>cook ground beef then drain</li>
                    <li>add spaghetti sauce to ground beef</li>
                    <li>
                      add pasta to beef and sauce mix, stir until well blended then
                      move to 16x9 casserole dish
                    </li>
                    <li>spread cheese mixture all over evenly</li>
                    <li>
                      place pepperonis on top snd remember to partially overlap
                      pepperonis since they shrink
                    </li>
                    <li>back in 350º oven for 20 minutes</li>
                  </ol> */}
                  <hr />
                  <div className="row no-gutters">
                    <div className="col-4 text-left">
                      <a href="#" className="text-red">
                        <i className="far fa-heart" /> Save
                      </a>
                    </div>
                    <div className="col-8 text-right">
                      <a href="#" className="text-grey-2">
                        <i className="fas fa-users" /> {recipe.servings} servings
                      </a>
                    </div>
                  </div>
                </div>
                <div className="background-light-grey border-top-1 border-grey padding-lr-30px padding-tb-20px">
                  <a
                    href="#"
                    className="d-inline-block text-grey-3 h6 margin-bottom-0px margin-right-15px"
                  >
                    <img
                      src="http://placehold.it/50x50"
                      className="height-30px border-radius-30 margin-right-15px"
                      alt=""
                    />{" "}
                    {recipe.author}
                  </a>
                </div>
              </div>
              {/* <div className="margin-bottom-40px box-shadow">
                <div className="padding-30px background-white">
                  <h3>
                    <i className="far fa-star margin-right-10px text-main-color" />{" "}
                    Review &amp; Rating
                  </h3>
                  <hr />
                  <ul className="commentlist padding-0px margin-0px list-unstyled text-grey-3">
                    <li className="border-bottom-1 border-grey-1 margin-bottom-20px">
                      <img
                        src="http://placehold.it/60x60"
                        className="float-left margin-right-20px border-radius-60 margin-bottom-20px"
                        alt=""
                      />
                      <div className="margin-left-85px">
                        <a
                          className="d-inline-block text-dark text-medium margin-right-20px"
                          href="#"
                        >
                          Bakhita alrawi{" "}
                        </a>
                        <span className="text-extra-small">
                          Date :{" "}
                          <a href="#" className="text-main-color">
                            July 15, 2016
                          </a>
                        </span>
                        <div className="rating">
                          <ul>
                            <li className="active" />
                            <li className="active" />
                            <li className="active" />
                            <li className="active" />
                            <li />
                          </ul>
                        </div>
                        <p className="margin-top-15px text-grey-2">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when looking at
                          its layout.{" "}
                        </p>
                      </div>
                    </li>
                    <li className="border-bottom-1 border-grey-1 margin-bottom-20px">
                      <img
                        src="http://placehold.it/60x60"
                        className="float-left margin-right-20px border-radius-60 margin-bottom-20px"
                        alt=""
                      />
                      <div className="margin-left-85px">
                        <a
                          className="d-inline-block text-dark text-medium margin-right-20px"
                          href="#"
                        >
                          Rabie Elkheir{" "}
                        </a>
                        <span className="text-extra-small">
                          Date :{" "}
                          <a href="#" className="text-main-color">
                            July 15, 2016
                          </a>
                        </span>
                        <div className="rating">
                          <ul>
                            <li className="active" />
                            <li className="active" />
                            <li />
                            <li />
                            <li />
                          </ul>
                        </div>
                        <p className="margin-top-15px text-grey-2">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when looking at
                          its layout.{" "}
                        </p>
                      </div>
                    </li>
                    <li className="border-bottom-1 border-grey-1 margin-bottom-20px">
                      <img
                        src="http://placehold.it/60x60"
                        className="float-left margin-right-20px border-radius-60 margin-bottom-20px"
                        alt=""
                      />
                      <div className="margin-left-85px">
                        <a
                          className="d-inline-block text-dark text-medium margin-right-20px"
                          href="#"
                        >
                          Adel Alsaeed{" "}
                        </a>
                        <span className="text-extra-small">
                          Date :{" "}
                          <a href="#" className="text-main-color">
                            July 15, 2016
                          </a>
                        </span>
                        <div className="rating">
                          <ul>
                            <li className="active" />
                            <li className="active" />
                            <li className="active" />
                            <li className="active" />
                            <li className="active" />
                          </ul>
                        </div>
                        <p className="margin-top-15px text-grey-2">
                          It is a long established fact that a reader will be
                          distracted by the readable content of a page when looking at
                          its layout.{" "}
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="margin-bottom-80px box-shadow">
                <div className="padding-30px background-white">
                  <h3>
                    <i className="far fa-star margin-right-10px text-main-color" />{" "}
                    Add Review{" "}
                  </h3>
                  <hr />
                  <form>
                    <div className="form-row">
                      <div className="form-group col-md-6">
                        <label htmlFor="inputName">Full Name</label>
                        <input
                          type="text"
                          className="form-control"
                          id="inputName"
                          placeholder="Name"
                        />
                      </div>
                      <div className="form-group col-md-6">
                        <label htmlFor="inputEmail4">Email</label>
                        <input
                          type="email"
                          className="form-control"
                          id="inputEmail4"
                          placeholder="Email"
                        />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="exampleFormControlTextarea1">Comment :</label>
                      <textarea
                        className="form-control"
                        id="exampleFormControlTextarea1"
                        rows={3}
                        placeholder="Comment"
                        defaultValue={""}
                      />
                    </div>
                    <a
                      href="#"
                      className="btn-sm btn-lg btn-block background-main-color text-white text-center font-weight-bold text-uppercase border-radius-10 padding-10px"
                    >
                      Add Now !
                    </a>
                  </form>
                </div>
              </div> */}
            </div>
            {/* <div className="col-lg-4">
              <div className="listing-search box-shadow background-main-color padding-30px margin-bottom-30px">
                <form className="row no-gutters">
                  <div className="col-md-12">
                    <div className="keywords">
                      <input
                        className="listing-form first border-radius-10 margin-bottom-10px"
                        type="text"
                        placeholder="Keywords..."
                        defaultValue=""
                      />
                    </div>
                  </div>
                  <div className="col-md-12">
                    <div className="categories dropdown">
                      <a
                        className="listing-form d-block text-nowrap border-radius-10 margin-bottom-10px"
                        id="dropdownMenu2"
                        data-toggle="dropdown"
                        aria-haspopup="true"
                        aria-expanded="false"
                      >
                        All Categories
                      </a>
                      <div className="dropdown-menu" aria-labelledby="dropdownMenu2">
                        <button className="dropdown-item text-up-small" type="button">
                          Fish
                        </button>
                        <button className="dropdown-item text-up-small" type="button">
                          Cocktails
                        </button>
                        <button className="dropdown-item text-up-small" type="button">
                          Salads
                        </button>
                        <button className="dropdown-item text-up-small" type="button">
                          Asian
                        </button>
                        <button className="dropdown-item text-up-small" type="button">
                          Fish
                        </button>
                        <button className="dropdown-item text-up-small" type="button">
                          Cocktails
                        </button>
                        <button className="dropdown-item text-up-small" type="button">
                          Salads
                        </button>
                        <button className="dropdown-item text-up-small" type="button">
                          Asian
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-12">
                    <a
                      className="listing-bottom border-radius-10 background-second-color box-shadow"
                      href="#"
                    >
                      Search Now
                    </a>
                  </div>
                </form>
              </div>
              <div className="row margin-tb-45px">
                <div className="col-6 margin-bottom-25px">
                  <a
                    href="#"
                    className="d-block box-shadow background-main-color text-white hvr-float"
                  >
                    <div className="thum">
                      <img src="http://placehold.it/450x250" alt="" />
                    </div>
                    <h4 className="text-center padding-15px">Fish</h4>
                  </a>
                </div>
                <div className="col-6 margin-bottom-25px">
                  <a
                    href="#"
                    className="d-block box-shadow background-main-color text-white hvr-float"
                  >
                    <div className="thum">
                      <img src="http://placehold.it/450x250" alt="" />
                    </div>
                    <h4 className="text-center padding-15px">Cocktails</h4>
                  </a>
                </div>
                <div className="col-6 margin-bottom-25px">
                  <a
                    href="#"
                    className="d-block box-shadow background-main-color text-white hvr-float"
                  >
                    <div className="thum">
                      <img src="http://placehold.it/450x250" alt="" />
                    </div>
                    <h4 className="text-center padding-15px">Eggs</h4>
                  </a>
                </div>
                <div className="col-6 margin-bottom-25px">
                  <a
                    href="#"
                    className="d-block box-shadow background-main-color text-white hvr-float"
                  >
                    <div className="thum">
                      <img src="http://placehold.it/450x250" alt="" />
                    </div>
                    <h4 className="text-center padding-15px">Salads</h4>
                  </a>
                </div>
              </div>
              <div className="widget widget_categories">
                <div className="margin-bottom-30px">
                  <div className="padding-30px background-white border-radius-10">
                    <h4>
                      <i className="fab fa-instagram margin-right-10px text-main-color" />{" "}
                      Instagram
                    </h4>
                    <hr />
                    <div className="row">
                      <div className="col-6 margin-bottom-20px">
                        <a href="#">
                          <img
                            className="border-radius-10"
                            src="http://placehold.it/600x600"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="col-6 margin-bottom-20px">
                        <a href="#">
                          <img
                            className="border-radius-10"
                            src="http://placehold.it/600x600"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="col-6 margin-bottom-20px">
                        <a href="#">
                          <img
                            className="border-radius-10"
                            src="http://placehold.it/600x600"
                            alt=""
                          />
                        </a>
                      </div>
                      <div className="col-6 margin-bottom-20px">
                        <a href="#">
                          <img
                            className="border-radius-10"
                            src="http://placehold.it/600x600"
                            alt=""
                          />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
          </div>
        </div>
        <footer className="padding-top-100px padding-bottom-70px background-dark">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-4 sm-mb-30px">
                <div className="logo margin-bottom-10px">
                  <img src="assets/img/logo-1.png" alt="" />
                </div>
                <div className="text-grey-2  font-weight-300">
                  Lorem Ipsum is simply dummy text of the printing and typesetting
                  industry. Lorem Ipsum has been the industrys standard dummy .
                </div>
                <ul className="list-inline text-left margin-tb-20px margin-lr-0px text-white">
                  <li className="list-inline-item">
                    <a className="facebook" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="youtube" href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="linkedin" href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="google" href="#">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="twitter" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a className="rss" href="#">
                      <i className="fa fa-rss" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
                {/* // Social */}
              </div>
              <div className="col-lg-4  col-md-4 sm-mb-30px">
                <ul className="footer-menu-2 row margin-0px padding-0px list-unstyled">
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Home
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Featured
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Feedback
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Ask a Question
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Team
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Maintenance
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Get a Quote
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
              <div className="col-lg-4  col-md-4 sm-mb-30px">
                <ul className="footer-menu-2 row margin-0px padding-0px list-unstyled">
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Home
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Featured
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Feedback
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Ask a Question
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Team
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Maintenance
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Get a Quote
                    </a>
                  </li>
                  <li className="col-6  padding-tb-5px">
                    <a href="#" className="text-grey-2">
                      Contact Us
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="padding-tb-10px background-main-color">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="text-white margin-tb-15px text-center text-lg-left">
                  Cook Note | @2017 All copy rights reserved
                </div>
              </div>
              <div className="col-md-6">
                <ul className="list-inline text-lg-right text-center margin-lr-0px margin-tb-15px text-white">
                  <li className="list-inline-item margin-lr-8px">
                    <a className="facebook" href="#">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item margin-lr-8px">
                    <a className="facebook" href="#">
                      <i className="fab fa-youtube" />
                    </a>
                  </li>
                  <li className="list-inline-item margin-lr-8px">
                    <a className="facebook" href="#">
                      <i className="fab fa-linkedin" />
                    </a>
                  </li>
                  <li className="list-inline-item margin-lr-8px">
                    <a className="facebook" href="#">
                      <i className="fab fa-google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item margin-lr-8px">
                    <a className="facebook" href="#">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item margin-lr-8px">
                    <a className="rss" href="#">
                      <i className="fa fa-rss" aria-hidden="true" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </>
      
    );
};

export default RecipeDetail;
