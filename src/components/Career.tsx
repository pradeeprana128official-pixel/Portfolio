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
              Building enterprise Angular frontends (Phoenix Project) with
              RxJS Signals and i18n. Leading AI-powered defect resolution
              workflows with Jira and Devin AI for Dell's OpenManage
              Enterprise ecosystem.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Software Engineer 2</h4>
                <h5>Dell R&D, Bangalore</h5>
              </div>
              <h3>2022–24</h3>
            </div>
            <p>
              Implemented REST APIs supporting 5,000+ concurrent users for OME.
              Designed PostgreSQL schemas and stored procedures for Power Manager
              Plugin. Built microservices with GO, Docker, and Kubernetes for
              CMO platform. Managed SQLite database for Volume Binding Service
              with 99.9% uptime.
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
              Published research on Fog Computing for Next-Generation IoT
              (ScienceDirect). Ranked top 1 percentile in GATE. Top 10 on
              GeeksforGeeks out of 2,600 students.
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
              Built a web-based Faculty Assessment System with team of 4 —
              Admin, Student, and Faculty dashboards. Strong foundation in
              algorithms, data structures, and systems programming.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
