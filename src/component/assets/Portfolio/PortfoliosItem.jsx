import React from "react";
import { Col } from "react-bootstrap";
import LinkIcon from "@material-ui/icons/Link";
const PortfoliosItem = ({ Img, Title, Link, Target}) => {
  return (
    <Col lg={6}>
      <div className="trm-portfolio-item trm-scroll-animation trm-active-el">
        <a data-fancybox="portfolio" href={Img}>
          <div className="trm-cover-frame">
            <img className="trm-cover" src={Img} alt="item" />
          </div>
        </a>
        <div className="trm-item-description">
          <h6>{Title}</h6>
          <a href={Link} target={Target}>
            <div className="trm-zoom-icon">
              <LinkIcon size="small" />
            </div>
          </a>
        </div>
      </div>
    </Col>
  );
};

export default PortfoliosItem;
