import "../styles/Skills.css";

function Skills({ data, declareEdit }) {
  const tagList = data.tags.split(",").filter((item) => item.trim() !== "");
  return (
    <div id="skills">
      {tagList.map((item, index) => (
        <span key={"tag" + index}>{item}</span>
      ))}
      <button
        className="noPrint"
        onClick={() => {
          declareEdit([
            {
              type: "h1",
              text: "Skills",
              id: "title",
            },
            {
              type: "input",
              text: "Tags (seperated by , ):",
              id: "tags",
              value: data.tags,
            },
          ]);
        }}
      >
        +
      </button>
    </div>
  );
}

export default Skills;
