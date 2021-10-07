import FancyBox from "../FancyBox/FancyBox";
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import { Link } from "react-router-dom";
const Banner = ({
  PageImg,
  PageTitle,
  PageHeddingOne,
  PageHeddingTwo,
  PageBreadcrumb,
  PageBefore,
}) => {
  return (
    <div
      className="trm-banner"
    >
      {/* banner cover */}
      <img
        src={PageImg}
        alt="banner"
        className="trm-banner-cover"
      />
      <div className="trm-banner-content trm-overlay">
        <div
          className="container"
        >
          <div className="row">
            <div className="col-lg-4" />
            <div className="col-lg-8">
              {/* banner title */}
              <div className="trm-banner-text">
                <div className="trm-label trm-mb-20">{PageTitle}</div>
                <h1 className="trm-mb-30">
                  {PageHeddingOne}
                  <br />
                  {PageHeddingTwo}
                </h1>
                {PageBreadcrumb ? (
                  <ul className="trm-breadcrumbs trm-label">
                    <li>
                      <Link to="/" className="trm-anima-link">
                        {PageBefore}
                      </Link>
                    </li>
                    <li>
                      <span>{PageTitle}</span>
                    </li>
                  </ul>
                ) : (
                  <FancyBox options={{ infinite: false }}>
                    <button
                      data-fancybox="gallery"
                      data-src="https://www.youtube.com/watch?v=Mo_vRjtkgSI"
                      className="trm-btn trm-btn-border"
                    >
                      Video Resume <PlayArrowIcon />
                    </button>
                  </FancyBox>
                )}
              </div>
              {/* banner title end */}
              {/* scroll hint */}
              <a
                href="#about-triger"
                className="trm-scroll-hint-frame"
              >
                <div className="trm-scroll-hint" />
                <span className="trm-label">Scroll down</span>
              </a>
              {/* scroll hint end */}
            </div>
          </div>
        </div>
      </div>
      {/* banner content end */}
    </div>
  );
};

export default Banner;
