import { Row, Col } from "react-bootstrap";
import SkilsItem from "../SkilsItem";

const SkillsLanguage = () => {
  return (
    <Row>
      <Col lg={6}>
        <div className="trm-skill-card trm-scroll-animation trm-active-el">
          <SkilsItem SkilsName="Bangla" SkilsTag="NATIVE" SkilsProgress="100" />
          <SkilsItem SkilsName="English" SkilsTag="90%" SkilsProgress="90" />

        </div>
      </Col>
      <Col lg={6}>
        <div className="trm-skill-card trm-scroll-animation trm-active-el">
          <SkilsItem SkilsName="Hinde" SkilsTag="80%" SkilsProgress="80" />
          <SkilsItem SkilsName="Germany" SkilsTag="Basic" SkilsProgress="60" />
        </div>
      </Col>
    </Row>
  );
};

export default SkillsLanguage;
