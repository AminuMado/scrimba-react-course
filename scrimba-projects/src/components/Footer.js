import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  return (
    <div className='footer--icons-container'>
      <FontAwesomeIcon icon={faTwitter} className='logo' />
      <FontAwesomeIcon icon={faFacebook} className='logo' />
      <FontAwesomeIcon icon={faInstagram} className='logo' />
      <FontAwesomeIcon icon={faGithub} className='logo' />
    </div>
  );
}

export default Footer;
