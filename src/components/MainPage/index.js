import "./index.css";
import { useState } from "react";
const MainPage = () => {
  const [selectedItem, setSelectedItem] = useState("Showrooms");
  const [openBox, setBox] = useState(false);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };
  const handleItemClick1 = (item) => {
    setBox(!openBox);
    setSelectedCar(item);
  };
  const [selectedCar, setSelectedCar] = useState("Contact Us");

  const handleActionSelection = () => {};
  const carCategories = {
    ALL: [
      { heading: "Compact Car", priceRange: "$20,000 - $30,000" },
      { heading: "Midsize Car", priceRange: "$25,000 - $35,000" },
      { heading: "Electric Compact Car", priceRange: "$40,000 - $50,000" },
      { heading: "Electric Midsize Car", priceRange: "$45,000 - $55,000" },
      { heading: "Luxury Car", priceRange: "$60,000 - $80,000" },
      { heading: "Sport Car", priceRange: "$70,000 - $90,000" },
    ],
    "NEWLY LAUNCHED": [
      { heading: "New Compact Car", priceRange: "$30,000 - $40,000" },
      { heading: "New Midsize Car", priceRange: "$35,000 - $45,000" },
      { heading: "New Luxury Car", priceRange: "$50,000 - $70,000" },
      { heading: "New Sport Car", priceRange: "$60,000 - $80,000" },
      { heading: "New Electric Compact Car", priceRange: "$45,000 - $55,000" },
      { heading: "New Electric Midsize Car", priceRange: "$50,000 - $60,000" },
    ],
    SEDAN: [
      { heading: "Luxury Sedan", priceRange: "$25,000 - $35,000" },
      { heading: "Sport Sedan", priceRange: "$30,000 - $40,000" },
      { heading: "Electric Luxury Sedan", priceRange: "$40,000 - $50,000" },
      { heading: "Electric Sport Sedan", priceRange: "$45,000 - $55,000" },
      { heading: "Premium Sedan", priceRange: "$50,000 - $70,000" },
      { heading: "Executive Sedan", priceRange: "$70,000 - $90,000" },
    ],
    HATCHBACK: [
      { heading: "Compact Hatchback", priceRange: "$20,000 - $30,000" },
      { heading: "Midsize Hatchback", priceRange: "$25,000 - $35,000" },
      { heading: "Premium Hatchback", priceRange: "$30,000 - $40,000" },
      {
        heading: "Electric Compact Hatchback",
        priceRange: "$35,000 - $45,000",
      },
      {
        heading: "Electric Midsize Hatchback",
        priceRange: "$40,000 - $50,000",
      },
      { heading: "Sport Hatchback", priceRange: "$50,000 - $60,000" },
    ],
    SUV: [
      { heading: "Compact SUV", priceRange: "$30,000 - $40,000" },
      { heading: "Midsize SUV", priceRange: "$35,000 - $45,000" },
      { heading: "Luxury SUV", priceRange: "$40,000 - $50,000" },
      { heading: "Electric Compact SUV", priceRange: "$45,000 - $55,000" },
      { heading: "Electric Midsize SUV", priceRange: "$50,000 - $60,000" },
      { heading: "Sport SUV", priceRange: "$60,000 - $80,000" },
    ],
    "N-LINE": [
      { heading: "N-Line Compact", priceRange: "$35,000 - $45,000" },
      { heading: "N-Line Midsize", priceRange: "$40,000 - $50,000" },
      { heading: "N-Line Luxury", priceRange: "$50,000 - $60,000" },
      { heading: "N-Line Electric Compact", priceRange: "$60,000 - $70,000" },
      { heading: "N-Line Electric Midsize", priceRange: "$70,000 - $80,000" },
      { heading: "N-Line Sport", priceRange: "$80,000 - $100,000" },
    ],
    ELECTRIC: [
      { heading: "Electric Compact Car", priceRange: "$40,000 - $50,000" },
      { heading: "Electric Midsize Car", priceRange: "$45,000 - $55,000" },
      { heading: "Electric Luxury Car", priceRange: "$60,000 - $80,000" },
      { heading: "Electric Sport Car", priceRange: "$70,000 - $90,000" },
      { heading: "Electric SUV", priceRange: "$80,000 - $100,000" },
      { heading: "Electric N-Line", priceRange: "$100,000 - $120,000" },
    ],
  };

  const [selectedCategory, setSelectedCategory] = useState("ALL");

  return (
    <div>
      <div className="top-div">
        <div className="top1">
          <div className="service-svg">
            <img src="/images/tellephone.svg" alt="Service" />
          </div>
          <p>Service: 9676189866</p>
          <div className="service-svg">
            <img src="/images/tellephone.svg" alt="Service" />
          </div>
          <p className="top2">Sales: 9676189866</p>
        </div>
        <div className="social-media">
          <p>Follow us on:</p>
          <div>
            <img
              src="/images/fb.svg"
              alt="Facebook"
              className="social-media-icon"
            />
          </div>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/twitter.svg"
              alt="Facebook"
              className="social-media-icon"
            />
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer">
            <img
              src="/images/insta.svg"
              alt="Facebook"
              className="social-media-icon"
            />
          </a>
          {/* Add more social media links as needed */}
        </div>
      </div>

      <div className="top-div2">
        <img
          className="logo1"
          src="https://www.tridenthyundai.com/images/logo/trident-logo.svg"
          alt="logo-company"
        />
        <div className="div2-sidesection">
          <div className="dropdown1">
            <div>
              <p
                className="allcars"
                onClick={() => handleItemClick1("all cars")}
              >
                All Cars
              </p>
            </div>

            {selectedCar === "all cars" && openBox && (
              <div className="car-dropdown">
                <p
                //</div> onClick={() => handleCarSelection('A')}
                >
                  AllCars
                </p>
                <p
                //onClick={() => handleCarSelection('B')}
                >
                  NewlyLaunched
                </p>
                <p
                //</div>onClick={() => handleCarSelection('C')}
                >
                  sadan
                </p>
                <p
                //</div>onClick={() => handleCarSelection('D')}
                >
                  pushback
                </p>
              </div>
            )}
          </div>
          <div className="dropdown1">
            <div>
              <p
                className="allcars"
                onClick={() => handleItemClick1("Our Services")}
              >
                Our Services
              </p>
            </div>

            {selectedCar === "Our Services" && openBox && (
              <div className="car-dropdown">
                <p onClick={() => handleActionSelection("Test Drive")}>
                  Test Drive
                </p>
                <p onClick={() => handleActionSelection("Service Booking")}>
                  Service Booking
                </p>
                <p onClick={() => handleActionSelection("Get Finance")}>
                  Get Finance
                </p>
                <p onClick={() => handleActionSelection("Get Insurance")}>
                  Get Insurance
                </p>
                <p onClick={() => handleActionSelection("Bodyshop")}>
                  Bodyshop
                </p>
                <p onClick={() => handleActionSelection("Exchange Your Car")}>
                  Exchange Your Car
                </p>
              </div>
            )}
          </div>

          <div className="dropdown1">
            <div>
              <p
                className="Contact Us"
                onClick={() => handleItemClick1("Contact Us")}
              >
                Contact Us
              </p>
            </div>
          </div>
          <div className="dropdown1">
            <div>
              <a
                href="https://hpromise.tridenthyundai.com/hyundai-used-cars-in-bangalore.html"
                target="_blank"
              >
                {" "}
                <p
                  className=">H-Promise"
                  onClick={() => handleItemClick1("H-Promise")}
                >
                  H-Promise
                </p>
              </a>
            </div>
          </div>

          <button
            onClick={() => handleItemClick1("Button")}
            className="browse-button"
          >
            {" "}
            % Browse Offers
          </button>
        </div>
      </div>

      {selectedCar === "Contact Us" && (
        <div className="top-div3">
          <p className="div3-home">
            <span className="span1">Home</span> / ContactUs
          </p>

          <h1 className="">Contact Us </h1>
          <p className="">
            Find Trident Hyundai Showrooms & Service Centres in Bangalore
          </p>

          <div className="locations-direction">
            <p
              onClick={() => handleItemClick("Showrooms")}
              className={selectedItem === "Showrooms" ? "selected" : ""}
            >
              Showrooms
            </p>
            <p
              onClick={() => handleItemClick("ServiceCenter")}
              className={selectedItem === "ServiceCenter" ? "selected" : ""}
            >
              Service Center
            </p>
            <p
              onClick={() => handleItemClick("Feedback")}
              className={selectedItem === "Feedback" ? "selected" : ""}
            >
              Feedback
            </p>
          </div>

          {selectedItem === "Showrooms" ? (
            <div className="directions-div2">
              <div className="directions-div">
                <div className="contact-container">
                  <h2>Sankey Road</h2>
                  <p>
                    #1, Lower Palace Orchard, Sankey Road, Sadashivnagar,
                    Bangalore - 560003
                  </p>
                  <p>08043433333</p>
                  <p>7353762526</p>
                  <p>9900115133</p>
                  <button className="get-directions-button">
                    Get Directions
                  </button>
                </div>
                <div className="contact-container">
                  <h2>Sankey Road</h2>
                  <p>
                    #1, Lower Palace Orchard, Sankey Road, Sadashivnagar,
                    Bangalore - 560003
                  </p>
                  <p>08043433333</p>
                  <p>7353762526</p>
                  <p>9900115133</p>
                  <button className="get-directions-button">
                    Get Directions
                  </button>
                </div>{" "}
                <div className="contact-container">
                  <h2>Sankey Road</h2>
                  <p>
                    #1, Lower Palace Orchard, Sankey Road, Sadashivnagar,
                    Bangalore - 560003
                  </p>
                  <p>08043433333</p>
                  <p>7353762526</p>
                  <p>9900115133</p>
                  <button className="get-directions-button">
                    Get Directions
                  </button>
                </div>
              </div>
              <div>
                <iframe
                  className="maps-div"
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d124430.18465116947!2d77.52733163906251!3d12.943463001689041!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701069592483!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          ) : selectedItem === "ServiceCenter" ? (
            <div className="directions-div2">
              <div className="directions-div">
                <div className="contact-container">
                  <h2>Yeswathpur</h2>
                  <p>
                    #1, Lower Palace Orchard, Sankey Road, Sadashivnagar,
                    Bangalore - 560003
                  </p>
                  <p>08043433333</p>
                  <p>7353762526</p>
                  <p>9900115133</p>
                  <button className="get-directions-button">
                    Get Directions
                  </button>
                </div>
                <div className="contact-container">
                  <h2>Yeswathpur</h2>
                  <p>
                    #1, Lower Palace Orchard, Sankey Road, Sadashivnagar,
                    Bangalore - 560003
                  </p>
                  <p>08043433333</p>
                  <p>7353762526</p>
                  <p>9900115133</p>
                  <button className="get-directions-button">
                    Get Directions
                  </button>
                </div>{" "}
                <div className="contact-container">
                  <h2>Yeswathpur</h2>
                  <p>
                    #1, Lower Palace Orchard, Sankey Road, Sadashivnagar,
                    Bangalore - 560003
                  </p>
                  <p>08043433333</p>
                  <p>7353762526</p>
                  <p>9900115133</p>
                  <button className="get-directions-button">
                    Get Directions
                  </button>
                </div>
              </div>
              <div className="maps-div">
                <iframe
                  title="Google Map"
                  srcDoc="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31103.159728471357!2d77.58904125000001!3d12.9785693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1701084738589!5m2!1sen!2sin"
                  width="600"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          ) : (
            <div className="container">
              <div className="form-container">
                <form>
                  <label htmlFor="name">Name:</label>
                  <input type="text" id="name" name="name" />

                  <label htmlFor="phone">Phone Number:</label>
                  <input type="tel" id="phone" name="phone" />

                  <label htmlFor="email">Email Address:</label>
                  <input type="email" id="email" name="email" />

                  <label htmlFor="queryType">Query Type:</label>
                  <select id="queryType" name="queryType">
                    <option value="sales">Sales</option>
                    <option value="sales">Insurence</option>
                    <option value="sales">Finance</option>
                    {/* Add more options as needed */}
                  </select>

                  <label htmlFor="query">Query (Optional):</label>
                  <textarea id="query" name="query"></textarea>

                  <button type="submit">Submit</button>
                  <p>
                    By submitting this form, you agree to receive marketing
                    messages & calls from Trident Hyundai.*
                  </p>
                </form>
              </div>
              <div className="image-container">
                <img
                  src="https://www.tridenthyundai.com/images/offers-new.png"
                  alt="Offer"
                />
              </div>
            </div>
          )}
        </div>
      )}
      {selectedCar === "all cars" && (
        <div className="back1">
          <h1>Car Categories</h1>
          <div className="all-cars-div">
            {Object.keys(carCategories).map((category) => (
              <p
                className={
                  selectedCategory === category ? "selected-category" : ""
                }
                key={category}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </p>
            ))}
          </div>

          {selectedCategory && (
            <div className="cars-categorywise">
              {carCategories[selectedCategory].map((car) => (
                <div className="sub1" key={car.heading}>
                  <img
                    className="image-car"
                    src="https://tridentgroup.s3.ap-south-1.amazonaws.com/hyundai/models/display_images/1698924096.jpg"
                  />
                  <h3>{car.heading}</h3>
                  <p>{`Price Range: ${car.priceRange}`}</p>

                  <button className="book-ride">Book Ride</button>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {selectedCar === "Our Services" && (
        <div className="top-div6">
          <div className="container2">
            <div className="form-container">
              <form>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" />

                <label htmlFor="phone">Phone Number:</label>
                <input type="tel" id="phone" name="phone" />

                <label htmlFor="email">Email Address:</label>
                <input type="email" id="email" name="email" />

                <label htmlFor="queryType">select location:</label>
                <select id="queryType" name="queryType">
                  <option value="sales">Select</option>
                  <option value="sales">hyderabad</option>
                  <option value="sales">Bangolore</option>
                  <option value="sales">Mumbai</option>
                </select>

                <label htmlFor="query">Query (Optional):</label>
                <textarea id="query" name="query"></textarea>

                <button type="submit">Submit</button>
              </form>
            </div>
            <div className="image-container">
              <img
                src="https://www.tridenthyundai.com/images/testdrive-img.png"
                alt="Offer"
              />
            </div>
          </div>
        </div>
      )}
      {selectedCar === "Button" && (
        <div>
          <img src="https://www.tridenthyundai.com/images/offers/offers_banner.jpg" />
        </div>
      )}
      <div className="row full-width">
        {/* Section 1: Trident Hyundai */}
        <section className="column">
          <h1>Trident Hyundai</h1>
          <p>No 1, Lower Palace Orchards,</p>
          <p>Sankey Road, Bangalore - 560003</p>
          <p>080 4343 3333</p>
          <p>info@tridenthyundai.com</p>
        </section>

        {/* Section 2: All Hyundai cars */}
        <section className="column">
          <ul>
            <h1>All Hyundai cars</h1>
            <li>Hyundai Alcazar</li>
            <li>Hyundai Aura</li>
            <li>Hyundai Creta</li>
            {/* Add the rest of the cars */}
          </ul>
        </section>

        {/* Section 3: Our Services */}
        <section className="column">
          <ul>
            <h1>Our Services</h1>
            <li>Hyundai Pricelist</li>
            <li>Service Your Car</li>
            <li>Test Drive a Car</li>
            <li>Finance a Car</li>
            <li>Exchange Your Car</li>
            <li>Insure Your Car</li>
            <li>H-Promise</li>
          </ul>
        </section>

        {/* Section 4: Quick links */}
        <section className="column">
          <ul>
            <h1>Quick links</h1>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Blogs</li>
            <li>Feedback Form</li>
          </ul>
        </section>
      </div>

      <div>
        <footer className="footer">
          <p>
            Copyright © TRIDENT AUTOMOBILES (BANGALORE) PRIVATE LIMITED. ALL
            RIGHTS RESERVED.
          </p>
          <div className="social-media">
            <p>Follow us on:</p>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Facebook
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Twitter
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              Instagram
            </a>
            {/* Add more social media links as needed */}
          </div>
        </footer>
      </div>
    </div>
  );
};
export default MainPage;
