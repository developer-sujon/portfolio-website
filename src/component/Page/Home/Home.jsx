import Banner from "../../assets/Banner/Banner";
import FixedCard from "../../assets/FixedCard/FixedCard";
import Stats from "../../assets/Stats/Stats";
import { Container, Row, Col } from "react-bootstrap";
import MyStory from "../../assets/My story/MyStory";
import VideoResume from "../../assets/VideoResume/VideoResume";
import Services from "../../assets/Services/Services";
import PricePlans from "../../assets/PricePlans/PricePlans";
import TitleDivider from "../../assets/TitleDivider/TitleDivider";
import Testimonials from "../../assets/Testimonials/Testimonials";
import Footer from "../../assets/Footer/Footer";
import Popup from "../../assets/Popup/Popup";
import PortfoliosItem from "../../assets/Portfolio/PortfoliosItem";
import { useEffect, useState } from "react";

const Home = () => {
  const [protfolio, setProtfolio] = useState([])
  useEffect(() => {
    fetch('https://developermukti.me/server/portfolio/json')
      .then(response => response.json())
      .then(json => setProtfolio(json))
  }, [])

  const firstTen = protfolio.slice(0, 10)
  return (
    <div className="trm-content-start">
      <Banner
        PageImg="img/banner.jpg"
        PageTitle="Hi my new friend!"
        PageHeddingOne="Full Stack "
        PageHeddingTwo="Web Developer!"
        PageBreadcrumb={false}
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
                <Stats />
                <MyStory />

                <VideoResume />

                <Services />
                <PricePlans />
                <Row>
                  <Col lg={12}>
                    <TitleDivider
                      DividerTitle={"Testimonials"}
                      TitleNumber={"05"}
                    />
                  </Col>
                  <Col lg={12}>
                    <Testimonials />
                    <Col lg={12}>
                      <TitleDivider
                        DividerTitle={"Portfolio"}
                        TitleNumber={"06"}
                      />
                    </Col>
                    <Row>
                      {
                        firstTen.map((portfolio) => <PortfoliosItem Img={`https://developermukti.me/server/${portfolio.photo}`} Title={portfolio.title} Link={portfolio.website} Target={"_blank"} />)
                      }
                    </Row>
                  </Col>
                </Row>
                <Footer />
              </div>
              <Popup />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
