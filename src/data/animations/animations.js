import "./animations.scss";
import { BsCursorFill } from "react-icons/bs";
import { FaRegKeyboard } from "react-icons/fa6";

// Visual Hierarchy Animation
export function HierarchyAnimation() {
  return (
    <div className="hierarchy-demo">
      <div className="fade-in delay-1 tier-1">!!!</div>
      <div className="fade-in delay-2">
        <div className="tier-2">!!</div>
        <div className="tier-2">!!</div>
      </div>
      <div className="fade-in delay-3">
        <div className="tier-3">!</div>
        <div className="tier-3">!</div>
        <div className="tier-3">!</div>
      </div>
    </div>
  );
}

// Responsive Layout Animation
export function ResponsiveDemoAnimation() {
  return (
    <div className="responsive-wrapper">
      <div className="responsive-grid">
        {Array.from({ length: 6 }).map((_, i) => (
          <div className="grid-box" key={i}>
            Box {i + 1}
          </div>
        ))}
      </div>
    </div>
  );
}

// Interactive Cues Animation
export function InteractiveCueAnimation() {
  return (
    <div className="cue-demo">
      <div className="cue-wrapper">
        <div className="cue-btn">Button</div>
        <BsCursorFill className="cue-cursor" />
      </div>
    </div>
  );
}

// Accessibility Keyboard Navigation Animation
export function AccessibilityAnimation() {
  return (
    <div className="accessibility-demo">
      <header>
        <nav>
          <ul>
            <li className="li-1">Home</li>
            <li className="li-2">About</li>
            <li className="li-3">Contact</li>
          </ul>
        </nav>
      </header>
      <main>
        <FaRegKeyboard className="keyboard-icon" />
        <p>TAB</p>
      </main>
    </div>
  );
}
