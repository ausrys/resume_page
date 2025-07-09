const WorkHistory = () => {
  return (
    <section className="flex flex-col my-3">
      <div className="border-b-4 border-black my-2">
        <h2 className="font-bold text-xl my-3">Work History</h2>
      </div>
      <div className="border-l-2 my-3">
        <div className="m-3">
          <strong>
            Software Engineer Orion| Innovation | 2025/04 – Present
          </strong>
          <ul className="ml-5 list-disc">
            <li className="mb-2">
              Developed and maintained Python and Node.js applications.
              Contributed to creating REST APIS, authentication, error handling,
              testing
            </li>
            <li className="mb-2">
              Wrote clean, maintainable Python and JavaScript code using global
              standards
            </li>
            <li className="mb-2">
              Contributed to the frontend applications using React.js and
              TypeScript. This included reusable components, state management
              (Redux), react hooks, API integration (data fetching), routing
              (react router), Tailwind CSS for styling
            </li>
          </ul>
        </div>
      </div>
      <div className="border-l-2 my-3">
        <div className="m-3">
          <strong>
            Monitoring Specialist | Bank of Lithuania | 2022/02 - 2025/04
          </strong>
          <ul className="ml-5 list-disc">
            <li className="mb-2">
              Monitoring with tools like "SolarWinds", “Prometheus”
            </li>
            <li className="mb-2">
              Developed custom small application using Node.js and minimalistic
              frontend using React, which enhanced monitoring experience for
              monitoring team
            </li>
            <li className="mb-2">Improving ecosystem of an alerting system</li>
            <li className="mb-2">Solving incidents</li>
            <li className="mb-2">
              Created minimal python scripts for automated data manipulation
            </li>
          </ul>
        </div>
      </div>
      <div className="border-l-2 my-3">
        <div className="m-3">
          <strong>
            Workplace Specialist | Geological Service of Lithuania | 2020/11 -
            2021/6
          </strong>
          <ul className="ml-5 list-disc">
            <li className="mb-2">
              Preparing workplace station for new employees
            </li>
            <li className="mb-2">
              Solving everyday problems like software, network, hardware errors
            </li>
            <li className="mb-2">Daily inventory tasks like its reneval</li>
            <li className="mb-2">
              Simple maintenance of hardware like printers, computers
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default WorkHistory;
