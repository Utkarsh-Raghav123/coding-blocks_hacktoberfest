import React, { useState } from "react";

export default function Text(props) {
  const clearclick = () => {
    let newtext = "";
    setText(newtext);
  };
  const copyclick = () => {
    var text = document.getElementById("mybox");
    text.ariaSelected();
    navigator.clipboard.writeText(text.value);
  };
  const extraclick = () => {
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "));
  };
  const upclick = () => {
    let newtext = text.toUpperCase();
    setText(newtext);
  };
  const loclick = () => {
    let newtext = text.toLowerCase();
    setText(newtext);
  };

  const change = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("");
  // setText('hi ji');

  return (
    <>
      <div className="container "style={{
              color: props.mode === "dark" ? "white" : "#042743",
            }}>
        <h1 >{props.heading}</h1>
        <div className="mb-3">
          <label For="mybox" className="Form-label"></label>
          <textarea
            className="form-control"
            id="mybox"
            rows="8"
            style={{
              backgroundColor: props.mode === "dark" ? "gray" : "white", color: props.mode === "dark" ? "white" : "#042743"
            }}
            onChange={change}
            value={text}
          ></textarea>
        </div>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={upclick}
        >
          Convert to Uppercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={loclick}
        >
          Convert to lowercase
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={copyclick}
        >
          copy text{" "}
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={clearclick}
        >
          clear text{" "}
        </button>
        <button
          type="button"
          className="btn btn-primary mx-1"
          onClick={extraclick}
        >
          remove extra space
        </button>
      </div>
      <div className="container my-3" style={{ color: props.mode === "dark" ? "white" : "#042743",
            }}>
        <h2 >your text summary</h2>
        <p>
          {text.split(" ").length} word and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes to read</p>
        <h1 >preview</h1>
        <p>{text}</p>
      </div>
    </>
  );
}
