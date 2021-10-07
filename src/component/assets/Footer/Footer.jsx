import { Fragment } from "react";
import { Link } from "react-router-dom";
import TitleDivider from "../TitleDivider/TitleDivider";

const Footer = () => {
  return (
    <Fragment>
      <TitleDivider />
      <footer
      >
        <div className="trm-label">
          © {new Date().getFullYear()} All Rights Reserved.
        </div>
        <div className="trm-label">
          Designed by:{" "}
          <Link to="/">
            Developer Mukti
          </Link>
        </div>
      </footer>
    </Fragment>
  );
};

export default Footer;
