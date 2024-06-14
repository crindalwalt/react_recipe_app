import AllRecipe from "./AllRecipe";
import Header from "./Header";

const HomePage = () => {
	return (
		<>

			<>
				<Header />
				{/* // Header  */}
				<div id="page-title" className="padding-tb-30px gradient-white">
					<div className="container text-left">
						<ol className="breadcrumb opacity-5">
							<li>
								<a href="#">Home</a>
							</li>
							<li className="active">recipes</li>
						</ol>
						<h1 className="font-weight-300">Recipes - List Layout</h1>
					</div>
				</div>
				<div className="container">
					<div className="margin-bottom-60px">
						<div className="listing-search box-shadow">
							<form className="row no-gutters">
								<div className="col-md-4">
									<div className="keywords">
										<input
											className="listing-form first"
											type="text"
											placeholder="Keywords..."
											defaultValue=""
										/>
									</div>
								</div>
								<div className="col-md-4">
									<div className="categories dropdown">
										<a
											className="listing-form d-block text-nowrap"
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
								<div className="col-md-4">
									<a
										className="listing-bottom background-second-color box-shadow"
										href="#"
									>
										Search Now
									</a>
								</div>
							</form>
						</div>
					</div>
				</div>
				<AllRecipe />
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
	);
}



export default HomePage;