import "./quizzes.scss";
import { MdOutlineLocationSearching } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

// Common Design Standards
export function StandardLayoutDemo() {
  return (
    <div className="standard-layout">
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <h1>Welcome!</h1>
        <p>Does this follow common web standards?</p>
      </main>
      <footer>&copy; 2025</footer>
    </div>
  );
}

export function UnusualLayoutDemo() {
  return (
    <div className="unusual-layout">
      <h4>Hey there</h4>
      <p>Does this follow common web standards?</p>
      <nav>
        <ul>
          <li>Click Here</li>
          <li>Infoz</li>
          <li>Where?</li>
        </ul>
      </nav>
    </div>
  );
}

// Be Specific and Consistent
export function ConsistentLabelsDemo() {
  return (
    <div className="form-demo good">
      <button className="btn primary">Save Changes</button>
      <button className="btn secondary">Cancel</button>
    </div>
  );
}

export function VagueLabelsDemo() {
  return (
    <div className="form-demo bad">
      <button className="btn bad-primary">Do It</button>
      <button className="btn bad-secondary">Eh?</button>
    </div>
  );
}

// Make It Clear Where the User Is Located
export function ActiveStateDemo() {
  return (
    <div className="standard-layout">
      <header>
        <nav>
          <ul>
            <li className="header-active">Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <ul className="breadcrumb-container">
          <li className="breadcrumb-item">Home</li>
          <li>/</li>
          <li className="breadcrumb-item">Products</li>
          <li>/</li>
          <li className="breadcrumb-item bc-active">Best Sellers</li>
        </ul>
        <h3>Best Sellers</h3>
        <p>Can you tell what page this is on?</p>
      </main>
    </div>
  );
}

export function NoHighlightDemo() {
  return (
    <div className="standard-layout">
      <header>
        <nav>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <p>Can you tell what page this is on?</p>
      </main>
    </div>
  );
}

// Search Functionality
export function GoodSearchDemo() {
  return (
    <form className="search-demo" role="search">
      <div className="search-input">
        <label htmlFor="search">Search</label>
        <input id="search" type="text" placeholder="Search..." />
      </div>
      <button type="submit">
        <FaSearch />
      </button>
    </form>
  );
}

export function BadSearchDemo() {
  return (
    <div className="search-demo bad-search">
      <input type="text" placeholder="?" />
      <button className="bad-btn">
        <MdOutlineLocationSearching />
      </button>
    </div>
  );
}
