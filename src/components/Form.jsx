import { useState } from "react";
import "../styles/Form.css";

function ImgEdit({ data }) {
  const [imgSrc, setImgSrc] = useState(data.value);
  return (
    <label key={data.id + "2"}>
      <img src={imgSrc} alt={data.text} />
      <input
        type="file"
        name={data.id}
        onChange={(e) => {
          const file = e.target.files[0];
          if (file) {
            setImgSrc(URL.createObjectURL(file));
          }
        }}
      />
    </label>
  );
}

function Form({ data, submit, hideForm }) {
  return (
    <div
      id="form-container"
      style={{ display: data !== null ? "grid" : "none" }}
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          hideForm();
        }
      }}
    >
      <div id="form-box">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const dataObject = {};
            formData.forEach((value, key) => {
              dataObject[key] = value;
            });
            if (
              dataObject.picture &&
              dataObject.picture.type.startsWith("image/")
            ) {
              const reader = new FileReader();
              reader.onload = function (e) {
                dataObject["picture"] = e.target.result;
                submit(dataObject);
              };
              reader.readAsDataURL(dataObject.picture);
            } else {
              if (dataObject.picture) {
                dataObject.picture = data.filter((elem) => {
                  return elem.type === "image";
                })[0].value;
              }
              submit(dataObject);
            }
          }}
        >
          {(() => {
            if (data !== null) {
              return data.map((item) => {
                if (item.type === "h1") {
                  return <h1 key={item.id}>{item.text}</h1>;
                } else if (item.type === "h2") {
                  return <h2 key={item.id}>{item.text}</h2>;
                } else if (item.type === "input") {
                  return (
                    <label key={item.id}>
                      {item.text}
                      <input
                        type="text"
                        name={item.id}
                        defaultValue={item.value}
                      />
                    </label>
                  );
                } else if (item.type === "image") {
                  return <ImgEdit key={item.id} data={item} />;
                } else if (item.type === "data") {
                  return (
                    <label key={item.id} className="hide">
                      <input
                        type="text"
                        name={item.id}
                        defaultValue={item.value}
                      />
                    </label>
                  );
                }
              });
            } else {
              return " ";
            }
          })()}
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Form;
