import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Header from './Header';
import Footer from './Footer';

function Main1() {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <>
    <Header/>
      <div>
        <div className="max-w-4xl mx-auto">
          <Slider {...sliderSettings}>
            <div>
              <img src="https://examstudyexpert.com/wp-content/uploads/2021/07/Motivational-Exam-Quotes-Vidal-Sassoon-1024x724.jpg" alt="Slider Image 1" className="w-full" />
            </div>
            <div>
              <img src="https://quotefancy.com/media/wallpaper/3840x2160/442171-Albert-Einstein-Quote-Never-regard-study-as-a-duty-but-as-the.jpg" alt="Slider Image 2" className="w-full" />
            </div>
            <div>
              <img src="https://onlinestudentlife.com/wp-content/uploads/2023/11/You-wont-always-be-motivated-quote-AM-1024x538.png" alt="Slider Image 3" className="w-full" />
            </div>
          </Slider>
        </div>
        <div className="max-w-4xl mx-auto mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Note</h2>
            <p className="mt-2">Some description about notes...</p>
          </div>
          <div className="bg-white p-4 rounded-md shadow-md">
            <h2 className="text-xl font-semibold">Placement Preparation Notes</h2>
            <p className="mt-2">Some description about placement preparation notes...</p>
          </div>
          {/* Add more cards as needed */}
        </div>
      </div>
      <Footer/>
    </>
  );
}

export default Main1;
