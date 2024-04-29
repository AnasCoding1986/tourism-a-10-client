import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Banner = () => {
  return (
    <Swiper
      modules={[ Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('a')}
      loop={true}
    >
      <SwiperSlide>
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url(https://i.ibb.co/tq0wqMy/1-png.jpg)" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div data-aos="zoom-in" data-aos-duration="1500" className="text-center text-white">
              <h1 className="text-5xl font-caveatBrush font-bold mb-4">Explore Your Dream Destinations</h1>
              <p className="text-lg">Discover breathtaking landscapes and immersive cultural experiences</p>
              <div className="flex justify-center gap-10 mt-5">
                <button className="btn btn-secondary border-none bg-[#FF6347]">Start Exploring</button>
                <button className="btn btn-secondary border-none bg-[#1f1d1c]">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url(https://i.ibb.co/QKcnRcy/2-png.jpg)" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div data-aos="zoom-in" data-aos-duration="1500" className="text-center text-white">
              <h1 className="text-5xl font-caveatBrush font-bold mb-4">Adventure Awaits</h1>
              <p className="text-lg">Embark on thrilling journeys and adrenaline-pumping activities</p>
              <div className="flex justify-center gap-10 mt-5">
                <button className="btn btn-secondary border-none bg-[#FF6347]">Start Exploring</button>
                <button className="btn btn-secondary border-none bg-[#1f1d1c]">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url(https://i.ibb.co/Ks87Khx/3-png.jpg)" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div data-aos="zoom-in" data-aos-duration="1500" className="text-center text-white">
              <h1 className="text-5xl font-caveatBrush font-bold mb-4">Escape to Paradise</h1>
              <p className="text-lg">Relax and rejuvenate in serene retreats and tranquil environments</p>
              <div className="flex justify-center gap-10 mt-5">
                <button className="btn btn-secondary border-none bg-[#FF6347]">Start Exploring</button>
                <button className="btn btn-secondary border-none bg-[#1f1d1c]">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative bg-cover bg-center h-96" style={{ backgroundImage: "url(https://i.ibb.co/6PTS3Yv/4-png.jpg)" }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div data-aos="zoom-in" data-aos-duration="1500" className="text-center text-white">
              <h1 className="text-5xl font-caveatBrush font-bold mb-4">Create Lasting Memories</h1>
              <p className="text-lg">Make unforgettable moments in extraordinary destinations</p>
              <div className="flex justify-center gap-10 mt-5">
                <button className="btn btn-secondary border-none bg-[#FF6347]">Start Exploring</button>
                <button className="btn btn-secondary border-none bg-[#1f1d1c]">Contact Us</button>
              </div>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>

  );
}

export default Banner;
