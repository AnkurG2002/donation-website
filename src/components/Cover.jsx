import "../styles/Cover.css";
import { Link } from "react-router-dom";

const Hero = ({ imageSrc }) => {
  return (
    <div className="hero">
      <img src={imageSrc} alt="Travel" className="hero__image" />
      <div className="btn-container">
        <Link to={"/donate"} className="button-35" role="button">
          Donate
        </Link>
      </div>
      <h1 className="navbar__logo">Little Hearts Foundation</h1>
      <h1 className="hero__title">Save a Child.</h1>
    </div>
  );
};

export default Hero;
