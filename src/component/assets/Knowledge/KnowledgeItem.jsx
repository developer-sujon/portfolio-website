import { Col } from "react-bootstrap";

const KnowledgeItem = ({IemOne, IemTwo, IemThree}) => {
  return (
    <Col>
      <ul className="trm-list">
        <li>{IemOne}</li>
        <li>{IemTwo}</li>
        <li>{IemThree}</li>
      </ul>
    </Col>
  );
};

export default KnowledgeItem;
