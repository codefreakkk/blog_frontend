import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import pen from "../assets/images/edit.png";
import delImg from "../assets/images/delete.png";

function DraftThumbnail({ id, title }) {
  const navigate = useNavigate();

  function handleDelete() {
    navigate(`/write/${id}`)
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
                onClick={handleDelete}
              />
            </span>
            <span>
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
