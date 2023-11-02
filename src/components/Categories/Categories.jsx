import { useState, useMemo } from 'react';
import { useWindowSize } from "@uidotdev/usehooks";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import { Category } from "./Category";
import { categories } from "./categoriesData";
import plant from '../../assets/images/plant.svg';
import { Button } from '../Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

export const Categories = () => {
  const [swiper, setSwiper] = useState(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const { width = 0 } = useWindowSize();

  const handleNextClick = () => {
    if (swiper) swiper.slideNext();
  };

  const handlePreviousClick = () => {
    if (swiper) swiper.slidePrev();
  };

  const slidesPerView = useMemo(() => {
    if (width >= 1200) {
      return 4;
    }

    if (width >= 768) {
      return 3;
    }

    if (width >= 640 && width < 1200) {
      return 2;
    }

    return 1;
  }, [width]);

  return (
    <section className='px-10 lg:max-w-7xl mx-auto  flex flex-col pb-24 items-center' id='categories'>
      <h3 className="text-accent-color text-2xl">Soap</h3>
      <h2 className="text-dark-color text-4xl font-bold mt-2">Categories<span className="text-accent-color">.</span></h2>
      <img src={plant} className="h-8 mt-8" />
      <p className="text-trand-color text-xl mt-5 mb-10">Here you will find different types of homemade soaps.</p>

      <div className="flex items-center w-full mb-8">
        {slidesPerView < 4 && (<button
          disabled={activeSlide === 0}
          onClick={handlePreviousClick}
          className="text-trand-color hover:text-dark-color"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>)}

        <Swiper
          modules={[Autoplay]}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          spaceBetween={20}
          slidesPerView={slidesPerView}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
        >
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Category category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
        {slidesPerView < 4 && (<button
          disabled={activeSlide === categories.length - slidesPerView}
          onClick={handleNextClick}
          className="text-trand-color hover:text-dark-color"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>)}
      </div>
      <Button text='Shop' link='#shop' />
    </section >
  )
}