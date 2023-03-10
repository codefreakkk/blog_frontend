import { React, useState, useEffect } from "react";
import remove from "../assets/images/close.png";
import header from "../assets/images/headers.png";
import text from "../assets/images/text.png";
import quote from "../assets/images/quote.png";
import uploadImage from "../assets/images/gallery.png";
import list from "../assets/images/list.png";
import listheader from "../assets/images/listheader.png";
import tag from "../assets/images/tag.png";
import axios from "axios";
import WriteBlogHeader from "../components/WriteBlogHeader";
import { useNavigate, useParams } from "react-router-dom";
import PulseLoader from "react-spinners/PulseLoader";
import preimg from "../assets/images/previewimage.png";

function Write() {
  const [formValues, setFormValues] = useState([{ id: "text", value: "" }]);
  const [title, setTitle] = useState("");
  const [imageName, setImageName] = useState([]);
  const [previewImage, setPreviewImage] = useState(null);
  const [preview, setPreviewImg] = useState("");
  const [previewImageState, setPreviewImageState] = useState(false);
  const [submit, submitState] = useState(false);
  const [alertState, setAlertState] = useState(false);
  const [msg, setAlertMsg] = useState("");
  const [color, setColor] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:8000/api/v1/getblogbyid/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        const data = res.data.data;
        if (data != null) {
          const content = data.content;
          if (content.length != 0) {
            const parsed = JSON.parse(content);
            
            let index = 0;
            let filter = parsed.filter((result) => {
              if (result.id == "image") {
                return (result.value = data.images[index++]);
              } else return result;
            });

            setFormValues(filter);
            setTitle(data.title);
            setPreviewImg(data.previewImage);
            if (data.previewImage.length != 0) {
              setPreviewImageState(true);
            }
          }
        }
      })
      .catch((err) => {
        navigate("/");
      });
  }, []);

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

    // set image names
    let imageNameArray = [...imageName];
    imageNameArray.push(image.name);
    setImageName(imageNameArray);

    // query in database
    axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/uploadimg",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
      data: {
        id: id,
        image: image,
      },
    })
      .then((res) => {
        console.log(res);
        // if (res.data.status == true) { }
      })
      .catch((err) => console.log(err));
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

  function setPreviewPhoto(e) {
    setPreviewImage(e.target.files[0]);
    const url = URL.createObjectURL(e.target.files[0]);
    setPreviewImg(url);
    setPreviewImageState(true);
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
    const image = values[index].files.name;
    values.splice(index, 1);
    setFormValues(values);

    const deleteIndex = imageName.indexOf(image);
    imageName.splice(deleteIndex, 1);

    // delete query
    axios
      .post(
        "http://localhost:8000/api/v1/deleteimg",
        {
          id,
          index: deleteIndex,
        },
        {
          headers: {
            Authorization: localStorage.getItem("token"),
          },
        }
      )
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert("Some error occured");
        console.log(err);
      });
  }

  function handleSubmit(e) {
    e.preventDefault();
    submitState(true);
    setAlertState(false);

    if (previewImageState === false) {
      submitState(false);
      setAlertState(true);
      setAlertMsg("Please add preview image before submitting.");
      setColor("rgba(236, 33, 33, 0.753)");
      submitState(false);
      return;
    }

    if (title.length === 0) {
      setAlertState(true);
      setAlertMsg("Please enter blog title.");
      setColor("rgba(236, 33, 33, 0.753)");
      submitState(false);
      return;
    }

    axios({
      method: "POST",
      url: "http://localhost:8000/api/v1/publishblog",
      headers: {
        "Content-Type": "multipart/form-data",
        Authorization: localStorage.getItem("token"),
      },
      data: {
        id: id,
        content: JSON.stringify(formValues),
        title: title,
        previewImage: previewImage,
        userName: localStorage.getItem("name"),
      },
    })
      .then((res) => {
        console.log(res);
        if (res.data.status == true) {
          submitState(false);
          setAlertMsg("Your blog has been published.");
          setAlertState(true);
          setColor("#03a87c");
        } else {
          setAlertMsg("Please add preview image before submitting.");
          setColor("rgba(236, 33, 33, 0.753)");
        }
      })
      .catch((err) => {
        alert("Some error occured");
        console.log(err);
      });
  }

  return (
    <>
      <WriteBlogHeader />
      {alertState ? (
        <div className="alert_container">
          <div className="alert_inner" style={{ backgroundColor: color }}>
            {msg}
          </div>
        </div>
      ) : (
        <></>
      )}

      <div
        className="container"
        style={{ paddingTop: "15vh", paddingBottom: "5vh" }}
      >
        {/* alert */}

        {/* <PulseLoader color="#36d7b7" /> */}
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
            <label htmlFor="previewImg" style={{ cursor: "pointer" }}>
              <img src={preimg} style={{ height: "30px" }} alt="" />
              <span>
                <input
                  style={{ display: "none" }}
                  type="file"
                  accept="image/png , image/jpg , image/jpeg"
                  onChange={setPreviewPhoto}
                  id="previewImg"
                />
              </span>
            </label>
          </div>
          {submit ? (
            <div className="mt-2">
              <PulseLoader color="#747373" />
            </div>
          ) : (
            <div class="botton-sub" onClick={handleSubmit}>
              <a href="" class="btn-subscribe">
                Publish
              </a>
            </div>
          )}
        </div>

        {preview.length > 0 ? (
          <div className="previewContainer">
            {" "}
            <img
              src={preview}
              alt=""
              style={{ height: "25vh" }}
              srcset=""
            />{" "}
          </div>
        ) : (
          <></>
        )}

        {/* enter title */}
        <div className="mb-3 header_container">
          <textarea
            name=""
            id="title"
            rows="1"
            value={title}
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
                    value={res.value}
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
                    value={res.value}
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
                    value={res.value}
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
                    value={res.value}
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
                    value={res.value}
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
