const WorkHistory = () => {
  return (
    <section className="flex flex-col my-3">
      <div className="border-b-4 border-black my-2">
        <h2 className="font-bold text-xl my-3">Work History</h2>
      </div>
      <div className="border-l-2 my-3">
        <div className="m-3">
          <strong>Monitoring Specialist | Bank of Lithuania</strong>
          <p>2022/02 - Present</p>
          <p>
            Constant monitoring of key bank systems, informing of problems
            and/or problem solving
          </p>
          <ul className="ml-5 list-disc">
            <li>Monitoring with tools like "SolarWinds", "Kibana"</li>
            <li>Daily logs inspection</li>
            <li>Improving ecosystem of an alerting system</li>
            <li>Solving incidents</li>
          </ul>
        </div>
      </div>
      <div className="border-l-2 my-3">
        <div className="m-3">
          <strong>
            Workplace Specialist | Geological Service of Lithuania
          </strong>
          <p>2020/11 - 2021/6</p>
          <p>Solving low level daily problems in a workplace</p>
          <ul className="ml-5 list-disc">
            <li>Preparing workplace station for new employees</li>
            <li>
              Solving everyday problems like software, network, hardware errors
            </li>
            <li>Daily inventory tasks like its reneval</li>
            <li>Simple maintenance of hardware like printers, computers</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
export default WorkHistory;
