import React, { useState } from "react";

const Textform = (props) => {
  const handleUpclick = () => {
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("convert to uppercase", "success");
  };

  const handleLoclick = () => {
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("convert to lowercase", "success");
  };

  const handleUndoClick = () => {
    let newText = text.lastIndexOf(" ");
    newText = text.substring(0, newText);
    setText(newText);
    props.showAlert("convert to undocase", "success");
  };

  const handletoggleClick = () => {
    if (text) {
      var wordsArray = text.split(/\s+/); // Use a regular expression to split by spaces and newlines
      var uniqueWordsArray = [...new Set(wordsArray)];
      var newText = uniqueWordsArray.join(" ");

      setText(newText);
      props.showAlert("convert to togglecase", "success");
    }
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
  };

  const [text, setText] = useState("");

  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          {props.heading}
        </h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{
              backgroundColor: props.mode === "dark" ? "#13466e" : "white",
              color: props.mode === "dark" ? "white" : "#042743",
            }}
            id="mybox"
            rows="8"
          ></textarea>
        </div>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUpclick}>
          Convert to Uppercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoclick}>
          Convert to lowercase
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleUndoClick}>
          Undo
        </button>
        <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handletoggleClick}>
          Toggle
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h3 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Your text summary
        </h3>
        <p>
          {text.split(/\s+/).filter((word) => word !== "").length} words and{" "}
          {text.replace(/\s+/g, "").length} characters
        </p>
        <p>{0.008 * text.split(/\s+/).filter((word) => word !== "").length}</p>
        <h2 style={{ color: props.mode === "dark" ? "white" : "black" }}>
          Preview
        </h2>
        <p>
          {text.length > 0
            ? text
            : "Noting to preview"}
        </p>
      </div>
    </>
  );
};

export default Textform;
