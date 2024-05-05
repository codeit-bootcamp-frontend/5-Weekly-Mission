import React from "react";
import { Link } from "react-router-dom";
import FacebookLogo from './imgSrc/facebook_logo.svg'
import TwitterLogo from './imgSrc/twitter_logo.svg'
import YoutubeLogo from './imgSrc/youtube_logo.svg'
import InstagramLogo from './imgSrc/instagram_logo.svg'
import {FooterFrame, ContentsFrame, Codeit, Linkbox, Iconbox, StyledLink, FooterTemplate} from "./design"

export const Footer = function ({ ref }) {
	return (
	  <FooterTemplate ref={ref}>
		<FooterFrame>
		  <ContentsFrame>
			<Codeit>©codeit - 2023</Codeit>
			<Linkbox>
			  <StyledLink href="/"> Privacy Policy </StyledLink>
			  <StyledLink href="/"> FAQ </StyledLink>
			</Linkbox>
			<Iconbox>
			  <Link href="https://www.facebook.com/" target="_blank">
				<img src={FacebookLogo} alt="Facebook Logo linked to Facebook homepage"/>
			  </Link>
			  <Link href="https://twitter.com/?lang=ko" target="_blank">
				<img src={TwitterLogo} alt="Twitter Logo linked to Twitter homepage"/>
			  </Link>
			  <Link href="https://www.youtube.com/" target="_blank">
				<img src={YoutubeLogo} alt="Youtube Logo linked to Youtube homepage"/>
			  </Link>
			  <Link href="https://www.instagram.com/" target="_blank">
				<img src={InstagramLogo} alt="Instagram Logo linked to Instagram homepage"/>
			  </Link>
			</Iconbox>
		  </ContentsFrame>
		</FooterFrame>
	  </FooterTemplate>
	);
  };
