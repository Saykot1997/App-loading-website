//================= video popup ===================

const playBtn = document.querySelector(".video-play-btn");
const closeBtn = document.querySelector(".video-close");
const videoPopup = document.querySelector(".video-popup");
const player1 = document.querySelector("#player1");

const videoLink = player1.src;

playBtn.addEventListener('click', function () {

    videoPopup.style.visibility = "visible"
    player1.src = videoLink;
})

closeBtn.addEventListener('click', function () {

    videoPopup.style.visibility = "hidden"
    player1.src = "";
})


//===================== Nav scroll function ====================

const navbar = document.querySelector('.navbar');


window.addEventListener('scroll', function () {

    if (window.scrollY > 0) {
        navbar.classList.add('scroll');
    } else {
        navbar.classList.remove('scroll');
    }
})

// ====================== navbar collaps ========================

// const navlink = document.querySelectorAll('.nav-item .nav-link');

// const navbarCollapse = document.querySelector('.navbar-collapse');

// const navbarToggler = document.querySelector('.navbar-toggler');

// navbarToggler.addEventListener('click',function(){
    
//     navbarCollapse.style.display = "block"
// })

// Array.from(navlink).forEach(function (e) {

//     e.addEventListener('click', function () {
//         navbarCollapse.style.display = "none"
//     })
// })



// ======================= owl carosual ===========================

$(document).ready(function () {

    /*feature carousal */

    $('.feature-carosual').owlCarousel({

        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,

            }
        }
    })

    /*app-screen carousal */

    $('.app-screen-carousel').owlCarousel({

        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 3,

            },
            1000: {
                items: 4,

            }
        }
    })

    // testimonial caruosal

    $('.testimonial-carousal').owlCarousel({

        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,

            }
        }
    })


    // team caruosal

    $('.team-member-carousal').owlCarousel({

        loop: true,
        margin: 0,
        autoplay: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: true
            },
            600: {
                items: 2,

            },
            1000: {
                items: 3,

            }
        }
    })

    // scrollit

    $.scrollIt({
        topOffset: -50
    });




})