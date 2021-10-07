import TitleDivider from "../TitleDivider/TitleDivider";
import ServicesList from "./ServicesList";
import {Row, Col} from "react-bootstrap";

const Services = () => {
  return (
    <Row>
      <Col lg={12}>
        <TitleDivider DividerTitle={"My Services"} TitleNumber={"03"} className={"trm-mt-40"}/>
      </Col>
      <ServicesList
        imgIcon={"img/icons/icon-1.svg"}
        imgsvg={"img/icons/icon-1w.svg"}
        Title={"Web Design & Development"}
        Description={
          "We make design as per your requirement and then develop the website focusing on Html5 ..."
        }
        OrderLink={"#trm-order"}
        OrderText={"Order now"}
      />
      <ServicesList
        imgIcon={"img/icons/icon-2.svg"}
        imgsvg={"img/icons/icon-2w.svg"}
        Title={"Web Application Development"}
        Description={
          "We are expert in codeigniter, cakephp, laravel, node.js, mysql, oracle, mongodb, latest ..."
        }
        OrderLink={"#trm-order"}
        OrderText={"Order now"}
      />
      <ServicesList
        imgIcon={"img/icons/icon-3.svg"}
        imgsvg={"img/icons/icon-3w.svg"}
        Title={"News Portal Development"}
        Description={
          "We are expert in News Portal Responsive Website Design & Development"
        }
        OrderLink={"#trm-order"}
        OrderText={"Order now"}
      />
      <ServicesList
        imgIcon={"img/icons/icon-4.svg"}
        imgsvg={"img/icons/icon-4w.svg"}
        Title={"CMS Site Migration"}
        Description={
          "It's very common that you website is hacked, actually we take care site security ..."
        }
        OrderLink={"#trm-order"}
        OrderText={"Order now"}
      />
    </Row>
  );
};

export default Services;
