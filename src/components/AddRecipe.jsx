import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';

const AddRecipe = () => {
    const [title, setTitle] = useState('');
    const [prepTime, setPrepTime] = useState('');
    const [cookTime, setCookTime] = useState('');
    const [servings, setServings] = useState('');
    const [chef, setChef] = useState('');
    const [description, setDescription] = useState('');
    const [instructions, setInstructions] = useState('');
    const [imageUrl, setImageUrl] = useState('');
    const [errorMessage, setErrorMessage] = useState('');


    const fetchCsrfToken = async () => {
        try {
            const response = await axios.get('https://geekonweb.com/csrf');
            const csrfToken = response.data.csrf_token;
            return csrfToken;
        } catch (error) {
            console.error('Failed to fetch CSRF token:', error);
            throw error; // Handle error appropriately in your application
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("im in the handle submit function")
        let csrf_token = await fetchCsrfToken();
        let prod_url = "https://geekonweb.com/recipes";
        let local_url = "http://127.0.0.1:8001/recipes";

        try {
            const response = await axios.post(local_url, {
                title: title,
                description: description,
                prepTime: prepTime,
                cookTime: cookTime,
                servings: servings,
                chef: chef,
                instructions: instructions,
                image_url: imageUrl // Assuming this matches your Laravel API field name

            }, {
                headers: {
                    'X-CSRF-TOKEN': csrf_token,
                    'Content-Type': 'application/json',
                },
            });

            console.log('Recipe added:', response.data.recipe);
            // Optionally, redirect to a different page or show a success message
        } catch (error) {
            if (error.response) {
                setErrorMessage(error.response.data.message); // Display server validation errors
            } else {
                setErrorMessage('Failed to add recipe'); // Handle other errors
            }
        }
    };
    return (


        <>
            <Header />
            {/* // Header  */}
            <div id="page-title" className="padding-tb-30px gradient-white">
                <div className="container">
                    <ol className="breadcrumb opacity-5">
                        <li>
                            <a href="#">Home</a>
                        </li>
                        <li>
                            <a href="#">Add Recipe</a>
                        </li>
                    </ol>
                    <h1 className="font-weight-300">Add Recipe</h1>
                </div>
            </div>
            <form onSubmit={handleSubmit}>
                <div className="container">
                    <div className="margin-tb-45px full-width">
                        <h4 className="padding-lr-30px padding-tb-20px background-white box-shadow border-radius-10">
                            <i className="far fa-list-alt margin-right-10px text-main-color" />
                            Basic Informations
                        </h4>
                        <p className="" >
                            {errorMessage && <p>{errorMessage}</p>}
                        </p>
                        <div className="padding-30px padding-bottom-30px background-white border-radius-10">

                            <div className="form-group margin-bottom-20px">
                                <label>
                                    <i className="far fa-list-alt margin-right-10px" /> Recipe Title
                                </label>
                                <input
                                    type="text"
                                    className="form-control form-control-sm"
                                    id="ListingTitle"
                                    placeholder="Listing Title"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                            </div>
                            {/* The 4 inputs for cook time prep time chef and servings size */}
                            <div className="form-group margin-bottom-20px">
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>
                                            <i className="far fa-list-alt margin-right-10px" /> Preperation Time
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="prepTime"
                                            placeholder="Preperation Time"
                                            value={prepTime}
                                            onChange={(e) => setPrepTime(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group margin-bottom-20px">
                                            <label>
                                                <i className="far fa-flag margin-right-10px" /> Cook Time
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="cookTIme"
                                                placeholder="Cooking Time"
                                                value={cookTime}
                                                onChange={(e) => setCookTime(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <label>
                                            <i className="far fa-list-alt margin-right-10px" /> Chef Name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control form-control-sm"
                                            id="prepTime"
                                            placeholder="Chef Name"
                                            value={chef}
                                            onChange={(e) => setChef(e.target.value)}
                                        />
                                    </div>
                                    <div className="col-md-6">
                                        <div className="form-group margin-bottom-20px">
                                            <label>
                                                <i className="far fa-flag margin-right-10px" /> Servings Size
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control form-control-sm"
                                                id="cookTIme"
                                                placeholder="Servings"
                                                value={servings}
                                                onChange={(e) => setServings(e.target.value)}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className="margin-bottom-45px full-width">
                        <h4 className="padding-lr-30px padding-tb-20px background-white box-shadow border-radius-10">
                            <i className="far fa-list-alt margin-right-10px text-main-color" />
                            Description
                        </h4>
                        <div className="padding-30px padding-bottom-30px background-white border-radius-10">
                            <div className="margin-bottom-20px">
                                <textarea
                                    className="form-control"
                                    placeholder="Html Tag Enabled"
                                    id="exampleTextarea"
                                    rows={8}
                                    defaultValue={""}
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                />
                            </div>

                        </div>
                    </div>
                    <div className="margin-bottom-45px full-width">
                        <h4 className="padding-lr-30px padding-tb-20px background-white box-shadow border-radius-10">
                            <i className="far fa-list-alt margin-right-10px text-main-color" />
                            Instructions
                        </h4>
                        <div className="padding-30px padding-bottom-30px background-white border-radius-10">
                            <div className="margin-bottom-20px">
                                <textarea
                                    className="form-control"
                                    placeholder="Html Tag Enabled"
                                    id="exampleTextarea"
                                    rows={8}
                                    defaultValue={""}
                                    value={instructions}
                                    onChange={(e) => setInstructions(e.target.value)}
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-12 margin-bottom-20px">
                                    <label>
                                        <i className="fas fa-video margin-right-10px" /> Image URL
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control form-control-sm"
                                        placeholder="http://www."
                                        value={imageUrl}
                                        onChange={(e) => setImageUrl(e.target.value)}
                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                    <button
                        type='submit'
                        className="btn btn-lg border-2  ba-1 text-white margin-bottom-80px btn-block border-radius-15 padding-15px box-shadow"
                    >
                        Add Recipe
                    </button>
                </div>
            </form>
            <footer className="padding-top-100px padding-bottom-70px background-dark">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-md-4 sm-mb-30px">
                            <div className="logo margin-bottom-10px">
                                <img src="assets/img/logo-1.png" alt="" />
                            </div>
                            <div className="text-grey-2  font-weight-300">
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industrs standard dummy .
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


    )
}

export default AddRecipe;