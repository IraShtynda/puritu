import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import {products} from './products';
import { ProductCard } from './ProductCard';

export const Shop = () => {
  return (
    <section className='max-w-7xl mx-auto flex flex-col pb-24 pt-24 items-center' id='shop'>
        <h3 className="text-accent-color text-2xl">Shop</h3>
        <h2 className="text-dark-color text-4xl font-bold mt-2">Start Your Skincare today<span className="text-accent-color">.</span></h2>
        <img src='/images/plant.svg' className="h-8 mt-8" />
        <p className="text-trand-color text-xl mt-5 mb-10">Select the soap you like and add it to the shopping cart.</p>

      <div className="flex items-center w-full">
        <Swiper
          modules={[Autoplay]}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          loop={true}
          slidesPerView={4}
          spaceBetween={20}
        >
          {products.map((product) => (
            <SwiperSlide key={product.id}>
              <ProductCard product={product} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section >
  )
}