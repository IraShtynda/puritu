import { useState, useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import {products} from './products';
import { ProductCard } from './ProductCard';
import plant from '../../assets/images/plant.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { useWindowSize } from "@uidotdev/usehooks";

export const Shop = () => {
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
    <section className='px-10 lg:max-w-7xl mx-auto flex flex-col pb-24 pt-24 items-center' id='shop'>
        <h3 className="text-accent-color text-2xl">Shop</h3>
        <h2 className="text-dark-color text-4xl font-bold mt-2 text-center">Start Your Skincare today<span className="text-accent-color">.</span></h2>
        <img src={plant} className="h-8 mt-8" />
        <p className="text-trand-color text-xl mt-5 mb-10 text-center">Select the soap you like and add it to the shopping cart.</p>

      <div className="flex items-center w-full">
      {slidesPerView < 4 && (<button
          disabled={activeSlide === 0}
          onClick={handlePreviousClick}
          className="text-trand-color hover:text-dark-color"
        >
          <FontAwesomeIcon icon={faChevronLeft} />
        </button>)}

        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={slidesPerView}
          spaceBetween={20}
          onSlideChange={(swiper) => setActiveSlide(swiper.activeIndex)}
          onSwiper={(swiper) => {
            setSwiper(swiper);
          }}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>

        {slidesPerView < 4 && (<button
          disabled={activeSlide === products.length - slidesPerView}
          onClick={handleNextClick}
          className="text-trand-color hover:text-dark-color"
        >
          <FontAwesomeIcon icon={faChevronRight} />
        </button>)}
      </div>
    </section >
  )
}