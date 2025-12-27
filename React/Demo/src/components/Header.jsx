import React from'react'
import {Link} from "react-router-dom";

const Header = () => {
    return (
        <>
 <div className="d-flex justify-content-between align-items-center p-2 bg-primary">
        <h3>My websie</h3>
        <div className="d-flex gap-3">
          <Link to={"/"} className="text-decoration-none text-light">Home</Link>
            <Link to={"/about"} className="text-decoration-none text-light">About</Link>
              <Link to={"/product"} className="text-decoration-none text-light">product</Link>
                <Link to={"/contact"} className="text-decoration-none text-light">Contact</Link>
        </div>
      </div>
        </>
    );
};

export default Header;
