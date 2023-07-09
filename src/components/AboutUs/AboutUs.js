import Image from "react-bootstrap/Image";
import "./AboutUs.css";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";

function AboutUs() {
	return (
		<div>
			<Header />
			<div
				style={{
					height: "30vh",
					backgroundImage: `url(https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--c4c5d7e1-171c-4945-955d-a3cf041e42b2/main-banner.webp)`,
				}}
				className="img-fluid img "
			>
				<h1 className="mt-5 mx-5 text-light ">About Us</h1>
			</div>
			<div className="bg-light d-flex row">
				<div className="col-3">
					<p>
						<h1>12,000+</h1>
					</p>
					<p>Employees Worldwide</p>
				</div>
				<div className="col-3">
					<p>
						<h1>79</h1>
					</p>
					<p>Destinations</p>
				</div>
				<div className="col-3">
					<p>
						<h1>59</h1>
					</p>
					<p>Nonstop International Routes</p>
				</div>
				<div className="col-3">
					<p>
						<h1>90</h1>
					</p>
					<p>Years Of Service</p>
				</div>
				<div></div>
			</div>
			<div
				style={{
					height: "70vh",
					backgroundImage: `url(https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--8bc0f21d-78e3-465c-8cc5-cf1f35dc0498/jrdtata-banner.webp)`,
				}}
				className="img-fluid img "
			>
				<div className="container">
					<div class="row justify-content-around ">
						<div class="col-4 col mt-5 display-1">
							More Than{" "}
							<b>
								<i>90 Years</i>
							</b>
							Of <br></br>Innovation
						</div>
						<div class="col-4"></div>
					</div>
				</div>
			</div>
			<h2 className="d-flex mx-5">Our Fleet</h2>
			<p className="d-flex mx-5">
				Our growing fleet of Airbus and Boeing aircraft serves 102 domestic and
				international destinations.
			</p>
			<div className="d-flex">
				<div>
					<Image
						src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--2db58411-1fad-4fb1-9ac4-85a57605f273/Flight-a-319-New.webp"
						className="imgsize"
					/>
					<h3>A319</h3>
				</div>
				<div>
					<Image
						src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--2db58411-1fad-4fb1-9ac4-85a57605f273/Flight-a-319-New.webp"
						className="imgsize"
					/>
					<h3>A320</h3>
				</div>
				<div>
					<Image
						src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--2db58411-1fad-4fb1-9ac4-85a57605f273/Flight-a-319-New.webp"
						className="imgsize"
					/>
					<h3>A320neo</h3>
				</div>
				<div>
					<Image
						src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--2db58411-1fad-4fb1-9ac4-85a57605f273/Flight-a-319-New.webp"
						className="imgsize"
					/>
					<h3>A321</h3>
				</div>
			</div>
			<div className="d-flex">
				<div>
					<Image
						src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--2db58411-1fad-4fb1-9ac4-85a57605f273/Flight-a-319-New.webp"
						className="imgsize"
					/>
					<h3>A321neo</h3>
				</div>
				<div>
					<Image
						src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--2db58411-1fad-4fb1-9ac4-85a57605f273/Flight-a-319-New.webp"
						className="imgsize"
					/>
					<h3>B787-8</h3>
				</div>
				<div>
					<Image
						src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--2db58411-1fad-4fb1-9ac4-85a57605f273/Flight-a-319-New.webp"
						className="imgsize"
					/>
					<h3>B777-200LR</h3>
				</div>
				<div>
					<Image
						src="https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--2db58411-1fad-4fb1-9ac4-85a57605f273/Flight-a-319-New.webp"
						className="imgsize"
					/>
					<h3>B777-300ER</h3>
				</div>
			</div>
			<hr></hr>
			<div
				style={{
					height: "70vh",
					backgroundImage: `url(https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--4abbbdd1-9a20-4a95-81da-5feda1a5ba20/fly-banner.webp)`,
				}}
				className="img-fluid img justify-content-center"
			>
				<div>
					<p className="display-1 mt-5 ">WE PLEDGE TO FLY NET ZERO</p>

					<p>
						Air India is committed to the International Air Transport
						Association’s Fly Net Zero<br></br> initiative to operate with
						net-zero carbon emissions by 2050.
					</p>
				</div>
			</div>

			<h3 className="mt-5">
				<u>Our Team</u>
			</h3>
			<div className="d-flex mt-4 justify-content-center">
				<div>
					<img src="Vaibhav.png" className="img1" />
					<div className="mt-4">
						<h4>Vaibhav Yergude</h4>
					</div>
					<div>Chairman</div>
				</div>
				<div>
					<img src="Vaishnavi.png" className="img1" />
					<div className="mt-4">
						<h4>Vaishnavi Badoge</h4>
					</div>
					<div>Independent Director</div>
				</div>
				<div>
					<img src="Mayur.png" className="img1" />
					<div className="mt-4">
						<h4>Mayur Bhole</h4>
					</div>
					<div>Chief Financial Officer</div>
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default AboutUs;
