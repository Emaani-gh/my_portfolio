import { useEffect, useState } from "react";
const About = () => {
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
    <section id="about" className="section-space">
      <div className={isTabletOrLarger ? "container" : "ocp"}>
        <div>
          <h4 className="heading-md">About</h4>
        </div>

        <div className="section-content">
          <p>
            My name is Seidu, popularly known as Emaani. I am a Full Stack
            developer with passion for creating new things. I love to learn new
            skills and technology and also enjoy football. I like to undertake
            professional challenges that utilizes interpersonal skills,time
            management and problem-solving skills and i chose the path of an
            application developer
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
