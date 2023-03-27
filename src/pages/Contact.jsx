import {
  SlSocialTwitter,
  SlSocialFacebook,
  SlSocialInstagram,
} from "react-icons/sl";

export default function Contact() {
  return (
    <div className="contact">
      <div className="container">
        <h1 className="page-title">Contact Us</h1>
        <p className="page-desc">
          We love to hear from you on our customer service, merchandise, website
          or any topics you want to share with us
        </p>
        <div className="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d12080.49706390888!2d-73.958802!3d40.803263!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ4JzIwLjIiTiA3M8KwNTcnNTUuNiJX!5e0!3m2!1sen!2siq!4v1679875221133!5m2!1sen!2siq"
            width="100%"
            height="450"
            style={{ border: "none" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="map"
          />
        </div>
        <div className="contact-info">
          <div className="row">
            <div className="column">
              <h3 className="row-title">Contact Information</h3>
            </div>
            <div className="column">
              <div className="box">
                <h3 className="box-title">New York</h3>
                <h4>Store 1</h4>
                <p>
                  68 Atlantic Ave St, Brooklyn, NY 90002,
                  <br />
                  USA (+005) 5896 72 78 79
                  <br />
                  hellony@durotan.com.us
                </p>
                <h4>Store 2</h4>
                <p>
                  172 Richmond Hill Ave St, Stamford, NY 90002, USA <br />
                  (+005) 5896 03 04 05
                </p>
                <div className="box social">
                  <h3 className="box-title">Social</h3>
                  <ul>
                    <li>
                      <a
                        href="https://twitter.com/"
                        target="_blank"
                        rel="noreferrer">
                        <SlSocialTwitter />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.facebook.com/"
                        target="_blank"
                        rel="noreferrer">
                        <SlSocialFacebook />
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noreferrer">
                        <SlSocialInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="column">
              <div className="box">
                <h3 className="box-title">London</h3>
                <p>
                  88 Landsome Way St, Stockwell, London 534,
                  <br />
                  UK (+089) 5896 26 26 27
                  <br />
                  hellold@durotan.com.uk
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="send-message">
          <div className="row">
            <div className="column">
              <h3 className="row-title">Drop Us A Line</h3>
            </div>
            <div className="column">
              <form>
                <input type="text" placeholder="Name" required />
                <textarea
                  required
                  placeholder="Write your question here"
                  className="form-group__textarea js-ask-question-body"
                  rows="5"
                />
                <div className="row">
                  <input type="text" placeholder="Phone" required />
                  <input type="email" placeholder="Your E-mail" required />
                </div>
                <div className="submit-button">
                  <button type="submit">Send Message</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
