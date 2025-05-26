import { useEffect, useState } from "react";
import myImage from "../assets/img/seidu.png";

export const Hero = () => {
  const [isTabletOrLarger, setIsTabletOrLarger] = useState(
    window.innerWidth >= 768
  );

  useEffect(() => {
    const handleResize = () => {
      setIsTabletOrLarger(window.innerWidth >= 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <section id="hero" className="">
      <div className={isTabletOrLarger ? "container" : "ocp"}>
        <div className="heroDiv">
          <div className="profile-pic-div">
            <img src={myImage} alt="my pic" />
          </div>
          <div className="hero-content">
            <h4 className="heading-md">
              Nice to Meet you!, I'm{" "}
              <span className="underline">Seidu A. Salam.</span>
            </h4>
            <p>
              I'm a web developer passionate about building accessible web apps
              taht users love.
            </p>
            <a href="#" className="cta underline">
              Contact Me
            </a>
          </div>
        </div>
        <div className="section-border"></div>
      </div>
    </section>
  );
};
