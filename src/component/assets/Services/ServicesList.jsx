import {Col} from "react-bootstrap";
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from "react-router-dom";

const ServicesList = ({
  imgIcon,
  imgsvg,
  Title,
  Description,
  OrderLink,
  OrderText,
}) => {
  return (
    <Col xl={6}>
      <div
        className="trm-service-icon-box"
      >
        <div className="trm-service-content">
          <div className="trm-icon">
            <img src={imgIcon} alt="icon" className="trm-black-icon" />
            <img src={imgsvg} alt="icon" className="trm-white-icon" />
          </div>
          <h6 className="trm-mb-20">{Title}</h6>
          <div className="trm-mb-20">{Description}</div>
          <Link
            to="/contact"
            className="trm-label trm-label-color"
          >
            {OrderText} <ArrowForwardIcon fontSize="small" />
          </Link>
        </div>
      </div>
    </Col>
  );
};

export default ServicesList;