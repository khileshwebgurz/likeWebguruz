const sections = [
  {
    title: "Design Tools",
    items: [
      "Adobe XD",
      "Figma",
      "Sketch",
      "Invision",
      "Illustrator",
      "Photoshop",
      "After Effects",
    ],
  },
  {
    title: "Frontend Frameworks",
    items: [
      "React.js",
      "Angular",
      "Docker",
      "Blockchain",
      "Ruby on Rails",
      "Arduino",
    ],
  },
  {
    title: "Mobile Technologies",
    items: [
      "React Native",
      "Flutter",
      "Swift",
      "Kotlin",
      "Java",
      "Objective C",
    ],
  },
  {
    title: "Backend/Server-side",
    items: ["Node.js", "PHP", ".NET", "Mongo", "Redis", "LAMP"],
  },
];

const TechnologySection = ({ title, items }) => (
  <div className="col-12 col-sm-6 col-lg-3 design-heading">
    <h3>{title}</h3>
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

const AgileTech = () => {
  return (
    <section className="technology-operate agile-tech py-5">
      <div className="container">
        <div className="row">
          <div className="col-12 heading-main text-center pb-4">
            <h2>
              <strong>Our nested feedback loop ensures your projects are dominated <br/> by change that benefits</strong>
            </h2>
            <p>In order to respond quickly to change, our process includes the following feedback loops. These feedback loops operate on different time scales to facilitate everything from tiny adjustments to wholesale changes in a project’s direction.</p>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 col-lg-3 design-heading">
            <h3>Design</h3>
            <ul>
              <li>
                Photoshop
              </li>
              <li>
                Illustrator{" "}
                
              </li>
              <li>
                Adobe XD
              </li>
              <li>
                After Effects{" "}
        
              </li>
              <li>
                Sketch
              </li>
              <li>
                Invision
              </li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 design-heading">
            <h3>Mobile</h3>
            <ul>
              <li>Kotlin</li>
              <li>Swift</li>
              <li>Java</li>
              <li>React Native</li>
              <li>Flutter</li>
              <li>Objective C</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 design-heading">
            <h3>Technologies</h3>
            <ul>
              <li>Docker</li>
              <li>Blockchain</li>
              <li>Ruby on Rails</li>
              <li>Arduino</li>
              <li>NLP</li>
              <li>Data Mining</li>
            </ul>
          </div>
          <div className="col-12 col-sm-6 col-lg-3 design-heading">
            <h3>Server Side</h3>
            <ul>
              <li>LAMP</li>
              <li>Node.js</li>
              <li>Mongo</li>
              <li>Redis</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgileTech;