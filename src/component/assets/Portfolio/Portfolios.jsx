import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import PortfoliosItem from "./PortfoliosItem";

const Portfolios = () => {
  const [portfolios, setPortfolios] = useState([]);
  useEffect(() => {
    fetch("https://developermukti.me/server/portfolio/json")
      .then((response) => response.json())
      .then((data) => setPortfolios(data));
  }, []);
  return (
    <Row>
     {
       portfolios.map((portfolio) => <PortfoliosItem Img={`https://developermukti.me/server/${portfolio.photo}`} Title={portfolio.title} Link={portfolio.website} Target={"_blank"} />)
     }
    </Row>
  );
};

export default Portfolios;