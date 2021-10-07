import { Row} from "react-bootstrap";
import StatsList from "./StatsList";

const Stats = () => {
  return (
    <Row>
      <StatsList CounterNumber={50} Title={"Completed projects"} />
      <StatsList CounterNumber={75} Title={"Happy customers"} />
      <StatsList CounterNumber={14} Title={"Honors and Awards"} />
    </Row>
  );
};

export default Stats;