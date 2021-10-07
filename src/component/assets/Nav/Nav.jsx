import { Link, NavLink } from "react-router-dom";
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
const Nav = () => {
    return (
        <div
        id="nav"
        className="trm-top-bar"
      >
        <div className="container">
          <div className="trm-left-side">
            {/* logo */}
            <Link
              to="/"
              className="trm-logo-frame trm-anima-NavLink"
            >
              <div className="trm-logo-text">
                Developer <span>Mukti</span>
              </div>
              {/*<img src="img/logo.svg" alt="Trueman"><== image logo*/}
            </Link>
            {/* logo end */}
          </div>
          <div className="trm-right-side">
            {/* menu */}
            <div className="trm-menu">
              <nav>
                <ul>
                  <li className="current-menu-item menu-item-has-children">
                    <NavLink activeClassName="active-navlink" exact to="/">Home</NavLink>
                  </li>
                  <li className="menu-item-has-children">
                    <NavLink activeClassName="active-navlink"  to="/portfolio">Portfolio</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active-navlink"  to="/resume">Resume</NavLink>
                  </li>
                  <li>
                    <NavLink activeClassName="active-navlink"  to="/contact">Contact</NavLink>
                  </li>
                  {/* <li className="menu-item-has-children">
                    <NavLink activeClassName="active-navlink"  to="/blog">Blog</NavLink>
                  </li> */}
                </ul>
              </nav>
            </div>
            {/* menu end */}
            {/* mode switcher place */}
            <div className="trm-mode-switcher-place" />
            {/* mode switcher place end */}
            {/* action button */}
            <a
              href="files/cv.pdf"
              download
              className="trm-btn trm-btn-sm"
            >
              Download cv <ArrowDownwardIcon fontSize="small"/>
            </a>
            {/* action button end */}
          </div>
          <div className="trm-menu-btn">
            <span />
          </div>
        </div>
      </div>
    );
};

export default Nav;