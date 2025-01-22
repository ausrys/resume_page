import { FaLinkedin, FaGithub } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
const Socials = () => {
  return (
    <section className="flex flex-col my-4">
      <div>
        <h2 className="font-bold text-lg mb-4 text-light-blue">
          Socials & Contacts
        </h2>
        <div className="flex flex-row my-1 ml-3">
          <FaLinkedin size="24px" />
          <a
            className="ml-4 text-light-blue "
            href="https://www.linkedin.com/in/au%C5%A1rys-mikoli%C5%ABnas-520b93214/"
            target="_blank"
          >
            Linkedin
          </a>
        </div>
        <div className="flex flex-row my-1 ml-3">
          <FaGithub size="24px" />
          <a
            className="ml-4 text-light-blue "
            href="https://github.com/ausrys"
            target="_blank"
          >
            Github
          </a>
        </div>

        <div className="flex flex-row my-1 ml-3">
          <SiGmail size="24px" />
          <p className="ml-4 text-light-blue">ausrys.mikoliunas@gmail.com</p>
        </div>
      </div>
    </section>
  );
};
export default Socials;
