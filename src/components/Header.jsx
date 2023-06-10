import React from "react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="bg-dark p-4">
      <Link to="/">
        <img
          style={{ maxWidth: "100px" }}
          src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Header;
