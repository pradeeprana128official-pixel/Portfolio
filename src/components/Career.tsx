import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Software Engineer — Fullstack</h4>
                <h5>Dell R&D, Bangalore</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Architecting agentic AI systems for Dell's OpenManage ecosystem: a
              spec-driven framework of 28 specialised agents spanning spec
              authoring, epic and story decomposition, code generation, automated
              review and security scanning. Also shipped an AI OME assistant that
              resolves user queries by invoking live REST APIs, Predictive Device
              Lifecycle Intelligence for remaining-lifespan forecasting, and an
              autonomous defect resolver wired into Jira, Git and running
              appliances.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Enterprise Platform Engineering</h4>
                <h5>OpenManage Enterprise · Power Manager · Phoenix</h5>
              </div>
              <h3>2022–NOW</h3>
            </div>
            <p>
              Shipped REST APIs serving 5,000+ concurrent users, added 80+ aBVT
              test cases to standardise API validation, and indexed 100,000+ lines
              of source for AI code assistance. Designed PostgreSQL schemas,
              functions and stored procedures for the Power Manager Plugin, ran
              the SQLite schema behind Volume Binding Service at 99.9% uptime,
              and built reactive Angular interfaces with RxJS, Signals and strict
              i18n on the Phoenix project.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>M.Tech — Computer Science</h4>
                <h5>IIT (ISM) Dhanbad</h5>
              </div>
              <h3>2020–22</h3>
            </div>
            <p>
              Published "Fog Computing for Next-Generation Internet of Things",
              covering IoT architectures, open challenges and future trends.
              Entered the programme with a top 1 percentile GATE rank.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>B.Tech — Computer Science</h4>
                <h5>GBPIET Pauri Garhwal</h5>
              </div>
              <h3>2016–20</h3>
            </div>
            <p>
              Built the foundations — algorithms, data structures, operating
              systems, databases and C/C++ systems programming — that the backend
              and platform work still runs on today.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
