import react from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import profile_src from "../profile.png";

function Info() {
  const profile = profile_src;

  return (
    <div>
      <div className='info--profile-photo-container'>
        <img src={profile}></img>
      </div>
      <p className='info--name'>Aminu Mukhtar Mado</p>
      <p className='info--title'>FrontEnd Developer</p>
      <p className='info--website'>madoaminu.website</p>
      <div className='info--button-container'>
        <button className='info--button-email'>
          <FontAwesomeIcon icon={faEnvelope} />
          Email
        </button>
        <button className='info--button-linkedIn'>
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </button>
      </div>
    </div>
  );
}

export default Info;
