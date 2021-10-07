const TestimonialsItem = ({ img, name, position, description }) => {
  return (
    <div className="swiper-slide">
      <div
        className="trm-testimonial-card"
        data-swiper-parallax
        data-swiper-parallax-scale=".8"
        data-swiper-parallax-opacity={0}
        data-swiper-parallax-duration={800}
      >
        <div className="trm-testimonial-author">
          <img src={img} alt="Client" />
          <h6 className="trm-mb-15">{name}</h6>
          <div className="trm-text-sm trm-accent-color">
            <i>{position}</i>
          </div>
        </div>
        <div className="trm-testimonial-text">
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsItem;
