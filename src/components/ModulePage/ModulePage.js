import { useState } from "react";

import { useParams, Link } from "react-router-dom";
import moduleData from "../../data/modules";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import AnimationCard from "./AnimationCard/AnimationCard";
import QuizCard from "./QuizCard/QuizCard";
import "./ModulePage.scss";

export default function ModulePage() {
  const { id } = useParams();
  const module = moduleData.find((mod) => mod.id === id);
  const currentIndex = moduleData.findIndex((mod) => mod.id === id);
  const prevModule = moduleData[currentIndex - 1];
  const nextModule = moduleData[currentIndex + 1];
  const isLastModule = currentIndex === moduleData.length - 1;

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const { quiz, content } = module;

  if (!module) return <p className="p-6 text-red-600">Module not found.</p>;

  return (
    <main className="module-container">
      <div
        className={`sidebar-toggle ${sidebarOpen ? "sidebar-open" : ""}`}
        onClick={() => setSidebarOpen(!sidebarOpen)}
        aria-label="Toggle navigation menu">
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
        <div className="hamburger-bar"></div>
      </div>
      <aside className={`module-sidebar ${sidebarOpen ? "open" : ""}`}>
        <nav>
          <div className="btn-container">
            <Link to="/infographic" className="btn-return">
              <FaArrowLeft className="icon" /> Home
            </Link>
            <button
              className="btn-close"
              onClick={() => setSidebarOpen(false)}
              aria-label="Close navigation menu">
              ✖
            </button>
          </div>
          <h3 className="sidebar-title">Jump to Module</h3>
          <ul>
            {moduleData.map((mod) => (
              <li key={mod.id}>
                <Link
                  to={`/module/${mod.id}`}
                  className={mod.id === id ? "active" : ""}
                  onClick={() => setSidebarOpen(false)}>
                  {mod.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <div className="module-content">
        <hr />
        <h1 className="module-title">{module.title}</h1>
        <p className="module-text">{content.main}</p>
        <div className="ani-container">
          {content.animation && (
            <div className="ani-caption">
              <AnimationCard component={content.animation} />{" "}
              <p className="animation-caption">{content.caption}</p>
            </div>
          )}
          <p className="module-text secondary-text">{content.secondary}</p>
        </div>

        {quiz && (
          <section className="module-quiz">
            <h2 className="quiz-time">Quiz Time!</h2>
            <h3 className="quiz-prompt">{quiz.prompt}</h3>
            <div className="quiz-options">
              {quiz.options.map((opt, index) => (
                <QuizCard
                  key={index}
                  component={opt.component}
                  correct={opt.correct}
                  feedback={opt.feedback}
                />
              ))}
            </div>
          </section>
        )}
        <div className="course-btn-container">
          {prevModule && (
            <Link to={`/module/${prevModule.id}`} className="btn-prev">
              <FaArrowLeft /> Previous: {prevModule.title}
            </Link>
          )}
          {isLastModule ? (
            <Link to="/conclusion" className="btn-next">
              Finish Module <FaArrowRight />
            </Link>
          ) : (
            nextModule && (
              <Link to={`/module/${nextModule.id}`} className="btn-next">
                Next: {nextModule.title} <FaArrowRight />
              </Link>
            )
          )}
        </div>
      </div>
    </main>
  );
}
