import "../styles/Ledger.css";
import Entry from "./Entry.jsx";

function Ledger({ declareEdit, data, name }) {
  return (
    <div id="ledger">
      <div id="xptitlebar">
        <h1>{name}</h1>
        <button
          className="addBtn noPrint"
          onClick={() => {
            declareEdit([
              { type: "h1", text: "Entry", id: "title" },
              { type: "input", text: "Name", id: "name" },
              { type: "input", text: "Date", id: "date" },
              {
                type: "input",
                text: "Description",
                id: "text",
              },
              { type: "data", text: "type", id: "type", value: "add" },
            ]);
          }}
        >
          Add
        </button>
      </div>
      {data.map((entry, index) => {
        return (
          <Entry
            key={"XP" + index}
            entryId={index}
            data={entry}
            declareEdit={declareEdit}
          />
        );
      })}
    </div>
  );
}

export default Ledger;
