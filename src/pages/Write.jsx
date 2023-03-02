import { React, useState } from "react";
import Header from "../components/Header";
import remove from "../assets/images/close.png";
import header from "../assets/images/headers.png";
import text from "../assets/images/text.png";
import quote from "../assets/images/quote.png";
import uploadImage from "../assets/images/gallery.png";
import list from "../assets/images/list.png";
import listheader from "../assets/images/listheader.png";
import tag from "../assets/images/tag.png";
import Footer from "../components/Footer";
import axios from "axios";

function Write() {
  const [formValues, setFormValues] = useState([{ id: "text", value: "" }]);
  const [title, setTitle] = useState("");

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

  function addImg(e) {
    const image = e.target.files[0];
    const url = URL.createObjectURL(image);
    let values = [...formValues];
    values.push({ id: "image", value: url, files: image });
    setFormValues(values);
  }

  function addQuote() {
    let values = [...formValues];
    values.push({ id: "quote", value: "" });
    setFormValues(values);
  }

  function addList() {
    let values = [...formValues];
    values.push({ id: "list", value: "" });
    setFormValues(values);
  }

  function addTag() {
    let tags = formValues.filter((result) => {
      return result.id == "tags";
    });

    if (tags.length == 0) {
      let values = [...formValues];
      values.push({ id: "tags", value: "" });
      setFormValues(values);
    }
  }

  function handleTextChange(e, index) {
    let values = [...formValues];
    values[index] = { id: "text", value: e.target.value };
    setFormValues(values);
  }

  function handleHeaderChange(e, index) {
    let values = [...formValues];
    values[index] = { id: "header", value: e.target.value };
    setFormValues(values);
  }

  function handleQuoteChange(e, index) {
    let values = [...formValues];
    values[index] = { id: "quote", value: e.target.value };
    setFormValues(values);
  }

  function handleListChange(e, index) {
    let values = [...formValues];
    values[index] = { id: "list", value: e.target.value };
    setFormValues(values);
  }

  function handleTagsChange(e, index) {
    let values = [...formValues];
    values[index] = { id: "tags", value: e.target.value };
    setFormValues(values);
  }

  function deleteForm(index) {
    let values = [...formValues];
    values.splice(index, 1);
    setFormValues(values);
  }

  function deleteImage(index) {
    let values = [...formValues];
    values.splice(index, 1);
    setFormValues(values);
  }

  function handleSubmit(e) {
    e.preventDefault();
    let data = formValues.filter((result) => {
      return result.id == "image";
    });
    console.log(data);
  }

  return (
    <>
      <Header />
      <div className="container" style={{ paddingTop: "15vh" }}>
        <div className="publish">
          <div className="editor_container">
            <span onClick={addHeader} className="mr-3 pointer">
              <img src={header} style={{ height: "30px" }} alt="" />
            </span>
            <span onClick={addTextArea} className="mr-3 pointer">
              <img src={text} style={{ height: "28px" }} alt="" />
            </span>
            <label htmlFor="inputTag" style={{ cursor: "pointer" }}>
              <span>
                <img
                  src={uploadImage}
                  className="mr-3"
                  alt=""
                  style={{ height: "33px" }}
                />
              </span>
              <input
                style={{ display: "none" }}
                type="file"
                id="inputTag"
                className="mr-3"
                accept="image/png , image/jpg , image/jpeg"
                onChange={(e) => addImg(e)}
              />
            </label>
            <span className="mr-3 pointer" onClick={addQuote}>
              <img src={quote} style={{ height: "30px" }} alt="" />
            </span>
            <span className="mr-3 pointer" onClick={addList}>
              <img src={listheader} style={{ height: "28px" }} alt="" />
            </span>
            <span className="mr-3 pointer" onClick={addTag}>
              <img src={tag} style={{ height: "25px" }} alt="" />
            </span>
          </div>
          <div class="botton-sub" onClick={handleSubmit}>
            <a href="" class="btn-subscribe">
              Publish
            </a>
          </div>
        </div>

        {/* enter title */}
        <div className="mb-3 header_container">
          <textarea
            name=""
            id="title"
            rows="1"
            placeholder="Enter Title"
            onChange={(e) => setTitle(e.target.value)}
          ></textarea>
        </div>

        {/* <div className="add"></div> */}
        <div className="text_container">
          {formValues.map((res, index) => {
            if (res.id == "text") {
              return (
                <div className="mb-3 header_container">
                  <div onClick={() => deleteForm(index)}>
                    <img className="delete_form" src={remove} alt="" />
                  </div>
                  <textarea
                    name=""
                    id="t_area"
                    rows="7"
                    placeholder="Start writing here"
                    onChange={(e) => handleTextChange(e, index)}
                  ></textarea>
                </div>
              );
            }
            if (res.id == "header") {
              return (
                <div className="mb-3 header_container">
                  <div onClick={() => deleteForm(index)}>
                    <img src={remove} className="delete_form" alt="" />
                  </div>
                  <textarea
                    name=""
                    id="t_area"
                    rows="1"
                    placeholder="Enter header"
                    onChange={(e) => handleHeaderChange(e, index)}
                  ></textarea>
                </div>
              );
            }
            if (res.id == "image") {
              return (
                <div>
                  <div onClick={() => deleteImage(index)}>
                    {" "}
                    <img src={remove} className="delete_form" alt="" />
                  </div>
                  <div className="image_container">
                    <div>
                      <img src={res.value} className="image" />
                    </div>
                  </div>
                </div>
              );
            }
            if (res.id == "quote") {
              return (
                <div className="mb-3 header_container">
                  <div onClick={() => deleteForm(index)}>
                    <img src={remove} className="delete_form" alt="" />
                  </div>
                  <textarea
                    name=""
                    id="t_area"
                    rows="1"
                    placeholder="Enter Quote"
                    onChange={(e) => handleQuoteChange(e, index)}
                  ></textarea>
                </div>
              );
            }
            if (res.id == "list") {
              return (
                <div className="header_container">
                  <div onClick={() => deleteForm(index)}>
                    <img src={remove} className="delete_form" alt="" />
                  </div>
                  <div
                    style={{
                      marginTop: "12px",
                      marginLeft: "25px",
                      marginRight: "5px",
                    }}
                  >
                    <img src={list} style={{ height: "10px" }} alt="" />
                  </div>
                  <textarea
                    name=""
                    id="t_area"
                    rows="1"
                    placeholder="Enter list item"
                    onChange={(e) => handleListChange(e, index)}
                  ></textarea>
                </div>
              );
            }
            if (res.id == "tags") {
              return (
                <div className="header_container">
                  <div onClick={() => deleteForm(index)}>
                    <img src={remove} className="delete_form" alt="" />
                  </div>
                  <textarea
                    name=""
                    id="t_area"
                    rows="1"
                    placeholder="Enter tags seprated with spaces"
                    onChange={(e) => handleTagsChange(e, index)}
                  ></textarea>
                </div>
              );
            }
          })}
        </div>
      </div>
    </>
  );
}

export default Write;
