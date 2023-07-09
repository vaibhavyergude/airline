import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import FlightTakeoffIcon from "@mui/icons-material/FlightTakeoff";
import FlightLandIcon from "@mui/icons-material/FlightLand";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";

function HomepageSearch() {
	const [tripType, setTripType] = useState("one_way");
	const [from, setFrom] = useState("");
	const [to, setTo] = useState("");
	const [departureDate, setDepartureDate] = useState("");
	const [returnDate, setReturnDate] = useState("");
	const [classType, setClassType] = useState("Economy");

	const handleSubmit = () => {
		// Perform submission logic here
		console.log("Submitted");
	};

	const handleTripTypeChange = (e) => {
		setTripType(e.target.value);
		if (e.target.value === "one_way") {
			setReturnDate(""); // Reset return date for one-way trip
		}
	};

	return (
		<div className="row justify-content-center mt-5 search_body">
			<div className="col-8">
				<div className="booking_box p-4">
					{/* <div className="mb-3 d-flex ">
						<h5>
							Trip Type <DoubleArrowIcon />{" "}
						</h5>
						&nbsp;&nbsp;
						<div className="form-check form-check-inline">
							<input
								className="form-check-input"
								type="radio"
								name="tripType"
								id="oneWay"
								value="one_way"
								checked={tripType === "one_way"}
								onChange={handleTripTypeChange}
							/>
							<label className="form-check-label" htmlFor="oneWay">
								One Way
							</label>
						</div>
						<div className="form-check form-check-inline trip_type">
							<input
								className="form-check-input"
								type="radio"
								name="tripType"
								id="roundTrip"
								value="round_trip"
								checked={tripType === "round_trip"}
								onChange={handleTripTypeChange}
							/>
							<label className="form-check-label" htmlFor="roundTrip">
								Round Trip
							</label>
						</div>
					</div> */}
					<div className="row mb-3">
						<div className="col-md-6 col-sm-12 d-flex align-items-center">
							<FlightTakeoffIcon />
							&nbsp;
							<h5>From:&nbsp;</h5>
							<select
								className="form-select options custom-select-border-none"
								aria-label="From"
								value={from}
								onChange={(e) => setFrom(e.target.value)}
							>
								<option value="">Select Departure City</option>
								<option value="Mumbai">Mumbai</option>
								<option value="Delhi">Delhi</option>
								<option value="Bangalore">Bangalore</option>
								<option value="Hyderabad">Hyderabad</option>
							</select>
						</div>

						<div className="col-md-6 col-sm-12 d-flex align-items-center">
							<FlightLandIcon />
							&nbsp;
							<h5>To:&nbsp;</h5>
							<select
								className="form-select options custom-select-border-none"
								aria-label="To"
								value={to}
								onChange={(e) => setTo(e.target.value)}
							>
								<option value="">Select Destination City</option>
								<option value="Mumbai">Mumbai</option>
								<option value="Delhi">Delhi</option>
								<option value="Bangalore">Bangalore</option>
								<option value="Hyderabad">Hyderabad</option>
							</select>
						</div>
					</div>
					<div className="row mb-3">
						<div className="col-md-6 col-sm-12">
							<Form.Label>
								<h5>Going Date</h5>
							</Form.Label>
							<Form.Control
								type="date"
								value={departureDate}
								onChange={(e) => setDepartureDate(e.target.value)}
								required
							/>
						</div>

						{/* <div className="col-md-6 col-sm-12">
							<Form.Label>
								<h5>Return Date</h5>
							</Form.Label>
							<Form.Control
								type="date"
								value={returnDate}
								onChange={(e) => setReturnDate(e.target.value)}
								required
								disabled={tripType === "one_way"} // Disable return date for one-way trip
							/>
						</div> */}

						<div className="col-6">
							<Form.Label>
								<h5>Class</h5>
							</Form.Label>
							<select
								className="form-select"
								aria-label="Class"
								value={classType}
								onChange={(e) => setClassType(e.target.value)}
							>
								<option value="Economy">Economy</option>
								<option value="Premium Economy">Premium Economy</option>
								<option value="Business">Business</option>
								<option value="First">First</option>
							</select>
						</div>
					</div>
					{/* <div className="row mb-3">
						<div className="col-6">
							<Form.Label>
								<h5>Class</h5>
							</Form.Label>
							<select
								className="form-select"
								aria-label="Class"
								value={classType}
								onChange={(e) => setClassType(e.target.value)}
							>
								<option value="Economy">Economy</option>
								<option value="Premium Economy">Premium Economy</option>
								<option value="Business">Business</option>
								<option value="First">First</option>
							</select>
						</div>
					</div> */}
					<div className="row justify-content-center">
						<Button variant="danger" onClick={handleSubmit}>
							Submit
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default HomepageSearch;
