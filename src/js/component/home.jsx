import React from "react";
//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";


const numberOfCards=4;

//create your first component
const Home = () => {
	const cardsArray=[];
	for(let i=0;i<numberOfCards;i++){
		cardsArray.push({
			title:"Card title",
			imageURL: "https://placehold.co/500x325",
			description: "Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum",
			buttonURL: "#",
			buttonLabel:"Find Out More!",
			marginSide: i==numberOfCards-1?"0":"4"
		});
	};
	
	return (
		<div className="container-fluid bg-dark">
			<div className="container-fluid bg-white">
				<NavBar/>,
				<Welcome/>,
				<div className="row col-md-8 col-sm-6 col-xs-4 mx-auto">
					<Cards cardsArray={cardsArray}/>
				</div>,
				<Footer/>
			</div>
		</div>
	);
};

const NavBar=()=>{
    return(
		<div className="row bg-dark">
			<nav className="navbar col-md-8 col-sm-6 col-xs-4 mx-auto text-white">
				<div className="container-fluid">
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
		<div className="col-md-8 col-sm-6 col-xs-4 mx-auto p-4 bg-light">
			<h1>A Warm Welcome!</h1>
			<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum </p>
			<a className="btn btn-primary">Click to action!</a>
		</div>
	);
};

const Cards=(props)=>{
	return(
		props.cardsArray.map((card,index)=>{
			return <Card card={card} index={index}/>
		})
	);
};
//
const Card=(props)=>{
	return(
		<div key={props.index} className={`col border p-0 me-${props.card.marginSide}`}>
			<img className="" style={{width:"100%"}} src={props.card.imageURL}></img>
			<div className="row p-3 mx-auto">
				<h5 className="row justify-content-center">{props.card.title}</h5>
				<p>{props.card.description}</p>
			</div>
			<div className="d-flex justify-content-center py-2 bg-light border-top">
				<a href={props.card.buttonURL} className="btn btn-primary">{props.card.buttonLabel}</a>
			</div>
		</div>
	);
};

const Footer=()=>{
    return(
		<div className="row justify-content-center bg-dark text-white py-4">
			Copyright © Your Website 2019
		</div>
	);
};

export default Home;
