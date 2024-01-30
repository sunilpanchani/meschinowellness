import React from "react";
import { Link } from "react-router-dom";

const Breadcrumb = ({ title, item }) => {
  return (
    <>
      <div className="breadvroumb_area">
        <div className="container">
          <div className="row text-center">
            <div className="col">
              <h1>{title}</h1>
              <div className="breadcroumb_link">
                <Link to="/">Home </Link>/ {item}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Breadcrumb;
