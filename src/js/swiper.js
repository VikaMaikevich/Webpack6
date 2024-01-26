window.addEventListener('DOMContentLoaded', () => {
  
      const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;
        
    
        breakpoint = window.matchMedia(breakpoint);
    
        const enableSwiper = function(className, settings) {
          swiper = new Swiper(className, settings);
    
          if (callback) {
            callback(swiper);
          }
        }
    
        const checker = function() {
          if (breakpoint.matches) {
            return enableSwiper(swiperClass, swiperSettings);
          } else {
            if (swiper !== undefined) swiper.destroy(true, true);
            return;
          }
        };
    
        breakpoint.addEventListener('change', checker);
        checker();
      }
    
      const someFunc = (instance) => {
        if (instance) {
          instance.on('slideChange', function (e) {
            console.log('*** mySwiper.activeIndex', instance.activeIndex);
          });
        }
      };
    
      resizableSwiper("(max-width: 767px)", ".slider1", {
          loop: false,
          spaceBetween: 16,
          slidesPerView: 1.3,
          initialSlide: 0,
          centeredSlidesBounds: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1.3,
            },
            360: {
              slidesPerView: 1.5 
             },
           450:{ 
              slidesPerView: 2,
          },
           550:{
              slidesPerView: 2.5, 
          },
           650:{ 
              slidesPerView: 3,
          },
           700:{ 
              slidesPerView: 4,
          }},
        });

      resizableSwiper("(max-width: 767px)", ".slider2", {
          loop: false,
          slidesPerView: "auto",
          spaceBetween: 16,
          slidesPerView: 1.3,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1.3,
            },
            360: {
              slidesPerView: 1.5 
             },
           450:{ 
              slidesPerView: 2,
          },
           550:{
              slidesPerView: 2.5, 
          },
           650:{ 
              slidesPerView: 3,
          },
           700:{ 
              slidesPerView: 4,
          }},
        });
        resizableSwiper("(max-width: 767px)", ".slider3", {
          loop: false,
          spaceBetween: 16,
          slidesPerView: 1.3,
          initialSlide: 0,
          centeredSlidesBounds: true,
          pagination: {
            el: ".swiper-pagination",
            clickable: true,
          },
          breakpoints: {
            320: {
              slidesPerView: 1.3,
            },
            360: {
              slidesPerView: 1.5 
             },
           450:{ 
              slidesPerView: 2,
          },
           550:{
              slidesPerView: 2.5, 
          },
           650:{ 
              slidesPerView: 3,
          },
           700:{ 
              slidesPerView: 4,
          }},
        });
  });