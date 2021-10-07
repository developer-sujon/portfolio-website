import { Row } from "react-bootstrap";
import ContactCardItem from "./ContactCardItem";
const ContactCard = () => {
  return (
    <Row>
      <ContactCardItem
        imgIcon="img/icons/icon-5.svg"
        imgsvg="img/icons/icon-5w.svg"
        Speach="Call"
        MethudOne="Work:"
        MethudTwo="Personal:"
        PhoneOne=" +8801706-851992"
        PhoneTwo=" +8801706-851992"
      />
      <ContactCardItem
        imgIcon="img/icons/icon-6.svg"
        imgsvg="img/icons/icon-6w.svg"
        Speach="Wright"
        MethudOne="Email:"
        MethudTwo="linkedin:"
        EmailOne=":mukti.mr1996@gmail.com"
        EmailTwo="/developer-mukti"
      />
    </Row>
  );
};

export default ContactCard;
