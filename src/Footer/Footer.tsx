import {
  FACEBOOK_ICON,
  INSTAGRAM_ICON,
  TWITTER_ICON,
  YOUTUBE_ICON,
} from "./Icon";
import "./Footer.css";
import React from "react";

function Footer() {
  return (
    <footer className="Footer">
      <div className="Footer-items">
        <span className="Footer-copyright">©codeit - 2023</span>
        <div className="Footer-links">
          <a className="Footer-link" href="">
            Privacy Policy
          </a>
          <a className="Footer-link" href="">
            FAQ
          </a>
        </div>
        <div className="Footer-sns">
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={FACEBOOK_ICON}
              alt="facebook 홈페이지로 연결된 facebook 로고"
            />
          </a>
          <a
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={TWITTER_ICON}
              alt="twitter 홈페이지로 연결된 twitter 로고"
            />
          </a>
          <a
            href="https://www.youtube.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={YOUTUBE_ICON}
              alt="youtube 홈페이지로 연결된 youtube 로고"
            />
          </a>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={INSTAGRAM_ICON}
              alt="instagram 홈페이지로 연결된 instagram 로고"
            />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
