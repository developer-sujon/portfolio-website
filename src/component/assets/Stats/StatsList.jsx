import { Col } from "react-bootstrap";
const StatsList = ({ CounterNumber, Title }) => {
  return (
    <Col lg={4}>
      <div
        className="trm-counter-up"
        
      >
        <div className="trm-counter-number">
          <span className="trm-counter">{CounterNumber}</span>
          <span className="trm-counter-symbol">+</span>
        </div>
        <div className="trm-divider trm-mb-20 trm-mt-20" />
        <div className="trm-label">{Title}</div>
      </div>
    </Col>
  );
};

export default StatsList;
