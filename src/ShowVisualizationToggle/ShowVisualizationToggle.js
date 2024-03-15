import "./ShowVisualizationToggle.css";
export function ShowVisualizationToggle({
  onClick,
  question,
  showVisualizationSelector,
}) {
  return (
    <div className="ShowVisualizationToggle--container">
      <button onClick={onClick} className="ShowVisualizationToggle--button">
        {showVisualizationSelector ? "←" : "→"}
      </button>
      <div className="ShowVisualizationToggle--question-name">
        {question.name}
      </div>
    </div>
  );
}
