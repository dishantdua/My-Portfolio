import { ContactUs } from "../../hooks/emialtrap";
export default function ContactLayout() {
  return (
    <section className="contact container" id="contact">
      <div className="wrapper">
        <div className="title" data-aos="zoom-in" data-aos-duration="1000">
          <h3>Contact</h3>
        </div>
        <div className="form" data-aos="fade-up" data-aos-duration="1000">
          <div className="box">
            <div className="sub-box">

              {/* Address */}
              <div className="add">
                <span className="icon">
                  <i className="fa-solid fa-location-dot"></i>
                </span>
                <h3>Address</h3>
                <p>Lives in Bangalore<br /> Originally from Punjab</p>
              </div>

              {/* Phone */}
              <div className="add">
                <span className="icon">
                  <i className="fa-solid fa-phone"></i>
                </span>
                <h3>Call Me</h3>
                <p>+91-6239575416</p>
              </div>

              {/* Emails */}
              <div className="add">
                <span className="icon">
                  <i className="fa-solid fa-envelope"></i>
                </span>
                <h3>Email</h3>
                <p>dishantdua44@gmail.com<br />dishant3211@gmail.com</p>
              </div>

              {/* Availability */}
              <div className="add">
                <span className="icon">
                  <i className="fa-regular fa-clock"></i>
                </span>
                <h3>Available</h3>
                <p>Monday–Saturday<br /></p>
              </div>

            </div>
          </div>

          {/* Contact Form */}
          <div className="box">
            <div className="formBox">
              <ContactUs />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}