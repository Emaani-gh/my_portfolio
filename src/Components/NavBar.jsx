import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { useEffect, useState } from "react";

export const NavBar = () => {
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
    <nav>
      <div className={isTabletOrLarger ? "container" : "ocp"}>
        <div className="navCon">
          <div className="logo">
            <h3 className="heading-md">SEIDU</h3>
          </div>
          <div className="socials">
            <a href="#">
              {" "}
              <FaGithub />
            </a>
            <a href="#">
              {" "}
              <FaLinkedin />
            </a>
            <a href="#">
              {" "}
              <FaTwitter />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
