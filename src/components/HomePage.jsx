import AllRecipe from "./AllRecipe";

const HomePage = () => {
	return (
		<>


			<header className="background-main-color">
				<div className="container">
					<div className="header-output">
						<div className="header-in">

							<div className="row">
								<div className="col-lg-2 col-md-12">
									<a id="logo" href="index.html" className="d-inline-block margin-tb-5px"><img src="assets/img/logo-small.png" alt="" /> </a>
									<a className="mobile-toggle padding-13px background-main-color" href="#"><i className="fas fa-bars"></i></a>
								</div>
								<div className="col-lg-8 col-md-12 position-inherit">
									<ul id="menu-main" className="white-link dropdown-dark text-lg-center nav-menu link-padding-tb-17px">
										<li className="has-dropdown"><a href="#">Home</a>
											<ul className="class  sub-menu text-left" >
												<li><a href="index.html">Home 1</a></li>
												<li><a href="index-2.html">Home 2</a></li>
												<li><a href="index-3.html">Home 3</a></li>
											</ul>
										</li>
										<li className="has-dropdown"><a href="#">Recipes</a>
											<ul className="sub-menu text-left">
												<li><a href="recipes-grid-layout.html">Recipes - Grid Layout </a></li>
												<li><a href="recipes-list-layout.html">Recipes - List Layout</a></li>
												<li><a href="authors-layout-1.html">Authors - Layout (1)</a></li>
												<li><a href="authors-layout-2.html">Authors - Layout (2)</a></li>
												<li><a href="single-recipe.html">Single Recipe</a></li>
											</ul>
										</li>
										<li className="has-dropdown"><a href="#">Blog</a>
											<ul className="sub-menu text-left">
												<li><a href="blog-grid.html">Blog Grid </a></li>
												<li><a href="blog-list.html">Blog List</a></li>
												<li><a href="blog-classic.html">Blog Classic</a></li>
												<li><a href="blog-single.html">Blog Single</a></li>
											</ul>
										</li>
										<li className="has-dropdown"><a href="#">Pages</a>
											<ul className="sub-menu text-left">
												<li><a href="page-about.html">About Us </a></li>
												<li><a href="add-recipe.html">Add Recipe</a></li>
												<li><a href="page-login.html">Login Page</a></li>
												<li><a href="page-sign-up.html">Sign up</a></li>
												<li><a href="search-page.html">Search  Page</a></li>
												<li><a href="page-contact-us.html">Contact Us</a></li>
												<li><a href="page-404.html">Pages 404</a></li>
											</ul>
										</li>
										<li><a href="page-contact-us.html">Conact Us</a></li>
									</ul>
								</div>
								<div className="col-lg-2 col-md-12 d-none d-lg-block">
									<hr className="margin-bottom-0px d-block d-sm-none" />
									<a href="add-recipe.html" className="text-white ba-2 box-shadow float-right padding-lr-23px padding-tb-15px text-extra-large"><i className="fas fa-plus"></i></a>
									<a href="page-login.html" className="text-white ba-1 box-shadow float-right padding-lr-23px padding-tb-15px text-extra-large"><i className="far fa-user"></i></a>
								</div>
							</div>

						</div>
					</div>
				</div >
			</header >




			<div className="banner padding-tb-20px">
				<div className="container">

					<div className="padding-tb-120px z-index-2 position-relative">
						<div className="text-center">
							<h1 className="text-white pull-l icon-large font-weight-500 margin-bottom-40px">+20,000</h1>
							<h3 className="text-white icon-large font-weight-100">Cooking Recipes</h3>
						</div>
						<div className="margin-top-45px">
							<div className="row justify-content-center margin-tb-60px">
								<div className="col-lg-8">
									<div className="listing-search">
										<form className="row no-gutters">
											<div className="col-md-4">
												<div className="keywords">
													<input className="listing-form first" type="text" placeholder="Keywords..." value="" />
												</div>
											</div>
											<div className="col-md-4">
												<div className="categories dropdown">
													<a className="listing-form d-block text-nowrap" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">All Categories</a>
													<div className="dropdown-menu" aria-labelledby="dropdownMenu2">
														<button className="dropdown-item text-up-small" type="button">Fish</button>
														<button className="dropdown-item text-up-small" type="button">Cocktails</button>
														<button className="dropdown-item text-up-small" type="button">Salads</button>
														<button className="dropdown-item text-up-small" type="button">Asian</button>
														<button className="dropdown-item text-up-small" type="button">Fish</button>
														<button className="dropdown-item text-up-small" type="button">Cocktails</button>
														<button className="dropdown-item text-up-small" type="button">Salads</button>
														<button className="dropdown-item text-up-small" type="button">Asian</button>
													</div>
												</div>
											</div>
											<div className="col-md-4">
												<a className="listing-bottom background-second-color box-shadow" href="#">Search Now</a>
											</div>
										</form>
									</div>
								</div>
							</div>
						</div>
					</div>u
				</div>
				{/* Container */}
				{/* <video className="background-grey-3" autoplay loop id="video-background" muted plays-inline><source src="#video-url" type="video/mp4" /></video> */}
				{/* <img className="background-grey-3" id="video-background" src="http://source.unsplash.com/random/400/200" /> */}

			</div>


			<div className="background-light-grey">
				<div className="container padding-top-100px">
					<div className="row">
						<div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
							<a href="#" className="d-block box-shadow background-main-color text-white hvr-float">
								<div className="thum"><img src="http://placehold.it/450x250" alt="" /></div>
								<h4 className="text-center padding-15px">Fish</h4>
							</a>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
							<a href="#" className="d-block box-shadow background-main-color text-white hvr-float">
								<div className="thum"><img src="http://placehold.it/450x250" alt="" /></div>
								<h4 className="text-center padding-15px">Cocktails</h4>
							</a>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
							<a href="#" className="d-block box-shadow background-main-color text-white hvr-float">
								<div className="thum"><img src="http://placehold.it/450x250" alt="" /></div>
								<h4 className="text-center padding-15px">Eggs</h4>
							</a>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
							<a href="#" className="d-block box-shadow background-main-color text-white hvr-float">
								<div className="thum"><img src="http://placehold.it/450x250" alt="" /></div>
								<h4 className="text-center padding-15px">Salads</h4>
							</a>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
							<a href="#" className="d-block box-shadow background-main-color text-white hvr-float">
								<div className="thum"><img src="http://placehold.it/450x250" alt="" /></div>
								<h4 className="text-center padding-15px">Asian</h4>
							</a>
						</div>
						<div className="col-xl-2 col-lg-3 col-md-4 col-6 sm-mb-25px">
							<a href="#" className="d-block box-shadow background-main-color text-white hvr-float">
								<div className="thum"><img src="http://placehold.it/450x250" alt="" /></div>
								<h4 className="text-center padding-15px">Pizza</h4>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* place for all recipe component */}
			<AllRecipe />

			<section className="padding-tb-100px background-white">
				<div className="container">

					<div className="title text-center">
						<h2 className="font-weight-700 text-main-color"> Top Authors</h2>
						<div className="row justify-content-center margin-bottom-45px">
							<div className="col-md-7">
								<p className="text-grey-2">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s</p>
							</div>
						</div>
					</div>

					<div className="row">

						<div className="col-lg-2 col-md-3 text-center">
							<div className="hvr-float">
								<div className="thum"><a href="#"><img className="border-radius-8 box-shadow" src="http://placehold.it/270x270" alt="" /></a></div>
								<a className="h4 d-block margin-top-20px" href="#">Ali haleem</a>
								<small className="text-grey-2">(145 Recipes)</small>
							</div>
						</div>


						<div className="col-lg-2 col-md-3 text-center">
							<div className="hvr-float">
								<div className="thum"><a href="#"><img className="border-radius-8 box-shadow" src="http://placehold.it/270x270" alt="" /></a></div>
								<a className="h4 d-block margin-top-20px" href="#">Salim Aldosery</a>
								<small className="text-grey-2">(145 Recipes)</small>
							</div>
						</div>


						<div className="col-lg-2 col-md-3 text-center">
							<div className="hvr-float">
								<div className="thum"><a href="#"><img className="border-radius-8 box-shadow" src="http://placehold.it/270x270" alt="" /></a></div>
								<a className="h4 d-block margin-top-20px" href="#">Rabie Khair</a>
								<small className="text-grey-2">(145 Recipes)</small>
							</div>
						</div>


						<div className="col-lg-2 col-md-3 text-center">
							<div className="hvr-float">
								<div className="thum"><a href="#"><img className="border-radius-8 box-shadow" src="http://placehold.it/270x270" alt="" /></a></div>
								<a className="h4 d-block margin-top-20px" href="#">Momen Alsho</a>
								<small className="text-grey-2">(145 Recipes)</small>
							</div>
						</div>


						<div className="col-lg-2 col-md-3 text-center">
							<div className="hvr-float">
								<div className="thum"><a href="#"><img className="border-radius-8 box-shadow" src="http://placehold.it/270x270" alt="" /></a></div>
								<a className="h4 d-block margin-top-20px" href="#">M.Salman ali</a>
								<small className="text-grey-2">(145 Recipes)</small>
							</div>
						</div>


						<div className="col-lg-2 col-md-3 text-center">
							<div className="hvr-float">
								<div className="thum"><a href="#"><img className="border-radius-8 box-shadow" src="http://placehold.it/270x270" alt="" /></a></div>
								<a className="h4 d-block margin-top-20px" href="#">Khalid Ziaad</a>
								<small className="text-grey-2">(145 Recipes)</small>
							</div>
						</div>

					</div>

					<div className="text-center">
						<a href="#" className="btn box-shadow margin-top-50px padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block width-210px background-dark text-white">Show All Authors</a>
					</div>

				</div>
			</section>


			<section className="padding-tb-100px background-light-grey">
				<div className="container">
					<div className="row">
						<div className="col-md-8">
							<h1 className="text-grey-2 margin-bottom-12px margin-top-20px font-weight-300"><span className="text-dark">Download</span> Cook Note App</h1>
						</div>
						<div className="col-md-4 text-lg-right">

							<a href="#" className="btn box-shadow padding-lr-30px  padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block background-main-color text-white margin-right-20px margin-tb-12px"><i className="fab fa-google-play"></i> Google Play</a>

							<a href="#" className="btn box-shadow padding-lr-30px  padding-tb-10px btn-sm border-2 border-radius-30 btn-inline-block background-dark text-white margin-tb-12px"><i className="fab fa-apple"></i>  App Store</a>

						</div>
					</div>
				</div>
			</section>

			<div className="instgram-feed">
				<div className="row no-gutters">
					<div className="col-md-2 col-6">
						<a href="#"><img src="http://placehold.it/600x600" alt="" /></a>
					</div>
					<div className="col-md-2 col-6">
						<a href="#"><img src="http://placehold.it/600x600" alt="" /></a>
					</div>
					<div className="col-md-2 col-6">
						<a href="#"><img src="http://placehold.it/600x600" alt="" /></a>
					</div>
					<div className="col-md-2 col-6">
						<a href="#"><img src="http://placehold.it/600x600" alt="" /></a>
					</div>
					<div className="col-md-2 col-6">
						<a href="#"><img src="http://placehold.it/600x600" alt="" /></a>
					</div>
					<div className="col-md-2 col-6">
						<a href="#"><img src="http://placehold.it/600x600" alt="" /></a>
					</div>
				</div>
			</div>


			<footer className="padding-top-100px padding-bottom-70px background-dark">
				<div className="container">
					<div className="row">
						<div className="col-lg-4 col-md-4 sm-mb-30px">
							<div className="logo margin-bottom-10px"><img src="assets/img/logo-1.png" alt="" /></div>
							<div className="text-grey-2  font-weight-300">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy .</div>
							<ul className="list-inline text-left margin-tb-20px margin-lr-0px text-white">
								<li className="list-inline-item"><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
								<li className="list-inline-item"><a className="youtube" href="#"><i className="fab fa-youtube"></i></a></li>
								<li className="list-inline-item"><a className="linkedin" href="#"><i className="fab fa-linkedin"></i></a></li>
								<li className="list-inline-item"><a className="google" href="#"><i className="fab fa-google-plus"></i></a></li>
								<li className="list-inline-item"><a className="twitter" href="#"><i className="fab fa-twitter"></i></a></li>
								<li className="list-inline-item"><a className="rss" href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
							</ul>
							{/* <!-- // Social --> */}
						</div>

						<div className="col-lg-4  col-md-4 sm-mb-30px">
							<ul className="footer-menu-2 row margin-0px padding-0px list-unstyled">
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Home</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Featured</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Feedback</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Ask a Question</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Team</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Maintenance</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Get a Quote</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Contact Us</a></li>
							</ul>
						</div>

						<div className="col-lg-4  col-md-4 sm-mb-30px">
							<ul className="footer-menu-2 row margin-0px padding-0px list-unstyled">
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Home</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Featured</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Feedback</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Ask a Question</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Team</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Maintenance</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Get a Quote</a></li>
								<li className="col-6  padding-tb-5px"><a href="#" className="text-grey-2">Contact Us</a></li>
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
								<li className="list-inline-item margin-lr-8px"><a className="facebook" href="#"><i className="fab fa-facebook-f"></i></a></li>
								<li className="list-inline-item margin-lr-8px"><a className="facebook" href="#"><i className="fab fa-youtube"></i></a></li>
								<li className="list-inline-item margin-lr-8px"><a className="facebook" href="#"><i className="fab fa-linkedin"></i></a></li>
								<li className="list-inline-item margin-lr-8px"><a className="facebook" href="#"><i className="fab fa-google-plus"></i></a></li>
								<li className="list-inline-item margin-lr-8px"><a className="facebook" href="#"><i className="fab fa-twitter"></i></a></li>
								<li className="list-inline-item margin-lr-8px"><a className="rss" href="#"><i className="fa fa-rss" aria-hidden="true"></i></a></li>
							</ul>
						</div>
					</div>
				</div>
			</div>




		</>
	);
}



export default HomePage;