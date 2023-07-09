import "./ContactUs.css";
import DevicesIcon from "@mui/icons-material/Devices";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import AirlineSeatReclineNormalIcon from "@mui/icons-material/AirlineSeatReclineNormal";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import PersonalVideoIcon from "@mui/icons-material/PersonalVideo";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import AllInboxIcon from "@mui/icons-material/AllInbox";
import Header from "../Navbar/Header";
import Footer from "../Footer/Footer";

function ContactUs() {
  return (
    <div>
        <Header/>
      <div
        style={{
          height: "30vh",
          backgroundImage: `url(https://www.airindia.com/adobe/dynamicmedia/deliver/dm-aid--dfb7cc74-383a-4441-9f58-a7bb894383d1/contact-us-banner.webp)`,
        }}
        className="img-fluid img "
      >
        <h1 className="mt-5 mx-5 text-light ">Contact Us</h1>
      </div>
      <div className="d-flex mx-5">
        <p>
          {" "}
          <a href="#"> Home </a>&gt;&gt;&gt;<b>Contact Us</b>
        </p>
      </div>
      <div>
        <h4 className="mt-2 mx-5 d-flex">Frequently Asked Questions</h4>
      </div>
      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <button type="button" class="btn btn-lg col-10 btn1">
              <a
                href="https://www.airindia.com/in/en/frequently-asked-questions/online-booking.html"
                class="text-decoration-none text-dark text1"
              >
                <DevicesIcon />
                &nbsp;&nbsp;Online Booking
              </a>
            </button>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <button type="button" class="btn btn-lg btn1 col-10">
              <a
                href="https://www.airindia.com/in/en/frequently-asked-questions/e-tickets.html"
                class="text-decoration-none text-dark text1"
              >
                <AirplaneTicketIcon />
                &nbsp;&nbsp;E-tickets
              </a>
            </button>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <button type="button" class="btn btn-lg btn1 col-10">
              <a
                href="https://www.airindia.com/in/en/frequently-asked-questions/special-needs.html"
                class="text-decoration-none text-dark text1"
              >
                <AirlineSeatReclineNormalIcon />
                &nbsp;&nbsp;Special Needs
              </a>
            </button>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <button type="button" class="btn btn-lg btn1 col-10">
              <a
                href="https://www.airindia.com/in/en/frequently-asked-questions/mobile-checkin.html"
                class="text-decoration-none text-dark text1"
              >
                <PhoneIphoneIcon />
                &nbsp;&nbsp;Mobile Check-in
              </a>
            </button>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <button type="button" class="btn btn-lg btn1 col-10">
              <a
                href="https://www.airindia.com/in/en/frequently-asked-questions/web-checkin.html"
                class="text-decoration-none text-dark text1"
              >
                <PersonalVideoIcon />
                &nbsp;&nbsp;Web Check-in
              </a>
            </button>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <button type="button" class="btn btn-lg btn1 col-10">
              <a
                href="https://www.airindia.com/in/en/frequently-asked-questions/ai-mobile-bookings.html"
                class="text-decoration-none text-dark text1"
              >
                <PhoneIphoneIcon />
                &nbsp;&nbsp;Mobile Booking
              </a>
            </button>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <button type="button" class="btn btn-lg btn1 col-10">
              <a
                href="https://www.airindia.com/in/en/frequently-asked-questions/self-service-reaccommodation.html"
                class="text-decoration-none text-dark text1"
              >
                <TravelExploreIcon />
                &nbsp;&nbsp;Self-Service Re-accommodation
              </a>
            </button>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <button type="button" class="btn btn-lg btn1 col-10">
              <a
                href="https://www.airindia.com/in/en/frequently-asked-questions/cargo.html"
                class="text-decoration-none text-dark text1"
              >
                <AllInboxIcon />
                &nbsp;&nbsp;Cargo
              </a>
            </button>
          </div>
        </div>
      </div>
      <hr></hr>

      <div className="mt-5 align-items-center justify-content-center">
        <form>
          <div class="form-group row">
            <label for="name" class="col-sm-1 col-form-label ">
              Name :
            </label>
            <input type="text" class="col-3 " id="name" placeholder="Name" />
          </div>
          <div class="form-group row">
            <label for="email" class="col-sm-1 col-form-label ">
              Email :
            </label>
            <input type="email" class="col-3 " id="email" placeholder="Email" />
          </div>
          <div class="form-group row">
            <label for="name" class="col-sm-1 col-form-label ">
              Message :
            </label>
            <textarea
              class="col-3"
              id="message"
              rows="3"
              placeholder="Message"
            ></textarea>
          </div>
          <input
            className="mt-2 bg-success d-flex submit"
            type="submit"
            value="Submit"
          />
        </form>
      </div>
      <hr></hr>
      <div class="container mt-4">
        <div class="row">
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <p class="col-10">
              <img src="India.png" className="imgsize" />
              <div>INDIA</div>
              <div>0124 264 1407(Toll Free)</div>
            </p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <p class="col-10">
              <img src="canada.png" className="imgsize" />
              <div>Canada</div>
              <div>+1 - 888 634 1407 (Toll Free)</div>
            </p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <p class="col-10">
              <img src="USA.jpeg" className="imgsize" />
              <div>USA</div>
              <div>+1 - 888 634 1407 (Toll Free)</div>
            </p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <p class="col-10">
              <img src="UK.png" className="imgsize" />
              <div>UK</div>
              <div>+44 - 0800 048 9254 (Toll Free)</div>
            </p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <p class="col-10">
              <img src="Australia.png" className="imgsize" />
              <div>Australia</div>
              <div>+61 - 3 701 98270 (Toll Free)</div>
            </p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <p class="col-10">
              <img src="France.png" className="imgsize" />
              <div>France</div>
              <div>+33 - 1 874 06644 * (Toll Free)</div>
            </p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <p class="col-10">
              <img src="Germany.png" className="imgsize" />
              <div>Germany</div>
              <div>+49 - 6925511337 *(Toll Free)</div>
            </p>
          </div>
          <div class="col-lg-3 col-md-4 col-sm-6 mb-3">
            <p class="col-10">
              <img src="Singapore.png" className="imgsize" />
              <div>Singapore</div>
              <div>+65 - 800 101 4016(Toll Free)</div>
            </p>
          </div>
        </div>
        <div className="mb-5">
          <i>*International call rates apply.</i>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default ContactUs;
