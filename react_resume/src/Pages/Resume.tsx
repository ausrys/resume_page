import About from "../Components/Resume/About";
import Education from "../Components/Resume/Education";
import Projects from "../Components/Resume/Projects";
import Skills from "../Components/Resume/Skills";
import Socials from "../Components/Resume/Socials";
import SoftSkills from "../Components/Resume/SoftSkills";
import WorkHistory from "../Components/Resume/WorkHistory";
const Resume = () => {
  return (
    <div className="max-w-[700px] mx-auto flex flex-col">
      <About />
      <Socials />
      <Education />
      <Skills />
      <SoftSkills />
      <WorkHistory />
      <Projects />
    </div>
  );
};
export default Resume;
