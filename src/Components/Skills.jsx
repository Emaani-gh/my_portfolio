import { useEffect, useState } from "react";
import { ProficiencyIndicator } from "./ProficiencyIndicator";

const Skills = () => {
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
    <section id="skills" className="section-space">
      <div className={isTabletOrLarger ? "container" : "ocp"}>
        <div>
          <h4 className="heading-md">Skills</h4>
        </div>

        <div className="section-content">
          <div className="skill">
            <h4 className="card-title">HTML</h4>
            <div className="card-content">
              <ProficiencyIndicator level={4} />
            </div>
          </div>

          <div className="skill">
            <h4 className="card-title">CSS</h4>
            <div className="card-content">
              <ProficiencyIndicator level={4} />
            </div>
          </div>

          <div className="skill">
            <h4 className="card-title">Javascript</h4>
            <div className="card-content">
              <ProficiencyIndicator level={4} />
            </div>
          </div>

          <div className="skill">
            <h4 className="card-title">PHP</h4>
            <div className="card-content">
              <ProficiencyIndicator level={3} />
            </div>
          </div>

          <div className="skill">
            <h4 className="card-title">React</h4>
            <div className="card-content">
              <ProficiencyIndicator level={3} />
            </div>
          </div>

          <div className="skill">
            <h4 className="card-title">bootstrap</h4>
            <div className="card-content">
              <ProficiencyIndicator level={4} />
            </div>
          </div>

          <div className="skill">
            <h4 className="card-title">NodeJs</h4>
            <div className="card-content">
              <ProficiencyIndicator level={3} />
            </div>
          </div>

          <div className="skill">
            <h4 className="card-title">Express Js</h4>
            <div className="card-content">
              <ProficiencyIndicator level={3} />
            </div>
          </div>

          <div className="skill">
            <h4 className="card-title">Next Js</h4>
            <div className="card-content">
              <ProficiencyIndicator level={3} />
            </div>
          </div>

          <div className="skill">
            <h4 className="card-title">Tailwind</h4>
            <div className="card-content">
              <ProficiencyIndicator level={3} />
            </div>
          </div>

          <div className="skill">
            <h4 className="card-title">MongoDB</h4>
            <div className="card-content">
              <ProficiencyIndicator level={3} />
            </div>
          </div>

          <div className="skill">
            <h4 className="card-title">MySQL</h4>
            <div className="card-content">
              <ProficiencyIndicator level={4} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
