import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Homepage/Homepage.js";
import AboutUs from "./components/AboutUs/AboutUs.js";
import ContactUs from "./components/ContactUs/ContactUs.js";
import SearchForFlight from "./components/SearchForFlights";
import AddFlight from "./components/AddFlight";

function App() {
	return (
		<div className="App">
			{/* <BrowserRouter>
				<Routes>
					<Route path="/" element={<Homepage />} />
					<Route path="/home" element={<Homepage />} />
					<Route path="/aboutus" element={<AboutUs />} />
					<Route path="/contactus" element={<ContactUs />} />
				</Routes>
			</BrowserRouter> */}

            {/* <AddFlight/> */}
            <SearchForFlight/>

		</div>
	);
}

export default App;
