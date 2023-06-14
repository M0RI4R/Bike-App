import "./Footer.css";

function Footer() {
  return (
    <>
      <ul className="footer-container">
        <li>ROVER</li>
        <li>
          <ul>
            <h3>About</h3>
            <li>
              <a href="./">About</a>{" "}
            </li>
            <li>
              <a href="./">Features</a>{" "}
            </li>
            <li>
              <a href="./">Mobile</a>{" "}
            </li>
            <li>
              <a href="./">Subscription</a>{" "}
            </li>
            <li>
              <a href="./">Student Discount</a>{" "}
            </li>
            <li>
              <a href="./">Privacy Policy</a>{" "}
            </li>
            <li>
              <a href="./">Do Not Share My Personal Information</a>{" "}
            </li>
            <li>
              <a href="./">About Our Maps</a>{" "}
            </li>
          </ul>
        </li>
        <li>
          <ul>
            <h3>Explore</h3>
            <li>Routers</li>
            <li>Paris 2023 Marathon</li>
            <li>Boston 2023 Marathon</li>
            <li>London 2023 Marathon</li>
          </ul>
        </li>
        <li>
          <ul>
            <h3>Follow</h3>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Instagram</li>
            <li>YouTube</li>
            <li>LinkedIn</li>
            <li>Blog</li>
          </ul>
        </li>
        <li>
          <ul>
            <h3>Help</h3>
            <li>Strava Support</li>
          </ul>
        </li>
        <li>
          <ul>
            <h3>More</h3>
            <li>Careers</li>
            <li>Press</li>
            <li>Buisness</li>
            <li>Developers</li>
            <li>Labs</li>
            <li>Strava Community Standards</li>
          </ul>
        </li>
      </ul>
    </>
  );
}

export default Footer;
