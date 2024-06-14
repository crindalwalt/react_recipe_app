import React from "react";
import Header from "./Header";


const ContactPage = () => {
    return <>
        <>
            <Header />
            {/* Map */}
            <div className="map-distributors-in">
                <div id="map-distributors"></div>
            </div>
            {/* //  Map */}
            {/* Page Output */}
            <section className="padding-tb-100px">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
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
                                    <label htmlFor="inputAddress">Address</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress"
                                        placeholder="1234 Main St"
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                                    <textarea
                                        className="form-control"
                                        id="exampleFormControlTextarea1"
                                        rows={3}
                                        defaultValue={""}
                                    />
                                </div>
                                <a
                                    href="#"
                                    className="btn-sm btn-lg btn-block background-main-color text-white text-center font-weight-bold text-uppercase rounded-0 padding-15px"
                                >
                                    Send
                                </a>
                            </form>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <p>
                                Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industrys standard dummy text
                                ever since the 1500s, when an unknown printer took a galley of type
                                and scrambled it to make a type specimen book.
                            </p>
                            <h6>Phone :</h6>
                            <span className="d-block">
                                <i
                                    className="fa fa-phone text-main-color margin-right-10px"
                                    aria-hidden="true"
                                />{" "}
                                +222 333 019
                            </span>
                            <span className="d-block">
                                <i
                                    className="fa fa-mobile text-main-color margin-right-10px"
                                    aria-hidden="true"
                                />{" "}
                                +222 333 019
                            </span>
                            <h6 className="margin-top-20px">Address :</h6>
                            <span className="d-block">
                                <i
                                    className="fa fa-map text-main-color margin-right-10px"
                                    aria-hidden="true"
                                />{" "}
                                NewYork 1234 Main St{" "}
                            </span>
                            <h6 className="margin-top-20px">Email :</h6>
                            <span className="d-block">
                                <i
                                    className="fa fa-envelope-open text-main-color margin-right-10px"
                                    aria-hidden="true"
                                />{" "}
                                info@yoursite.com{" "}
                            </span>
                        </div>
                    </div>
                </div>
            </section>
            {/* // Page Output */}
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

    </>
}


export default ContactPage;