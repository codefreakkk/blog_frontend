import React from "react";
import Explore from "./pages/Explore";
import Home from "./pages/Home";
import "./assets/css/style.css";
import "./assets/css/custom.css";
import "./assets/css/bootstrap.min.css";
import "./assets/css/owl.carousel.css";
import "./assets/css/line-awesome.min.css";
import "./assets/css/fontawesome.css";
import "./styles.css";
import BlogPost from "./pages/BlogPost";
import Write from "./pages/Write";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Drafts from "./pages/Drafts";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/explore" element={<Explore />} />
        </Routes>
        <Routes>
          <Route path="/post" element={<BlogPost />} />
        </Routes>
        <Routes>
          <Route path="/write/:id" element={<Write />} />
        </Routes>
        <Routes>
          <Route path="/drafts" element={<Drafts/>} />
        </Routes>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
