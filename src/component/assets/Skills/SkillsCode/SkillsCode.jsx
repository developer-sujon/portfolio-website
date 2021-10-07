import {Row, Col } from "react-bootstrap";
import SkilsItem from "../SkilsItem";

const SkillsCode = () => {
  return (
    <Row>
      <Col lg={6}>
        <div className="trm-skill-card trm-scroll-animation trm-active-el">
          <SkilsItem
            SkilsName="Html"
            SkilsTag="90"
            SkilsProgress="90"
          />
          <SkilsItem SkilsName="Css" SkilsTag="80%" SkilsProgress="80" />
          <SkilsItem SkilsName="Scss" SkilsTag="70%" SkilsProgress="70" />
          <SkilsItem SkilsName="WordPress" SkilsTag="100%" SkilsProgress="100" />
        </div>
      </Col>
      <Col lg={6}>
        <div className="trm-skill-card trm-scroll-animation trm-active-el">
          <SkilsItem SkilsName="JavaScript" SkilsTag="80%" SkilsProgress="80" />
          <SkilsItem SkilsName="React" SkilsTag="70%" SkilsProgress="70" />
          <SkilsItem SkilsName="NodeJs" SkilsTag="60%" SkilsProgress="60" />
          <SkilsItem SkilsName="ExpressJs" SkilsTag="60%" SkilsProgress="60" />
        </div>
      </Col>
    </Row>
  );
};

export default SkillsCode;
