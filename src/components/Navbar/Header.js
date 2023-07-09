import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import FlightIcon from "@mui/icons-material/Flight";
import SearchIcon from "@mui/icons-material/Search";
import "./Header.css";
import { Box } from "@mui/material";

function Header() {
	return (
		<div>
			<Navbar collapseOnSelect expand="lg" className="gradient-background">
				<Navbar.Brand className="increase-size">
					<Box display="flex" alignItems="center" className="ms-5">
						<FlightIcon className="text-white" fontSize="large" />
						&nbsp;
						<span>
							<h3 class="text-light">Skyscanner </h3>
						</span>
					</Box>
				</Navbar.Brand>
				<Navbar.Toggle aria-controls="responsive-navbar-nav" />
				<Navbar.Collapse id="responsive-navbar-nav">
					<Nav className="me-auto"></Nav>

					{/* SEARCH BAR */}
					<form class="search-form me-4">
						<input type="text" placeholder="Search" />
						<button type="submit">
							{/* <img src="" alt="" id="search_icon" /> */}
							<SearchIcon />
						</button>
					</form>

					<Nav>
						<Nav.Link
							floating
							className="navbtn m-1 text-white"
							href="/home"
						>
							Home
						</Nav.Link>
						<Nav.Link
							floating
							className="navbtn m-1 text-white"
							href="#features"
						>
							Flights
						</Nav.Link>
						<Nav.Link
							floating
							className="navbtn m-1 text-white"
							href="#features"
						>
							Charter Flights
						</Nav.Link>
						<Nav.Link floating className="navbtn m-1 text-white" href="aboutus">
							About Us
						</Nav.Link>
						<Nav.Link
							floating
							className="navbtn m-1 text-white"
							href="/contactus"
						>
							Contact Us
						</Nav.Link>
						{/* <Form className="d-flex">
                                <Form.Control
                                    type="search"
                                    placeholder="Search"
                                    className="me-2 custom-height"
                                    aria-label="Search"
                                />
                                <Button className="custom-height" variant="outline-success">Search</Button>
                                </Form> */}
						<Button className="custom-height" variant="outline-light">
							Log in
						</Button>
						&nbsp;&nbsp;
						<Button className="custom-height me-4" variant="outline-light">
							Sign Up
						</Button>
					</Nav>
				</Navbar.Collapse>
			</Navbar>
		</div>
	);
}

export default Header;
