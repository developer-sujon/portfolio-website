import { Col } from "react-bootstrap";
const BlogList = ({ Img, category, Title, Date, Time, Author }) => {
    return (
      <Col lg={6}>
        <div
          className="trm-blog-card"
        >
          <a href="/blog" className="trm-cover-frame trm-anima-link">
            <img src={Img} alt="cover" />
          </a>
          <div className="trm-card-descr">
            <div className="trm-label trm-category trm-mb-20">
              <a href="#.">{category}</a>
            </div>
            <h5 className="trm-mb-20">
              <a href="/blog" className="trm-anima-link">
                {Title}
              </a>
            </h5>
            <div className="trm-divider trm-mb-20 trm-mt-20" />
            <ul className="trm-card-data trm-label">
              <li>{Date}</li>
              <li>{Time}</li>
              <li>{Author}</li>
            </ul>
          </div>
        </div>
      </Col>
    );
  };
  
  export default BlogList;