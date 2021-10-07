import { Row, Col } from "react-bootstrap";
import TitleDivider from "../TitleDivider/TitleDivider";

const MyStory = () => {
  return (
    <Row>
      <Col lg={12}>
        <TitleDivider DividerTitle={"My story"} TitleNumber={"01"} />
        <blockquote
        >
          I’m Mukti Ara Passionate at web development. I’m working minimum of 13-14 hours every day, I love to do this it’s my life-everything.
          My goal is to satisfy clients, try to understand what they want for there website, help them from beginning to end the project and give support for every problem.
          If need I communicate by video or audio conversations to understand the problems and project requirements. After completing website and projects I give instructions, How they can manage, edit, update, add page and post on the website by themselves. if needed I send video tutorials.
        </blockquote>
      </Col>
    </Row>
  );
};

export default MyStory;
