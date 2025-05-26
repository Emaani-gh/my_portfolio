import { useEffect, useState } from "react";

const Projects = () => {
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
    <section id="projects" className="section-space">
      <div className={isTabletOrLarger ? "container" : "ocp"}>
        <div>
          <h4 className="heading-md">Projects</h4>
        </div>

        <div className="section-content"></div>
      </div>
    </section>
  );
};

export default Projects;
