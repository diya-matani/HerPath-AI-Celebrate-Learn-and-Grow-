import React from 'react';
import './Founder.css';
import 'bootstrap/dist/css/bootstrap.min.css';


// images
import founderPic from '../../images/founder_pic.png';
import linkedin from '../../images/linkedin.png';
import github from '../../images/github.png';
import youtube from '../../images/youtube.png';
import instagram from '../../images/instagram.png';

export default function Founder() {
  return (
    <div className="container founder">
      <h3 className="founder__heading" style={{ textAlign: 'center' }}>
        About the Founder
      </h3>
      <div className="row" style={{ marginTop: '15px', marginBottom: '15px' }}>
        <div className="col-lg-4 col-md-12">
          <img className="founder__pic" src={"https://github.com/diya-matani.png"} alt="card" />
        </div>
        <div className="col-lg-8 col-md-12">
          <p className="founder__text">
            Hi! I'm Diya Matani. I'm passionate about technology and empowering women in the field of Computer Science. Ever since I started coding, I knew I wanted to use computational methods to solve real-world problems. Apart from this, I strongly believe that it is my responsibility to give back to the community and that is why I have started this initiative. Hope you find it useful!
          </p>
          <div className="links">
            <a href="https://github.com/diya-matani">
              <img className="links__item" src={github} alt="github profile" />
            </a>
            <a href="https://www.instagram.com/">
              <img
                className="links__item"
                src={instagram}
                alt="instagram profile"
              />
            </a>
            <a href="https://www.linkedin.com/in/diya-matani/">
              <img
                className="links__item"
                src={linkedin}
                alt="linkedin profile"
              />
            </a>
            <a href="https://www.youtube.com/">
              <img
                className="links__item links__item--youtube"
                src={youtube}
                alt="youtube profile"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
