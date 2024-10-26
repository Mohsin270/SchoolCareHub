import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from "react";
import Navbar from './components/Navbar';
import Footer from './components/footer';
import ccimg2 from "./images/DHA-Kindergarten-2.jpg";
import ccimg3 from "./images/DHA-Kindergarten-3.jpg";
import ccimg4 from "./images/DHA-Kindergarten-4.jpg";
import himg from "./images/Defence-Degree-College-Building.jpg";
import pimg from "./images/kindergartenimage.jpg";
import "./profile.css";

const Profile = () => {
  return (
    <>
    <Navbar />
    <div className="custom-profilee">
      <div className="all-section-div">
      <div className="profilee-header">
        <img src={pimg} alt="Institute Profile" className="custom-profile-image" />
        <button className="back-arrow-button" onClick={() => window.history.back()}>
          <FontAwesomeIcon icon={faArrowLeft} /> 
        </button>
      </div>
        <div className="maain">
          <div className="custom-info-containers">
            {/* Profile Container Code */}
            <div className="custom-profile-info">
              <span className="institute-type">Private School</span>
              <h1 className="institute-name">DHA Kindergarten</h1>
              <p className="rank">#1 in Best Private High Schools in Lahore</p>
              <div className="details">
                <span className="grade">A+</span>
                <span className="info">
                  Overall Grade • Private, Boarding • Play Group to KG • Lahore,
                  Pakistan
                </span>
                <span className="rating">★★★★☆ 340 reviews</span>
              </div>
            </div>

            {/* Contact Details Code */}
            <div className="custom-contact-container">
              <div className="contact-details">
                <span className="contact-details-text">Contact Details</span>
                <a
                  href="https://dhalahore.edu.pk/kindergarten/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  dhalahore.edu.pk/kindergarten/
                </a>
                <a href="tel:(042) 37177903">(042) 37177903</a>
                <p>DHA Kindergarten, 594/I-G, Phase-V DHA Lahore</p>
                <p>DHA Lahore, Pakistan</p>
                <div className="extra-btn-details">
                  {/* <button className="btn apply-now">Visit Now</button>
                <button className="btn virtual-tour">Virtual Tour</button>
                 */}
                  <a
                    href="https://dhalahore.edu.pk/kindergarten/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn apply-now"
                  >
                    Visit Now
                  </a>
                  <a
                    href=""
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn virtual-tour"
                  >
                    Virtual Tour
                  </a>
                </div>
              </div>
            </div>

            {/* Admission policy Code */}
            <div className="custom-applying-container">
              <h2 className="applying-title">Admission Policy</h2>
              <div className="info-row">
                <span>Registration Fee </span>
                <span className="info-value">10,000</span>
              </div>
              <div className="info-row">
                <span>Application Fee</span>
                <span className="info-value">2000</span>
              </div>
              <div className="info-row">
                <span>Monthly Fee </span>
                <span className="info-value">15000</span>
              </div>
              <div className="info-row">
                <span>Subjects for Test </span>
                <span className="info-value">
                  Oral / written test will be conducted
                </span>
              </div>
              <div className="button-row">
                {/* <button className="action-button">How to Apply</button>
                <button className="action-button">Visit Campus</button>
                <button className="action-button">Learn More</button> */}
                <a
                  href="https://dhalahore.edu.pk/kindergarten/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button"
                >
                  How to Apply
                </a>
                <a
                  href="https://dhalahore.edu.pk/dha-cambridge-campus-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button"
                >
                  Admission
                </a>
                <a
                  href="https://dhalahore.edu.pk/dha-cambridge-campus-2/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="action-button"
                >
                  Career
                </a>
              </div>
            </div>
          </div>

          {/* News and Events Container */}

          <div className="custom-events-container">
            <div className="news-container-2">
              <div className="news-events-container">
                <h2 className="news-events-title">News and Events</h2>
                <div className="news-event-item">
                  <h3>Event 1</h3>
                  <p>Date: June 10, 2024</p>
                  <p>Description: Details about the event.</p>
                </div>
                <div className="news-event-item">
                  <h3>Event 2</h3>
                  <p>Date: June 10, 2024</p>
                  <p>Description: Details about the event.</p>
                </div>
                <div className="news-event-item">
                  <h3>Event 3</h3>
                  <p>Date: June 10, 2024</p>
                  <p>Description: Details about the event.</p>
                </div>
              </div>
              <div className="news-events-container">
                <h2 className="news-events-title">News</h2>
                <div className="news-event-item">
                  <p>Description: Details about the event.</p>
                </div>
                <div className="news-event-item">
                  <h3>Event 2</h3>
                  <p>Date: June 10, 2024</p>
                  <p>Description: Details about the News.</p>
                </div>
                <div className="news-event-item">
                  <h3>Event 3</h3>
                  <p>Date: June 10, 2024</p>
                  <p>Description: Details about the News.</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Co-Curricular Activities Section */}
        <div className="co-curricular-container">
          <h2 className="section-title">Co-Curricular Activities</h2>
          <div className="activities-grid">
            <div className="activity-item">
              <img src={ccimg2} alt="Defence Day" />
              <p className="activity-date">06 Sep 2022</p>
              <p className="activity-title">Defence Day</p>
            </div>
            <div className="activity-item">
              <img src={ccimg3} alt="Explore the School Day" />
              <p className="activity-date">11 Apr 2022</p>
              <p className="activity-title">Explore the School Day</p>
            </div>
            <div className="activity-item">
              <img src={ccimg4} alt="Independence Day" />
              <p className="activity-date">14 Aug 2022</p>
              <p className="activity-title">Independence Day</p>
            </div>
          </div>
        </div>

        {/* HIstory */}

        <div className="History-section">
          <h2 className="History-section-title">History</h2>
          <div className="History-display">
            <p className="History-p">
              Established in 1993, the prime responsibility of DHAES is to
              provide quality education at an affordable fee structure to the
              students of DHA and its suburban areas. Initially starting with
              two schools, it now boasts of nine institutions; two Colleges,
              five Schools and two A’ Level Campuses. For over two decades, it
              continues to offer holistic, quality education to children from a
              large and diverse group of varying socio-economic backgrounds.
              DHAES has a team of dedicated faculty led by well qualified and
              experienced educationists. Besides, offering a broad range of
              curriculum, the System resolves to make education more accessible
              to broad strata of community.
            </p>
            <img
              src={himg}
              alt="History-display"
              className="history-profile-image"
            ></img>
          </div>
        </div>

        {/* Vision Section */}

        <div className="Vision-mission-container">
          <div className="Vision-cont">
            <h2>Vision</h2>
            <p>
              To build well-rounded, upright & refined personalities with
              ability to contribute positively to their society & human race by
              being imbued with balanced, egalitarian & progressive outlook
              towards life.
            </p>
          </div>
          <div className="Mission-cont">
            <h2>Mission</h2>
            <p>
              To provide sound instruction, promote personal development &
              inculcate cultural refinement in an environment that fosters
              mutual respect & shared growth.
            </p>
          </div>
        </div>

        {/* Map Section */}
        <div className="review-section">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d54448.67797222222!2d74.32401180267334!3d31.4680205302885!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3919061aeaa1f5d1%3A0xbf08301428762a22!2sDHA%20KINDERGARTEN!5e0!3m2!1sen!2s!4v1717875333971!5m2!1sen!2s"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Review Section */}
        <div className="review-section">
          <h2 className="review-title">Reviews ★★★★☆ 340 reviews</h2>
          <div className="review-summary">
            <div className="rating-bar">
              <span className="rating-label">★★★★★ Excellent</span>
              <span className="rating-count">195</span>
            </div>
            <div className="rating-bar">
              <span className="rating-label">★★★★☆ Very Good</span>
              <span className="rating-count">84</span>
            </div>
            <div className="rating-bar">
              <span className="rating-label">★★★☆☆ Average</span>
              <span className="rating-count">52</span>
            </div>
            <div className="rating-bar">
              <span className="rating-label">★★☆☆☆ Poor</span>
              <span className="rating-count">3</span>
            </div>
            <div className="rating-bar">
              <span className="rating-label">★☆☆☆☆ Terrible</span>
              <span className="rating-count">6</span>
            </div>
          </div>

          <div className="reviews">
            <div className="review-item">
              <span className="review-rating">★★★★★</span>
              <p className="review-text">
                It's of the best schools for early years...Qualified & well
                trained faculty with beautiful purpose built campus & AC
                inverters installed in every class ..and it has affordable fee
                structure with compatible education standards. Highly
                recommended
              </p>
              <span className="review-author">Other • 22 days ago</span>
              <a href="#" className="review-link">
                Report
              </a>
            </div>

            <div className="review-item">
              <span className="review-rating">★★★★★</span>
              <p className="review-text">
                The best thing about DHA kindergarten is seeing the progress
                that each child makes throughout the year. It's amazing to see
                how much they learn and grow, both academically and socially. It
                provides experiences for children to grow and develop through
                play and interaction. It also allows children to become
                confident learners in a safe and supported environment.
              </p>
              <span className="review-author">Parent • 25 days ago</span>
              <a href="#" className="review-link"> Report </a>
            </div>   
          </div>
            <button className="btn review-button">Give Review</button>
          {/* <a className="read-more">
            Read More Reviews
          </a> */}
        </div>

        <div className="add-to-list">
          <a className="action-button"> Add to WishList </a>
        </div>
      </div>
    </div>
    <Footer />
  </>
  );
};

export default Profile;
