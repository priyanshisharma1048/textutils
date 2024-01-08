import React, { useState } from "react";

const Textform = (props) => {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to uppercase","success");

  };
  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert to lowercase","success");

  };
  const handleUndoClick = () => {
    let newText = text.lastIndexOf(" ");
    newText = text.substring(0, newText);
    setText(newText);
    // yeh showAlert props pass kiya hai jab bhi upper lower toggle undo buutton par click karenge toh alert mai yeh msg show hoga app.js mai line no.15 mai hai
    props.showAlert("convert to undocase","success");

  };
  const handletoggleClick = () => {
    if (text) {
      var array = text
        .split("")
        .map((value, index) =>
          index % 2 === 0 ? value.toLowerCase() : value.toUpperCase()
        );
      var newText = array.join(",").replace(/,+/g, ",").replace(/, /g, " ");

      setText(newText);
      props.showAlert("convert to togglecase","success");

    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div className="container" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
              color: props.mode === 'dark' ? 'white' : 'black',
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLoclick}>
          Convert to lowercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleUndoClick}>
          Undo
        </button>
        <button className="btn btn-primary mx-2" onClick={handletoggleClick}>
          Toggle
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h3 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Your text summary</h3>
        <p>
          {text.split("").length} words and {text.length} characters
        </p>
        <p>{0.008 * text.split("").length}</p>
        <h2 style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>Preview</h2>
        <p>{text.length > 0 ? text : "Enter something in the textbox above to preview it here"}</p>
      </div>
    </>
  );
};

export default Textform;
