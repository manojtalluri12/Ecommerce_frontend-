import Carousel from "react-bootstrap/Carousel";

function UncontrolledExample() {
  return (
    <Carousel className="cors">
      <Carousel.Item>
        <img
          src="https://cdn.dummyjson.com/product-images/1/thumbnail.jpg"
          alt="uu"
          className="cimg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://cdn.dummyjson.com/product-images/2/thumbnail.jpg"
          alt="uu"
          className="cimg"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="https://cdn.dummyjson.com/product-images/4/thumbnail.jpg"
          alt="uu"
          className="cimg"
        />
      </Carousel.Item>
    </Carousel>
  );
}

export default UncontrolledExample;
