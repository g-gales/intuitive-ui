import { Link } from "react-router-dom";
import "./IntroPage.scss";

export default function IntroPage() {
  return (
    <main className="intro-container">
      <h1 className="intro-title">Intuitive Navigation in Web Design</h1>
      <h4>By Grayson Gales</h4>
      <div className="content-wrapper">
        <p className="intro-content">
          Good design is seamless, and website navigation is no exception.
          Creating a space where users can move through a site without needing
          to stop and think encourages them to stay more engaged with the
          content, find what they need, and increases the likelihood that
          they’ll return again.
        </p>
        <p className="intro-content">
          Intuitive navigation involves more than just a clean design. It also
          means understanding user expectations, organizing content logically,
          and reducing friction at every step. Whether you’re building a simple
          landing page or a complex web app, designing clear and intuitive
          navigation is essential for usability, accessibility, and overall user
          satisfaction.
        </p>
        <p className="intro-content">
          In this module, you’ll explore best practices for designing intuitive
          navigation, learn what to avoid, and test your knowledge with
          interactive examples.
        </p>
      </div>
      <Link to="/infographic" className="btn-start">
        Start Course
      </Link>
      <hr />
    </main>
  );
}
