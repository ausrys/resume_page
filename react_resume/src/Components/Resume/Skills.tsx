const Skills = () => {
  return (
    <section className="flex flex-col my-3">
      <div className="border-b-4 border-black my-2">
        <h2 className="font-bold text-xl my-3">Tech Stack</h2>
      </div>
      <div>
        <div className="py-1 px-2">
          <div className="border-b-2 pb-2">
            <h3 className="text-xl my-2">Back-end:</h3>
            <ul className="ml-5 list-disc">
              <li className="my-1">
                <strong>Node.js </strong> - <span>(junior level). Express</span>
              </li>
              <li className="my-1">
                <strong>PHP</strong> - <span>(basics). Laravel</span>
              </li>
              <li className="my-1">
                <strong>Technologies</strong> -
                <span>
                  JSONwebtokens, sessions, cookies, cors, cron jobs, RESTAPI,
                  luxon.
                </span>
              </li>
            </ul>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="text-xl my-2">Front-end:</h3>
            <ul className="ml-5 list-disc">
              <li className="my-1">
                <strong>JavaScript</strong> -
                <span>(junior level). React, TypeScript</span>
              </li>
              <li className="my-1">
                <strong>HTML5</strong> - <span>(junior level)</span>
              </li>
              <li className="my-1">
                <strong>CSS3</strong> - <span>(junior level)</span>
              </li>
              <li className="my-1">
                <strong>Technologies</strong> -
                <span>
                  TailwindCSS, react-icons, axios, formik, yup, react-hook-form,
                  zod, redux, react router, react query.
                </span>
              </li>
            </ul>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="text-xl my-2">Databases:</h3>
            <ul className="ml-5 list-disc">
              <li className="my-1">
                <strong>MySQL</strong> -<span> (basics). Sequelize</span>
              </li>
            </ul>
          </div>
          <div className="border-b-2 pb-2">
            <h3 className="text-xl my-2">Other technologies:</h3>
            <span className="ml-3">Git, Postman, Chrome developer tools</span>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
