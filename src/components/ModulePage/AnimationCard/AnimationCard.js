import "./AnimationCard.scss";

export default function AnimationCard({ component: Component }) {
  return (
    <div className="animation-card">
      <Component />
    </div>
  );
}
