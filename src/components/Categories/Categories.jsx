import { Swiper, SwiperSlide } from 'swiper/react';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import { Category } from "./Category";
import { categories } from "./categoriesData";
import plant from '../../assets/images/plant.svg';

export const Categories = () => {
  return (
    <section className='max-w-7xl mx-auto flex flex-col pb-24 items-center' id='categories'>
        <h3 className="text-accent-color text-2xl">Soap</h3>
        <h2 className="text-dark-color text-4xl font-bold mt-2">Categories<span className="text-accent-color">.</span></h2>
        <img src={plant} className="h-8 mt-8" />
        <p className="text-trand-color text-xl mt-5 mb-10">Here you will find different types of homemade soaps.</p>

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
          {categories.map((category) => (
            <SwiperSlide key={category.id}>
              <Category category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section >
  )
}