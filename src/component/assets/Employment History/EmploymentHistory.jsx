import { Row, Col } from "react-bootstrap";
import TitleDivider from "../TitleDivider/TitleDivider";
import EmploymentHistoryItem from "./EmploymentHistoryItem";

const EmploymentHistory = () => {
  return (
    <Row>
      <Col lg={12}>
        <TitleDivider DividerTitle={"Employment History"} TitleNumber={"03"} />
      </Col>
      <Col lg={6}>
        <div className="trm-timeline">
          <EmploymentHistoryItem
            Institute="Govt. Akbar Ali College,Sirajganj"
            Date=" Final year Subjec"
            Description="University : National University"
            CertificateName="Bachelor Of Science (B.S.c Hons)"
            Certificate={true}
          />
          <EmploymentHistoryItem
             Institute="Shahjadpur Govt. College,
             Sirajganj."
             Date="2015  GPA- 3.58 (out of 5)"
             CertificateName="Higher Secondary Certificate (H.S.C)
             "
             Certificate={true}
          />
          <EmploymentHistoryItem
             Institute="Muktijoddah Ideal Girl`s High
             School. Shahjadpur, Sirajganj"
             Date="2013  GPA-5.00 (out
              of 5)"
             CertificateName="Secondary School Certificate (S.S.C)
             "
             Certificate={true}
          />
        </div>
      </Col>
      <Col lg={6}>
        <div className="trm-timeline">
          <EmploymentHistoryItem
           Institute="WEB DEVELOPER
           "
           Date="LFWF Academy | December 2020 to present
           "
           Description="Designs and creates software solutions to
           solve pain points for various clients
           Checks feasibility of software prototypes
           Modifies code to fix errors"
          />
          <EmploymentHistoryItem
            Institute="WEB DEVELOPER
            "
            Date="CodeCareBd Feb 2019 - Jun 1019"
            Description="Developed and implemented Website
            Design based on client requirements
            Released ad hoc product patches"
          />
          <EmploymentHistoryItem
            Institute="Web Design"
            Date="Saimon It Mar 2018 - Feb 2019"
            Description="Designs and creates software solutions to
            solve pain points for various clients
            Checks feasibility of software prototypes
            Modifies code to fix errors"
          />
        </div>
      </Col>
    </Row>
  );
};

export default EmploymentHistory;
