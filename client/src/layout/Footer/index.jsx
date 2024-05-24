import "../Footer/index.scss";
import { Helmet } from "react-helmet";
import { AiFillTwitterCircle } from "react-icons/ai";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaTelegramPlane } from "react-icons/fa";
import {Link} from "react-router-dom"

const Footer = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Footer</title>
      </Helmet>

      <div className="footer">
        <div className="container">
          <footer id="footer">
            <div className="tasty">
              <h3>Tasty</h3>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts.
              </p>
              <div className="social">
                <AiFillTwitterCircle style={{ fontSize: "30px" }} />
                <FaFacebook style={{ fontSize: "30px" }} />
                <FaSquareInstagram style={{ fontSize: "30px" }} />
              </div>
            </div>

            <div className="opening">
              <h3>Opening Hours</h3>
              <p>
                Monday: 08: - 22:00 Tuesday: 08: - 22:00 Wednesday: 08: - 22:00
                Thursday: 08: - 22:00 Friday: 08: - 22:00 Saturday: 08: - 22:00
                Sunday: 08: - 22:00
              </p>
            </div>

            <div className="contact">
              <h3>Contact Information</h3>
              <p>
                198 West 21th Street, Suite 721 New York NY 10016 + 1235 2355 98
                <Link>info@yoursite.com</Link> <Link>email@email.com</Link>
              </p>
            </div>
            <div className="letter">

              <p>Far far away, behind the word mountains, far from the countries.</p>
              <input  type="text"placeholder="Subscribe" style={{padding:"0.5rem", backgroundColor:"transparent", color:"white"}}  />
              <FaTelegramPlane style={{ fontSize: "25px", cursor:"pointer" }} />

            </div>


          </footer>
          <div className="textCopy">
            <p>
          Copyright ©2024 All rights reserved | This template is made with  by Colorlib

            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
