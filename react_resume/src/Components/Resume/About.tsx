import profile_picture from "../../assets/Images/Aušrys MikoliūnasE.jpg";
const About = () => {
  return (
    <section className="flex flex-col my-3">
      <img
        className="rounded-full w-[240px] object-cover mx-auto mb-5 justify-self-center"
        src={profile_picture}
        alt=""
      />
      <div>
        <h1 className="text-4xl my-4">Aušrys Mikoliūnas</h1>
        <p className="leading-6 ml-3">
          Self-driven and detail-oriented mid-level full-stack Software Engineer
          with experience in backend development using Node.js and frontend
          using React.js. Experienced in building scalable services, managing
          data workflows, and contributing to CI/CD pipelines, deployment
          processes using Git. Solid problem-solving skills, attention to
          detail, and a hands-on approach to modern software development and
          best coding practices, delivering reliable and maintainable systems in
          production environments.
        </p>
      </div>
    </section>
  );
};
export default About;
