document.addEventListener(`DOMContentLoaded`, function(){

  window.addEventListener(`scroll`,function(){
    const scrollTopData = window.scrollY;
    console.log(scrollTopData)

    const headOne = document.querySelector(`.h_1`);
    const headerArea = document.querySelector(`.header_area`);

    if(scrollTopData >= 100){
      headOne.classList.add(`active`)
      headerArea.classList.add(`active`)
    } else {
      headOne.classList.remove(`active`);
      headerArea.classList.remove(`active`);
    }

  });

    var swiper = new Swiper(".mySwiper1", {
        loop: true,
        speed: 1500,
        slidesPerView: "auto",
        navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
        },
        autoplay: {
        delay: 3000,
        disableOnInteraction: false }
    });

    var swiper = new Swiper(".mySwiper2", {
        slidesPerView: "auto",
        spaceBetween: 20,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });
  
});