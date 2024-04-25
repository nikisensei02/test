import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image1 from './image1.jpeg';
import image2 from './image2.jpeg';
import image3 from './image3.jpeg';
import image4 from './image4.jpeg';

const Home = () => {
  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000, // 2 seconds per slide
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000 // 2 seconds autoplay interval
  };

  return (
    <div className='relative overflow-hidden'>
      {/* Carousel */}
      <div className="absolute bottom-10 left-20 right-20">
        <div className="w-70vw mx-auto">
          <Slider {...settings}>
            <div>
              <img src={image1} alt="Slide 1" className="carousel-image w-full" />
            </div>
            <div>
              <img src={image2} alt="Slide 2" className="carousel-image w-full" />
            </div>
            <div>
              <img src={image3} alt="Slide 3" className="carousel-image w-full" />
            </div>
            <div>
              <img src={image4} alt="Slide 4" className="carousel-image w-full" />
            </div>
          </Slider>
        </div>
      </div>

      {/* Sliding cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
        
      </div>
    </div>
  );
}

export default Home;
