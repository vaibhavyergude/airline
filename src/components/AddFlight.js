import axios from "axios";
import { useState } from "react";
import Header from "./Navbar/Header";
import { Form, Button } from "react-bootstrap";

export default function AddFlight() {
	const [flightData, setFlightData] = useState({
		airlineName: "",
		source: "",
		destination: "",
		date: "",
		departureTime: "",
		arrivalTime: "",
		availableSeat: "",
	});

	// private String airlineName;
	// private String source;
	// private String destination;
	// private LocalDate date;
	// private LocalTime departureTime;
	// private LocalTime arrivalTime;
	// private int availableSeat;

	function handleInput(event) {
		setFlightData((prevValues) => {
			return {
				...prevValues,
				[event.target.name]: event.target.value,
			};
		});
	}

	function sendData(event) {
		event.preventDefault();
		console.log(flightData);
		let url = "http://localhost:9090/add-flight";
		axios.post(url, flightData).then((response) => {
			console.log(response.data);
			alert("Data added Successfully");
			event.target.reset();
		});
	}

	return (
		<>
			<Header />

			<div className="row justify-content-center mt-5">
				<div className="col-8">
					<Form onSubmit={sendData}>
						<Form.Group controlId="airlineName">
							<Form.Label>Enter Airline name:</Form.Label>
							<Form.Control name="airlineName" onChange={handleInput} />
						</Form.Group>

						<Form.Group controlId="source">
							<Form.Label>Enter source:</Form.Label>
							<Form.Control name="source" onChange={handleInput} />
						</Form.Group>

						<Form.Group controlId="destination">
							<Form.Label>Enter destination:</Form.Label>
							<Form.Control name="destination" onChange={handleInput} />
						</Form.Group>

						<Form.Group controlId="date">
							<Form.Label>Select date:</Form.Label>
							<Form.Control type="date" name="date" onChange={handleInput} />
						</Form.Group>

						<Form.Group controlId="departureTime">
							<Form.Label>Select departure time:</Form.Label>
							<Form.Control
								type="time"
								name="departureTime"
								onChange={handleInput}
							/>
						</Form.Group>

						<Form.Group controlId="arrivalTime">
							<Form.Label>Enter arrival time:</Form.Label>
							<Form.Control
								type="time"
								name="arrivalTime"
								onChange={handleInput}
							/>
						</Form.Group>

						<Form.Group controlId="availableSeat">
							<Form.Label>Enter available seats:</Form.Label>
							<Form.Control name="availableSeat" onChange={handleInput} />
						</Form.Group>

						<Button variant="primary" type="submit" className="w-100 mt-3">
							Add
						</Button>
					</Form>
				</div>
			</div>
		</>
	);
}
