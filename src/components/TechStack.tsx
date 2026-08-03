import "./styles/TechStack.css";

type StackGroup = {
  title: string;
  items: string[];
};

const logos: Record<string, string> = {
  Java: "java.webp",
  Go: "go.webp",
  Python: "python.webp",
  TypeScript: "typescript.webp",
  JavaScript: "javascript.webp",
  Angular: "angular.webp",
  "Node.js": "node.webp",
  Docker: "docker.webp",
  Kubernetes: "kubernetes.webp",
  PostgreSQL: "postgresql.webp",
};

const groups: StackGroup[] = [
  {
    title: "Languages",
    items: [
      "Java",
      "Go",
      "Python",
      "TypeScript",
      "JavaScript",
      "PL/SQL",
      "C / C++",
      "HTML / CSS",
    ],
  },
  {
    title: "Frontend",
    items: [
      "Angular",
      "Angular Signals",
      "RxJS",
      "i18n",
      "Component Libraries",
      "Responsive UI",
    ],
  },
  {
    title: "Backend",
    items: ["REST APIs", "Microservices", "Spring Boot", "Node.js"],
  },
  {
    title: "DevOps & Quality",
    items: [
      "Docker",
      "Kubernetes",
      "Jenkins",
      "Git & GitHub",
      "Linux",
      "Robot Framework",
      "JUnit",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "SQLite", "Stored Procedures", "Schema Design"],
  },
  {
    title: "GenAI & Tooling",
    items: [
      "Devin AI",
      "Codeium",
      "Cursor AI",
      "Claude",
      "ChatGPT",
      "DeepSeek",
      "IntelliJ IDEA",
      "VS Code",
      "JIRA",
      "Confluence",
      "JProfiler",
    ],
  },
];

const coreStrengths = [
  "Team Leadership",
  "Strategic Planning",
  "Innovative Thinking",
  "Analytical Ability",
  "Cross-functional Collaboration",
  "Agile / Scrum",
];

const TechStack = () => {
  return (
    <section className="tech-section" id="techstack">
      <div className="tech-head">
        <h2>
          Tech <span>Stack</span>
        </h2>
        <p>
          The tools I reach for when shipping production software, from REST APIs
          and microservices through to containerised deployments and agentic AI
          workflows.
        </p>
      </div>

      <div className="tech-grid">
        {groups.map((group, index) => (
          <div className="tech-card" key={group.title}>
            <div className="tech-card-top">
              <h3>{group.title}</h3>
              <span className="tech-card-num">
                {String(index + 1).padStart(2, "0")}
              </span>
            </div>
            <ul className="tech-tags">
              {group.items.map((item) => (
                <li key={item}>
                  {logos[item] ? (
                    <img
                      src={import.meta.env.BASE_URL + "images/" + logos[item]}
                      alt=""
                      loading="lazy"
                    />
                  ) : null}
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="tech-core">
        <span className="tech-core-label">Core strengths</span>
        <ul>
          {coreStrengths.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default TechStack;
