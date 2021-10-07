import Banner from "../../assets/Banner/Banner";
import FixedCard from "../../assets/FixedCard/FixedCard";
import { Container, Row, Col } from "react-bootstrap";
import ContactCard from "../../assets/ContactCard/ContactCard";
import ContactForm from "../../assets/ContactForm/ContactForm";
import Footer from "../../assets/Footer/Footer";

const Contact = () => {
  return (
    <div className="trm-content-start">
      <Banner
        PageImg="img/banner.jpg"
        PageTitle="CONTACT"
        PageHeddingOne="Have a question?"
        PageHeddingTwo="Let's Get in Touch"
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
                <ContactCard />
                <ContactForm />
                <Footer />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
