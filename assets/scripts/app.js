

const menuToggler = document.querySelector('.menu-toggler');
const menuWrapper = document.querySelector('.navbar__wrapper');

$(menuToggler).on('click', function (event) {
    $(menuWrapper).toggleClass('navbar__wrapper--active');
    $(this).toggleClass('menu-toggler--active');
})



// const lenis = new Lenis()
// lenis.on('scroll', (e) => { })
// function raf(time) {
//     lenis.raf(time)
//     requestAnimationFrame(raf)
// }

// requestAnimationFrame(raf)