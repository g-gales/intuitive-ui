import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import "./QuizCard.scss";

export default function QuizCard({ component: Component, correct, feedback }) {
  const { id } = useParams();
  const [revealed, setRevealed] = useState(false);

  useEffect(() => {
    setRevealed(false);
  }, [id]);

  function handleClick() {
    if (!revealed) {
      setRevealed(true);
    }
  }

  return (
    <div className="opt-container">
      <div
        className={`quiz-opt ${
          revealed
            ? correct
              ? "quiz-opt-wrong"
              : "quiz-opt-correct"
            : "quiz-opt-neutral"
        }`}
        onClick={handleClick}>
        <Component />
      </div>
      {revealed && (
        <p className={`quiz-reveal ${correct ? "correct" : "incorrect"}`}>
          {feedback}
        </p>
      )}
    </div>
  );
}
