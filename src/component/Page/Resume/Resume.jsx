import Banner from "../../assets/Banner/Banner";
import FixedCard from "../../assets/FixedCard/FixedCard";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../assets/Footer/Footer";
import SkillsLanguage from "../../assets/Skills/SkillsLanguage/SkillsLanguage";
import SkillsCode from "../../assets/Skills/SkillsCode/SkillsCode";
import Knowledge from "../../assets/Knowledge/Knowledge";
import EmploymentHistory from "../../assets/Employment History/EmploymentHistory";

const Resume = () => {
  return (
    <div className="trm-content-start">
      <Banner
        PageImg="img/banner.jpg"
        PageTitle="RESUME"
        PageHeddingOne="My Skills"
        PageHeddingTwo="and History"
        PageBreadcrumb={true}
        PageBefore="Home"
      />
      <Container>
        <Row>
          <Col lg={4}>
            <FixedCard />
          </Col>
          <Col lg={8}>
            <div className="trm-content" id="trm-content">
              <div id="about-triger">
                <SkillsLanguage/>
                <SkillsCode/>
                <Knowledge/>
                <EmploymentHistory/>
                <Footer />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Resume;
