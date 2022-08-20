// Thay doi Navbar khi quan xuong

window.addEventListener('scroll' , () => {
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
})


//An hien bang FAQ

const faqs = document.querySelectorAll('.faq');

faqs.forEach(faq => {
    faq.addEventListener('click', () => {
        faq.classList.toggle('open');

        //Thay doi icon dong mo 

        const icon = faq.querySelector('.faq__icon i');
        if(
            icon.className === 'fa-solid fa-plus'
        ) {
            icon.className = "fa-solid fa-minus"
        } else {
            icon.className = "fa-solid fa-plus"
        }
    })
})

// Slider 
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    //khi do to cua window >= 600px
    breakpoints: {
        600: {
            slidesPerView: 2,
        }
    }
  });


  // Open menu 

  const menu = document.querySelector(".nav__menu");
  const menuBtn = document.querySelector("#open-menu-btn");
  const closeBtn = document.querySelector("#close-menu-btn");

  menuBtn.addEventListener('click', () => {
    menu.style.display ="flex";
    closeBtn.style.display = "inline-block";
    menuBtn.style.display = "none";
  })

  // Close menu

  const closeNav = () => {
    menu.style.display ="none";
    closeBtn.style.display = "none";
    menuBtn.style.display = "inline-block";
  }

  closeBtn.addEventListener('click', closeNav )

