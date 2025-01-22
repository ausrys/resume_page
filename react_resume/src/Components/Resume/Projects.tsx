const Projects = () => {
  return (
    <section className="flex flex-col my-3">
      <div className="border-b-4 border-black my-2">
        <h2 className="font-bold text-xl my-3">Projects</h2>
      </div>
      <div className="my-5 p-3 border-2 flex flex-col">
        <span className="mb-3">
          I have built a landing page from a given Figma example with{" "}
          <b>CSS3</b> and <b>HTML5</b>. It ran on a simple
          <b> Laravel</b> back-end, which accepted requests and had mail
          service.
        </span>
        <span>Check it here:</span>

        <a
          className="text-light-blue w-fit mb-1"
          href="https://github.com/ausrys/front-end_project"
          target="_blank"
        >
          Front-end project github
        </a>
        <a
          className="text-light-blue w-fit mb-1"
          href="frontPrev.html"
          target="_blank"
        >
          Front-end project preview
        </a>
      </div>
      <div className="my-5 p-3 border-2 flex flex-col">
        <span>
          Calorie counter project with <b>React TS</b> and
          <b> Node.js Express</b>
        </span>
        <p className="my-3">
          Calorie counter is an app where a person can create, track and edit
          their meals, see statistics about nutrition values. In this project I
          wanted to show what I learned in <b>React</b> and to build something
          usefull with the knowledge I gained. The app runs on
          <b> Node.js Express</b> back-end and <b> MySQL</b> database.
        </p>
        <a
          className="text-light-blue w-fit mb-1"
          href="https://github.com/ausrys/colorie_counter"
          target="_blank"
        >
          Project preview on github
        </a>
        <a
          className="text-light-blue w-fit mb-1"
          href="https://colorie-counter.vercel.app/"
          target="”_blank”"
        >
          Check the project live
        </a>
      </div>
      <div className="my-5 p-3 border-2 flex flex-col">
        <span>
          University Master's project in <b>Pyhon</b>{" "}
        </span>
        <p className="my-3">
          Machine learning algorithms trained on Lithuanian dataset to predict
          if a sentence is threatening or not. The classifier that achieved the
          best results integrated into a simple API, which takes in a sentence
          and returns prediction. In this project I wanted to show the prototype
          of my Master's work results, more about the work can be read on
          github.
        </p>
        <a
          className="text-light-blue w-fit mb-1"
          href="https://github.com/ausrys/magistras"
          target="_blank"
        >
          Project preview on github
        </a>
        <a
          className="text-light-blue w-fit mb-1"
          href="https://threats-in-lt-detection.onrender.com"
          target="”_blank”"
        >
          Check the project live
        </a>
      </div>
      <div className="my-5 p-3 border-2 flex flex-col">
        <span>
          Instagram followers counter with <b>Node.js</b>{" "}
        </span>
        <p className="my-3">
          Simple and small program to find out who follows you back on the
          Instagram. This app sends a request to get all the followers of an
          user and compare them to the list of what the user is following. Then
          it returns the names of the people who doesn't follow back the user
          and logs them in the console.
        </p>
        <a
          className="text-light-blue w-fit mb-1"
          href="https://github.com/ausrys/insta_followers_counter"
          target="_blank"
        >
          Code on github
        </a>
      </div>
      <div className="my-5 p-3 border-2 flex flex-col">
        <span>
          Aušrys Mikoliūnas digital resume made with <b>React</b> and{" "}
          <b>Tailwindcss</b>
        </span>
        <p className="my-3">My current digital resume.</p>
        <a
          className="text-light-blue w-fit mb-1"
          href="https://github.com/ausrys/resume_page"
          target="_blank"
        >
          Resume preview on github
        </a>
      </div>
    </section>
  );
};
export default Projects;
