let header_menu = document.querySelector('.header__menu');
let header_burger = document.querySelector('.header__burger');
let body = document.body


if (header_menu && header_burger){
   header_burger.addEventListener('click', () => {
      header_menu.classList.toggle('active')
      header_burger.classList.toggle('active')
      body.classList.toggle('lock')
   })

   header_menu.querySelectorAll('.header__link').forEach(link => {
      link.addEventListener('click', () => {
         header_menu.classList.remove('active')
         header_burger.classList.remove('active')
         body.classList.remove('lock')
      })
   }) 
}

/* SLIDER */

const sliderBody = document.querySelector('.slider__body')
const dots = document.querySelectorAll('.slider__btn')

const thisSlide = (index) => {

   for(let dot of dots){
      dot.classList.remove('active')
   }
   
   dots[index].classList.add('active')
}


dots.forEach( (dot, index) => {
   dot.addEventListener('click', () =>{
      if(index == 0){
         sliderBody.style.left = 0
         thisSlide(index)
      } else if (index == 1){
         sliderBody.style.left = -100 + '%'
         thisSlide(index)
      } else {
         sliderBody.style.left = -200 + '%'
         thisSlide(index)
      }
   })
})

/* ПЛАВНЫЙ СКОРЛ */

const anchors = document.querySelectorAll('a[href*="#"]')

anchors.forEach(anchors =>{
   anchors.addEventListener('click', event =>{
      event.preventDefault();
      
      

      const blogID = anchors.getAttribute('href').substring(1)
      
      document.getElementById(blogID).scrollIntoView({
         behavior: 'smooth',
         block: 'start'
      })
   })
})
