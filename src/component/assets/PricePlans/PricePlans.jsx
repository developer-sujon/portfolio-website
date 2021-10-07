import React from "react";
import TitleDivider from "../TitleDivider/TitleDivider";
import PlansItem from "./PlansItem";
import {Row, Col} from "react-bootstrap";

const PricePlans = () => {
  return (
    <Row>
      <Col lg={12}>
        <TitleDivider DividerTitle={"Price plans"} TitleNumber={"04"} />
      </Col>
      <PlansItem
        PriceTitle={"Silver"}
        Price={"15"}
        listOne={"3 Page"}
        listTwo={"Design Customization"}
        lisThree={"Responsive Design"}
        listFour={"Include Source Code"}
        listDeactivaOne={"Speed Optimation "}
        listDeactivatwo={"Content Upload"}
        listDeactiva={"trm-label-light"}
        OrderLink={"#trm-order"}
        OrderText={"Order now"}
      />
      <PlansItem
        PriceTitle={"Platinum"}
        Price={"50"}
        listOne={"10 Page"}
        listTwo={"Design Customization"}
        lisThree={"Responsive Design"}
        listFour={"Include Source Code"}
        listFive={"Speed Optimation "}
        listSix={"Content Upload"}
        listDeactiva={"trm-label-light"}
        OrderLink={"#trm-order"}
        OrderText={"Order now"}
      />
    </Row>
  );
};

export default PricePlans;
