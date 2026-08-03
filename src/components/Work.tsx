import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward } from "react-icons/md";

const projects = [
  {
    title: "Spec-Driven Agentic Framework",
    category: "28 AI Agents Across the Software Lifecycle",
    description:
      "A structured pipeline where upstream agents author and validate product specs, mid-tier agents decompose them into epics and stories, and downstream agents generate code, run peer review and scan for security vulnerabilities — collapsing the distance from requirement to reviewable code.",
    tools: "Python, Agent Orchestration, Static Analysis, Security Scanning",
    image: "/images/placeholder.webp",
    link: "",
  },
  {
    title: "AI-Powered OME Assistant",
    category: "Conversational Layer over OpenManage — Shipping to Customers",
    description:
      "Answers questions about OpenManage Enterprise functionality and, when a query maps to an available endpoint, invokes the REST API itself to return live data straight from the database. Now shipping as a customer-facing feature in a new Dell product.",
    tools: "Java, REST APIs, Tool-Calling LLMs, PostgreSQL",
    image: "/images/placeholder.webp",
    link: "",
  },
  {
    title: "Predictive Device Lifecycle Intelligence",
    category: "Remaining-Life Forecasting for Managed Hardware",
    description:
      "Tracks real-time metrics from every device managed in OME and combines statistical calculation with AI-driven analysis to predict how much operational life each device has left — turning reactive replacement into planned maintenance.",
    tools: "Python, Telemetry Pipelines, Statistical Modelling, OME APIs",
    image: "/images/placeholder.webp",
    link: "",
  },
  {
    title: "Agentic Defect Resolver",
    category: "Autonomous Jira-to-Git Fix Pipeline",
    description:
      "Pulls the defect and description from Jira, searches a knowledge base of previous fixes, then walks a source-code map to find the exact file, applies the fix and hot-swaps the JAR on a live OME appliance for developer verification — generating a fix report and pushing to Git once approved.",
    tools: "Devin AI, Jira, Git, Source-Code Mapping, Live Appliance Deploys",
    image: "/images/placeholder.webp",
    link: "",
  },
  {
    title: "OpenManage Enterprise",
    category: "Enterprise Server Management Platform",
    description:
      "REST APIs that improved system response for a base of 5,000+ concurrent users, 80+ aBVT test cases added to standardise API validation, and 100,000+ lines of source indexed for AI code assistance — alongside SSH log collection, mapper XML and JAR deployments and post-deploy verification on live appliances.",
    tools: "REST APIs, Java, PostgreSQL, Robot Framework, JUnit",
    image: "/images/placeholder.webp",
    link: "",
  },
  {
    title: "Angular Phoenix",
    category: "Reactive Enterprise Frontend",
    description:
      "An enterprise Angular application built on strict reactive conventions — Angular Signals and Subject-based subscriptions for state, reusable components from the internal ui-library for consistency and accessibility, and full i18n coverage for every user-facing string.",
    tools: "Angular, Signals, RxJS, TypeScript, i18n, UI Component Library",
    image: "/images/placeholder.webp",
    link: "",
  },
  {
    title: "Fog Computing for Next-Gen IoT",
    category: "Published Research — ScienceDirect",
    description:
      "A published paper surveying IoT architectures, the open challenges of pushing computation to the network edge, and where the field is heading — written during the M.Tech programme at IIT (ISM) Dhanbad.",
    tools: "IoT Architecture, Edge & Fog Computing, Next-Gen Networks",
    image: "/images/placeholder.webp",
    link: "https://www.sciencedirect.com/science/article/abs/pii/S1574013723000163",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: "translateX(-" + currentIndex * 100 + "%)",
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{String(index + 1).padStart(2, "0")}</h3>
                      </div>
                      <div className="carousel-details">
                        <h4>{project.title}</h4>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description">
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage
                        image={project.image}
                        alt={project.title}
                        link={project.link}
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={
                  "carousel-dot" +
                  (index === currentIndex ? " carousel-dot-active" : "")
                }
                onClick={() => goToSlide(index)}
                aria-label={"Go to project " + (index + 1)}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
