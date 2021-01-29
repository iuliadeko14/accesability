window.addEventListener('DOMContentLoaded', function(){

    let burger = document.querySelector('#burger');

    
    burger.addEventListener('click', function(){
        burger.classList.toggle('open');
        document.querySelector('#nav').classList.toggle('open-menu')
    })

    var mySwiper = new Swiper('.swiper-container', {
        // Optional parameters
      
        loop: true,
      
        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
          clickable: true
        },
      
        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      
        // And if we need scrollbar
       
      })
})