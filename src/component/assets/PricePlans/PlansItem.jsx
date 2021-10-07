import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import {Col} from "react-bootstrap";
import { Link } from "react-router-dom";
const PlansItem = ({
  PriceTitle,
  Price,
  listOne,
  listTwo,
  lisThree,
  listFour,
  listFive,
  listSix,
  listDeactivaOne,
  listDeactivatwo,
  listDeactiva,
  OrderLink,
  OrderText,
}) => {
  return (
    <Col lg={6}>
      {/* price table */}
      <div
        className="trm-price trm-popular"
      >
        {/* card header */}
        <div className="trm-price-header">
          <h6>{PriceTitle}</h6>
        </div>
        {/* card header end */}
        {/* price */}
        <div className="trm-price-number">
          <sup>$</sup>
          {Price}
          <sup>P</sup>
        </div>
        {/* price end */}
        <div className="trm-divider trm-mb-40 trm-mt-40" />
        {/* price list */}
        <ul className="trm-price-list">
          <li className={`trm-label`}>{listOne}</li>
          <li className={`trm-label`}>{listTwo}</li>
          <li className={`trm-label`}>{lisThree}</li>
          <li className={`trm-label`}>{listFour}</li>
          <li className={`trm-label`}>{listFive}</li>
          <li className={`trm-label`}>{listSix}</li>
          <li className={`trm-label ${listDeactiva}`}>{listDeactivaOne}</li>
          <li className={`trm-label ${listDeactiva}`}>{listDeactivatwo}</li>
        </ul>
        {/* price list end */}
        <Link to='/contact' className="trm-btn">
          {OrderText} <ArrowForwardIcon fontSize="small" />
        </Link>
      </div>
      {/* price table */}
    </Col>
  );
};

export default PlansItem;
