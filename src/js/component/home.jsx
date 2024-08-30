import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="container-fluid bg-dark">
			<div className="bg-light">
				<NavBar/>,
				<Welcome/>,
				<Cards/>,
				<Footer/>
			</div>
		</div>
	);
};

const NavBar=()=>{
    return(
		<div className="col  bg-dark">
			<nav class="navbar col-md-8 col-sm-6 col-xs-4 mx-auto text-light">
			<div class="container-fluid">
				<div className="">Start Bootstrap</div>
				<div className="d-flex postion-absolute top-0 end-0">
					<a className="nav-link mx-2" href="#">Home</a>
					<a className="nav-link mx-2" href="#">About</a>
					<a className="nav-link mx-2" href="#">Services</a>
					<a className="nav-link mx-2" href="#">Contact</a>
				</div>
			</div>
		</nav>
		</div>
    );
};

const Welcome=()=>{
	return(
		<div className="col-md-8 col-sm-6 col-xs-4 mx-auto p-4">
			<h1>A Warm Welcome!</h1>
			<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
			<a className="btn btn-primary">Click to action!</a>
		</div>
	);
};

const Cards=()=>{
	return(
		<div className="row col-md-8 col-sm-6 col-xs-4 mx-auto">
			<Card/>,
			<Card/>,
			<Card/>,
			<Card/>
		</div>
	);
};

const Footer=()=>{
    return(
		<div className="row justify-content-center bg-dark text-light py-4">
			Copyright © Your Website 2019
		</div>
	);
};

const Card=()=>{
	return(
		<div className="col border p-0 m-2">
			<img className="" style={{width:"100%"}} src="https://placehold.co/500x325"></img>
			<div className="p-3">
				<h5>Card Title</h5>
				<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
			</div>
			<a className="btn btn-primary">Find Out More!</a>
		</div>
	);
};
export default Home;
