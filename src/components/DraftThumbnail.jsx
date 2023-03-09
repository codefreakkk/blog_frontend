import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import pen from "../assets/images/edit.png";
import delImg from "../assets/images/delete.png";
import axios from "axios";

function DraftThumbnail({ id, title }) {
  const navigate = useNavigate();

  function handleEdit() {
    navigate(`/write/${id}`);
  }

  function handleDelete() {
    axios
      .delete(`http://localhost:8000/api/v1/deletepost/${id}`, {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      })
      .then((res) => {
        if (res.data.status === true) {
          window.location.reload();
        }
        else {
          alert(res.data.message);
        }
      })
      .catch((err) => console.log(err));
  }

  return (
    <>
      <div class="post-list post-list-style5">
        <div class="post-list-content">
          <h4 class="entry-title">
            <NavLink to={`/write/${id}`}>
              <a>{title.length == 0 ? "Edit Your Title" : title}</a>
            </NavLink>
          </h4>
          <div className="write_container">
            <span className="mr-2">
              <img
                src={pen}
                alt=""
                style={{ height: "20px", cursor: "pointer" }}
                srcset=""
                onClick={handleEdit}
              />
            </span>
            <span onClick={handleDelete}>
              <img
                src={delImg}
                alt=""
                style={{ height: "20px", cursor: "pointer" }}
                srcset=""
              />
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

export default DraftThumbnail;
