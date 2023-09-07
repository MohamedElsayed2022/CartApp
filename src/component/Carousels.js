import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import image from '../component/imges/ecommerce.png'
import image2 from '../component/imges/Online-shopping-retail-adobe_searchsitetablet_520X173.jpg'
import image3 from '../component/imges/ExampleCarouselImage.jpg'


function ControlledCarousel() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  const carouselStyle = {
    boxShadow: '-10px 0 10px -5px rgba(0, 0, 0, 0.5), 10px 0 10px -5px rgba(0, 0, 0, 0.5)'
  };


  return (
    <Carousel activeIndex={index} onSelect={handleSelect} style={carouselStyle }>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"720px"}}
          src={image}
          alt="First slide"
        />
         <Carousel.Caption>
          <h3>E-COMMERCE IS VERY IMPORTANT FOR US</h3>
          <p>It is very easy to use so you can buy something from it</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"720px"}}
          src={image3}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>The website is very important</h3>
          <p>Using it makes it much easier for us to get tired online, so it is much better</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          style={{height:"720px"}}
          src={image2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Available on mobile and laptop</h3>
          <p>All online is the controller of the whole world</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ControlledCarousel;
