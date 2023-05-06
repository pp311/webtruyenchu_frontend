import React, { useEffect } from 'react'
import { Helmet } from "react-helmet"
export default function Carousel() {
  return (
    <div className="carousel w-full md:h-[350px] lg:h-[400px] xl:h-[500px] 2xl:h-[600px] rounded-xl" id="carouselBox">
      <Helmet>
        <script>
          {`
            function autoslider(numSlides) {
              const carouselBox = document.getElementById('carouselBox');
                if (carouselBox != null) {
                let slide = 0
                setInterval(() => {
                  if (slide >= carouselBox.scrollWidth) {
                    slide = 0;
                  } else {
                    slide += (carouselBox.scrollWidth / numSlides);
                  }
                  carouselBox.scrollLeft = slide;
                }, 4000);   
              }
            }
            autoslider(4);  
          `}
        </script>
      </Helmet>
      <div id="slide1" className="carousel-item relative w-full">
        <img src="https://w0.peakpx.com/wallpaper/352/699/HD-wallpaper-anime-touhou-cirno-touhou.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">❮</a>
          <a href="#slide2" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src="https://i0.wp.com/news.qoo-app.com/en/wp-content/uploads/sites/3/2022/07/touhou-arcadia-record-thumbnail.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">❮</a>
          <a href="#slide3" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src="https://img.gta5-mods.com/q75/images/touhou-loading-screens/563cb2-9a2bcf719ef17f4a480151f3d5896d38.png" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">❮</a>
          <a href="#slide4" className="btn btn-circle">❯</a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src="https://images5.alphacoders.com/590/590950.jpg" className="w-full" />
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">❮</a>
          <a href="#slide1" className="btn btn-circle">❯</a>
        </div>
      </div>
    </div>
  )
}
