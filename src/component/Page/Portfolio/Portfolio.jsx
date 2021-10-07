import Banner from "../../assets/Banner/Banner";
import FixedCard from "../../assets/FixedCard/FixedCard";
import { Container, Row, Col } from "react-bootstrap";
import Footer from "../../assets/Footer/Footer";
import Portfolios from "../../assets/Portfolio/Portfolios";
import "./Portfolio.scss"
const Portfolio = () => {
  return (
    <div className="trm-content-start">
      <Banner
        PageImg="img/banner2.jpg"
        PageTitle="PORTFOLIO"
        PageHeddingOne="Recent work"
        PageHeddingTwo="performed"
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
                <Portfolios />
                <Footer />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portfolio;
