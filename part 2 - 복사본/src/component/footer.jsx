import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="footer-wrap">
        <div className="footer-element">
          <div className="footer-text" id="codeit-2023">
            ©codeit - 2023
          </div>
          <div className="footer-text" id="faq">
            <a href="privacy.html">
              <div>Privacy Policy</div>
            </a>
            <a href="fap.html">
              <div>FAQ</div>
            </a>
          </div>
          <div className="footer-icon">
            <a href="https://www.facebook.com" target="_blank">
              <img src="img/akar-icons_facebook-fill.png" />
            </a>
            <a href="https://twitter.com" target="_blank">
              <img src="img/akar-icons_twitter-fill.png" />
            </a>
            <a href="https://www.youtube.com" target="_blank">
              <img src="img/akar-icons_youtube-fill.png" />
            </a>
            <a href="https://www.instagram.com" target="_blank">
              <img src="img/ant-design_instagram-filled.png" />
            </a>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
