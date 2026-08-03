import "./styles/About.css";

const About = () => {
  return (
    <div className="about-section" id="about">
      <div className="about-me">
        <h3 className="title">About Me</h3>
        <p className="para">
          Senior Fullstack Software Engineer with a Master's in Computer Science
          from IIT (ISM) Dhanbad and 4+ years at Dell R&D, Bangalore. I build
          scalable REST APIs, microservices and reactive Angular frontends for
          Dell's OpenManage ecosystem across Java, GO, Python, PL/SQL and
          TypeScript, backed by Docker, Kubernetes and PostgreSQL. Lately my
          focus is agentic AI: a 28-agent spec-driven development framework, an
          OME assistant now shipping to customers, predictive device lifecycle
          analytics, and an autonomous defect resolver that patches and
          redeploys live appliances end to end.
        </p>
      </div>
    </div>
  );
};

export default About;
