import TitleDivider from "../TitleDivider/TitleDivider";
import { Row, Col } from "react-bootstrap";
import KnowledgeItem from "./KnowledgeItem";

const Knowledge = () => {
  return (
    <Row>
      <Col lg={12}>
        <TitleDivider DividerTitle={"Knowledgee"} TitleNumber={"02"} />
      </Col>
      <Col lg={12}>
        <div className="trm-card">
          <Row>
            <KnowledgeItem IemOne="Gulp" IemTwo="Sass" IemThree="Bootstrap" />
            <KnowledgeItem
              IemOne="React js"
              IemTwo="Node Js"
              IemThree="Express JS"
            />
          </Row>
        </div>
      </Col>
    </Row>
  );
};

export default Knowledge;
