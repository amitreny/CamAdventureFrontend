// News Blogs Section

$(document).ready(function($) {
    $('.news-blogs-sec').slick({
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 4000,
        arrows: false,
        prevArrow: '<div class="slider-arrow slick-prev"><i class="fa-solid fa-arrow-left"></i></div>',
        nextArrow: '<div class="slider-arrow slick-next"><i class="fa-solid fa-arrow-right"></i></div>',
        responsive: [{
                breakpoint: 1400,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1
                }
            }, {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false

                }
            }
        ]
    });
});

// News Blogs Section

// Header Scroll Fix

document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('header-bar');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});

// Header Scroll Fix



const images = [
    'image/title_tour_img.jpg',
    'image/title_tour_img.jpg',
    'image/title_tour_img.jpg',

];

let currentIndex = 0;

const photo = document.getElementById('photo');
const photoCounter = document.getElementById('photoCounter');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

function updatePhoto() {
    photo.src = images[currentIndex];
    photoCounter.textContent = `${currentIndex + 1} of ${images.length}`;
}

prevBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentIndex > 0) {
        currentIndex--;
        updatePhoto();
    }
});

nextBtn.addEventListener('click', (e) => {
    e.preventDefault();
    if (currentIndex < images.length - 1) {
        currentIndex++;
        updatePhoto();
    }
});

updatePhoto();


document.getElementById("monthInput").addEventListener("input", function(e) {
    this.value = this.value.replace(/[^\d/]/g, "").slice(0, 7);
});

function toggleForm(formType) {
    const loginBtn = document.getElementById("loginBtn");
    const signupBtn = document.getElementById("signupBtn");
    const loginForm = document.getElementById("loginForm");
    const signupForm = document.getElementById("signupForm");

    if (formType === "login") {
        loginBtn.classList.add("active");
        signupBtn.classList.remove("active");
        loginForm.style.display = "block";
        signupForm.style.display = "none";
    } else {
        signupBtn.classList.add("active");
        loginBtn.classList.remove("active");
        signupForm.style.display = "block";
        loginForm.style.display = "none";
    }
}