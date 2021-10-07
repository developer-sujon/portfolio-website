import { Row, Col } from "react-bootstrap";
import TitleDivider from "../TitleDivider/TitleDivider";
import emailjs from "emailjs-com";
import { useState } from "react";

const ContactForm = () => {
  const [inputField, setInputField] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errorsInput, setErrorsInput] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [sendEmailMsg, SetSendEmailMsg] = useState({
    successMessage: "",
    errorMsgClass: false,
    successMsgClass: false,
  });
  const changeHandler = (event) => {
    setInputField({ ...inputField, [event.target.name]: event.target.value });
    if (event.target.name === "name") {
      if (event.target.value === "") {
        setErrorsInput({
          name: "Please input Your Name",
        });
      } else {
        setErrorsInput({
          name: "",
        });
      }
    }
    if (event.target.name === "email") {
      if (event.target.value === "") {
        errorsInput.email = "Please input Your Email";
      } else if (!/\S+@\S+\.\S+/.test(event.target.value)) {
        setErrorsInput({
          email: "Please input Valid Email",
        });
      } else {
        setErrorsInput({
          email: "",
        });
      }
    }

    if (event.target.name === "message") {
      if (event.target.value === "") {
        setErrorsInput({
          message: "Please input Your Message",
        });
      } else {
        setErrorsInput({
          message: "",
        });
      }
    }
  };

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hf4tlco",
        "template_2vv8uih",
        e.target,
        "user_rlfVDLN66eOdhJo1dNSP8"
      )
      .then(
        (result) => {
          SetSendEmailMsg({
            successMessage: "Message has been Successfully Send",
            successMsgClass: true,
          });
        },
        (error) => {
          SetSendEmailMsg({
            successMessage: "Failed to Send Your Message",
            errorMsgClass: true,
          });
        }
      );
  };

  return (
    <Row>
      <div className="col-lg-12">
        <TitleDivider DividerTitle={"Get in touch"} TitleNumber={"02"} />
      </div>
      <Col>
        <div className="trm-contact-card">
          <form onSubmit={sendEmail}>
            <input
              className="mb-3"
              type="text"
              placeholder="Name"
              name="name"
              required
              onChange={changeHandler}
              value={inputField.name}
            />
            <p className="mb-3 errorMsg">{errorsInput.name}</p>

            <input
              className="mb-3"
              type="email"
              placeholder="Email"
              name="email"
              required
              onChange={changeHandler}
              value={inputField.email}
            />

            <p className="mb-3 errorMsg">{errorsInput.email}</p>

            <textarea
              className="mb-3"
              rows={6}
              placeholder="Message"
              name="message"
              required
              onChange={changeHandler}
              value={inputField.message}
            />
            <p className="mb-3 errorMsg">{errorsInput.message}</p>
            <input type="submit" style={{ cursor: "pointer" }} />
            <p
              className={`my-3 ${
                sendEmailMsg.errorMsgClass ? "errorMsg" : "successMsg"
              }`}
            >
              {sendEmailMsg.successMessage}
            </p>
          </form>
        </div>
      </Col>
    </Row>
  );
};

export default ContactForm;
