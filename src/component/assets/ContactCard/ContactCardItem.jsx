import { Col } from "react-bootstrap";
const ContactCardItem = ({
  imgIcon,
  imgsvg,
  Speach,
  MethudOne,
  MethudTwo,
  PhoneOne,
  PhoneTwo,
  EmailOne,
  EmailTwo,
}) => {
  return (
    <Col lg={6}>
      <div className="trm-service-icon-box trm-scroll-animation trm-active-el">
        <div className="trm-service-content">
          <div className="trm-icon">
            <img src={imgIcon} alt="icon" className="trm-black-icon" />
            <img src={imgsvg} alt="icon" className="trm-white-icon" />
          </div>
          <h6 className="trm-mb-20">{Speach}</h6>
          <div className="trm-mb-15">
            <span className="trm-label">{MethudOne}</span>{" "}
            <span className="trm-text-sm">
              {PhoneOne ? PhoneOne : EmailOne}
            </span>
          </div>
          <div>
            <span className="trm-label">{MethudTwo}</span>{" "}
            <span className="trm-text-sm">
              {PhoneTwo ? PhoneTwo : EmailTwo}
            </span>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default ContactCardItem;
