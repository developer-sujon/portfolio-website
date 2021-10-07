import TitleDivider from "../../assets/TitleDivider/TitleDivider";
import BlogList from "./BlogList";
import { Row, Col } from "react-bootstrap";
const Blog = () => {
  return (
    <Row>
      <Col lg={12}>
        <TitleDivider DividerTitle={"Latest Publications"} TitleNumber={"06"} />
      </Col>
        <BlogList
          Img={"img/blog/b1.jpg"}
          category={"Lifestyle"}
          Title={" Create your own beauty blog with Trueman"}
          Date={"17 JULYS"}
          Time={"14:32"}
          Author={"Emma T."}
        />
      <BlogList
          Img={"img/blog/b7.jpg"}
          category={"Lifestyle"}
          Title={" Create your own beauty blog with Trueman"}
          Date={"17 JULYS"}
          Time={"14:32"}
          Author={"Emma T."}
        />
    </Row>
  );
};

export default Blog;