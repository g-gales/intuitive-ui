import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { useState } from "react";
import { Link } from "react-router-dom";
import moduleData from "../../data/modules";
import "./InfographicPage.scss";

export default function InfographicPage() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <div className="info-container">
      <hr className="hr-top" />
      <Link to="/" className="btn-return">
        <FaArrowLeft className="icon" /> Back to Intro
      </Link>
      <h2 className="info-title">Best Practices</h2>
      <p className="info-sub">
        Select one of the modules below to learn more about the best practices
        for intuitive navigation!
      </p>
      <div className="img-grid">
        {moduleData.map((mod) => (
          <Link
            key={mod.id}
            to={`/module/${mod.id}`}
            className="img-container"
            onMouseEnter={() => setHoveredCard(mod.id)}
            onMouseLeave={() => setHoveredCard(null)}>
            <img
              src={require(`../../assets/infographics/${mod.image}`)}
              alt={mod.alt}
              className="info-img"
            />
            {hoveredCard === mod.id && (
              <p className="info-summary show">{mod.summary}</p>
            )}
          </Link>
        ))}
      </div>
      <Link to="/module/standards" className="btn-start">
        Begin Course <FaArrowRight className="icon" />
      </Link>
      <hr className="hr-bottom" />
    </div>
  );
}
