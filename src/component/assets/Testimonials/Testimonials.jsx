import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonialsItem from "./TestimonialsItem";

const Testimonials = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      className="swiper-container trm-testimonials-slider"
    >
      <div className="swiper-wrapper">
        <Carousel responsive={responsive}>
          <TestimonialsItem
            img={"img/testimonials/1.jpg"}
            name={"Wata"}
            position={"Interior designer"}
            description={
              "hafizusama1 was fast, skillful in designs, good communication/understood what i wanted. I am very satisfied and will ask him for other jobs for sure! Highly recommend."
            }
          />
          <TestimonialsItem
            img={"img/testimonials/2.jpg"}
            name={"Paul Freeman"}
            position={"Seo HavenIt"}
            description={
              "Cannot speak highly enough of this designer! Communication & delivery were very fast and extra requests were completed same day. He went above and beyond to make the website exactly how I wanted it to look and I’m extremely happy with the service I was provided. 5 stars will definitely use again, & would highly recommend!"
            }
          />

          <TestimonialsItem
            img={"img/testimonials/3.jpg"}
            name={"Viktoria Newman"}
            position={"Model"}
            description={
              "I really appreciate Asfand's patience and attention to detail. Our project was complicated to say the least and Asfand worked closely with us every step of the way so that we ended up with an outstanding website."
            }
          />
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
