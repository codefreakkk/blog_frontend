import { React, useState } from "react";
import Header from "../components/Header";

function Write() {
  const [formValues, setFormValues] = useState([{id: "header", value: ""}]);

  function addHeader() {
    let values = [...formValues];
    values.push({ id: "header", value: "" });
    setFormValues(values);
  }

  function addTextArea() {
    let values = [...formValues];
    values.push({ id: "text", value: "" });
    setFormValues(values);
  }

  return (
    <>
      <Header />
      <div className="container" style={{ paddingTop: "15vh" }}>
        <div className="add">
          <span onClick={addHeader}>header</span>
          <span onClick={addTextArea}>text</span>
        </div>
        <div className="text_container">
          {formValues.map((res, index) => {
            if (res.id == "text") {
              return (
                <textarea
                  name=""
                  id="t_area"
                  rows="5"
                  placeholder="Start writing here"
                ></textarea>
              );
            }
            if (res.id == "header") {
              return (
                <textarea
                  name=""
                  id="t_area"
                  rows="1"
                  placeholder="Start writing here"
                ></textarea>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Write;
