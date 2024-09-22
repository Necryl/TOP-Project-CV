import "../styles/Entry.css";

function Entry({ entryId, data, declareEdit }) {
  return (
    <div className="entry">
      <button
        className="editBtn noPrint"
        onClick={() => {
          declareEdit([
            { type: "h1", text: "Entry", id: "title" },
            { type: "input", text: "Name", id: "name", value: data.name },
            { type: "input", text: "Date", id: "date", value: data.date },
            {
              type: "input",
              text: "Description",
              id: "text",
              value: data.text,
            },
            { type: "data", text: "type", id: "type", value: "edit" },
            { type: "data", text: "index", id: "index", value: entryId },
          ]);
        }}
      >
        Edit
      </button>
      <div>
        <h2>{data.name}</h2>
        <p>{data.date}</p>
      </div>
      <p>{data.text}</p>
    </div>
  );
}

export default Entry;
