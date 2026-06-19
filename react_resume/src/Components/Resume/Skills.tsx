const Skills = () => {
  return (
    <section className="flex flex-col my-3">
      <div className="border-b-4 border-black my-2">
        <h2 className="font-bold text-xl my-3">Top skills</h2>
      </div>
      <div>
        <div className="py-1 px-2">
          <div className="border-b-2 pb-2">
            <h3 className="text-xl my-2 font-bold">Backend development:</h3>
            <span>
              Node.js, Express for services, REST API creation, scripting,
              messages handling, scrapping and automation for system tasks and
              integrations
            </span>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="text-xl my-2 font-bold">API integration:</h3>
            <span>
              JWT, sessions, cookies, CORS, and third-party RESTful API
              consumption
            </span>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="text-xl my-2 font-bold">Frontend Technologies:</h3>
            <span>
              React, TypeScript, JavaScript, Taiwind CSS, Redux, React Router
            </span>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="text-xl my-2 font-bold">Database Managemen:</h3>
            <span>
              MySQL, SQLite, Postgres, data modeling and querying for
              applications
            </span>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="text-xl my-2 font-bold">Testing & Debugging:</h3>
            <span>
              Postman, Chrome DevTools, writing and running test cases
            </span>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="text-xl my-2 font-bold">Monitoring & Logging:</h3>
            <span>
              Kibana, SolarWinds, Grafana, log inspection, alert optimization,
              and basic incident response handling
            </span>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="text-xl my-2 font-bold">Version Control & Tools:</h3>
            <span>
              Git, GitHub, GitLab, Docker, and continuous integration/delivery
              workflows (Github Workflows)
            </span>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="text-xl my-2 font-bold">DevOps:</h3>
            <span>Docker, AWS, Terraform</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
