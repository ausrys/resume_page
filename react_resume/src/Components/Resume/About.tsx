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
          Self-taught programmer is looking for a job in web development
          industry. My programming experience comes from various subjects of
          studies in university, Bachelor's project, Master's project,
          self-learning from open sources, making small projects. I specialize
          in back-end and front-end web development, mostly using Node.js and a
          little PHP for back-end. For front-end I can use JavaScript, CSS3,
          HTML5. I am highly motivated to start my career as a web developer and
          I am eager to expand my knowledge in real work environment by learning
          from experienced developers and offering my skills and knowledge in
          return. Be sure to check out my digital resume where some of my
          programming projects are introduced.
        </p>
      </div>
    </section>
  );
};
export default About;
