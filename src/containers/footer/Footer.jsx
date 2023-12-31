import './footer.css';
import logo from '../../assets/logo.svg';

const Footer = () => {
  return (
    <div className="gpt3__footer">
      <div className="gpt3__heading-container">
          <div className="gpt3__heading-container__title">
              <h1 className="gradient__text">Do you want to step in to the future before others</h1>
          </div>
          <div className="gpt3__heading-container__button">
              <button>Request Early Access</button>
          </div>
      </div>
      <div className="gpt3__links-container">
        <div className="gpt3__links-container__logobox">
            <img src={logo} alt="logo" />
            <p>Developed By Dhyan Rai Using React And CSS BEM Model </p>
        </div>
        <div className="gpt3__links-container__links">
          <h4 className='gradient__text'>Links</h4>
          <div className='gpt__aligner'>
          <a href="#">Library</a>
          <a href="#">Social Media</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          </div>
        </div>
        <div className="gpt3__links-container__company">
        <h4 className='gradient__text'>Company</h4>
        <div className='gpt__aligner'>
          <a href="#">Library</a>
          <a href="#">Social Media</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          </div>
        </div>
        <div className="gpt3__links-container__gtt">
        <h4 className='gradient__text'>Get In Touch</h4>
          <div className='gpt__aligner'>
          <a href="#">Library</a>
          <a href="#">Social Media</a>
          <a href="#">Blog</a>
          <a href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="gpt3__copyright">
        <p> © 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}
export default Footer