import { Link } from "react-router-dom";
import moduleData from "../../data/modules";
import "./ConclusionPage.scss";

export default function ConclusionPage() {
  return (
    <main className="conc-container">
      <hr />
      <Link to="/infographic" className="btn-restart">
        Restart Course
      </Link>
      <h1 className="conc-title">Intuitive Navigation in Web Design</h1>
      <div className="content-wrapper">
        <p className="conc-content">
          Good navigation doesn’t just support a website, it shapes the entire
          user experience. Throughout this module, you’ve seen how following
          common design standards, staying specific and consistent, prioritizing
          hierarchy, clearly showing where users are, ensuring screen
          responsiveness, using interactive cues, integrating search
          functionalities, and designing for accessibility all work together to
          create intuitive navigation.
        </p>
        <p className="conc-content">
          Each of these principles might seem small on their own, but together
          they create an experience that feels natural, easy, and welcoming. As
          web design continues to evolve, these best practices will become even
          more important, and not just for aesthetics. Usability, inclusivity,
          and user trust are all key considerations for web design, and with
          these practices, all of them should be met with success. Whether
          you’re designing for a portfolio site or a full-scale web application,
          thinking carefully about how users move through your content can make
          the difference between confusion and clarity, frustration and flow.
        </p>
        <p className="conc-content">
          As you continue developing and designing, keep the user in mind at
          every step. When navigation feels effortless, the design fades into
          the background. That’s when users can truly focus on the content on
          the page instead of how to find it.
        </p>
        <p className="conc-content">
          To read more about Best Practices in Web Design, below are some
          helpful articles that supported in building this e-Learning course.
        </p>
      </div>
      <hr />
      <div className="img-grid">
        {moduleData.map((mod) => (
          <img
            src={require(`../../assets/infographics-full/${mod.imageFull}`)}
            alt={mod.alt}
            className="info-img"
          />
        ))}
      </div>

      <hr />
      <div className="references">
        <h2 className="sources-title">Sources</h2>
        <ul>
          <li>
            <a
              href="https://ideatheorem.com/insights/blog/development-engineering/tips-for-creating-intuitive-navigation-in-web-design"
              target="_blank"
              rel="noopener noreferrer">
              Idea Theorem – Tips for Creating Intuitive Navigation in Web
              Design
            </a>
          </li>
          <li>
            <a
              href="https://medium.com/design-bootcamp/navigate-to-the-top-essential-strategies-for-creating-intuitive-navigation-bcaedce4b32f"
              target="_blank"
              rel="noopener noreferrer">
              Medium – Essential Strategies for Creating Intuitive Navigation
            </a>
          </li>
          <li>
            <a
              href="https://mailchimp.com/resources/best-practices-for-website-navigation/"
              target="_blank"
              rel="noopener noreferrer">
              Mailchimp – Best Practices for Website Navigation
            </a>
          </li>
          <li>
            <a
              href="https://qntm.marketing/blog/improve-websites-navigation-9-best-practices/"
              target="_blank"
              rel="noopener noreferrer">
              QNTM – 9 Best Practices to Improve Website Navigation
            </a>
          </li>
          <li>
            <a
              href="https://usability.yale.edu/web-accessibility/articles/navigation"
              target="_blank"
              rel="noopener noreferrer">
              Yale Usability – Web Accessibility and Navigation
            </a>
          </li>
        </ul>
      </div>
      <hr />
    </main>
  );
}
