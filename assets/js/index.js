// jQuery
$(document).ready(function () {

    if ($('#table_id').length) {
        $('#table_id').DataTable({
            // paging: false,
            ordering: false,
            info: false,
            searchBar: false
        });
    }

    $('.wb-items').owlCarousel({
        items: 1,
        margin: 0,
        loop: true,
        nav: true,
        navText: ["<span class='arrow left'></span>", "<span class='arrow right'></span>"],
        navText: [
            '<svg viewBox="0 0 24 24" width="40">' +
            '<path d="M0 0h24v24H0z" fill="none"></path>' +
            '<path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>' +
            '</svg>'
            ,
            '<svg viewBox="0 0 24 24" width="40">' +
            '<path d="M0 0h24v24H0z" fill="none"></path>' +
            '<path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>' +
            '</svg>'
        ],
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayHoverPause: true,
        stagePadding: 0,
        dots: true,
        responsive: {
            430: {

            },
            576: {

            },
            768: {

            },
            992: {

            },
            1200: {

            },
        }
    });
    $('.bb-slider').owlCarousel({
        items: 3,
        margin: 0,
        loop: true,
        nav: true,
        navText: ["<span class='arrow left'></span>", "<span class='arrow right'></span>"],
        navText: [
            '<svg viewBox="0 0 24 24" width="40">' +
            '<path d="M0 0h24v24H0z" fill="none"></path>' +
            '<path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>' +
            '</svg>'
            ,
            '<svg viewBox="0 0 24 24" width="40">' +
            '<path d="M0 0h24v24H0z" fill="none"></path>' +
            '<path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>' +
            '</svg>'
        ],
        navText: [
            '<img src="assets/images/icons/arrow-left.svg" />'
            ,
            '<img src="assets/images/icons/arrow-left.svg" />'
        ],
        autoplay: true,
        autoplay: false,
        autoplayTimeout: 30000,
        autoplayHoverPause: true,
        stagePadding: 0,
        dots: false,
        responsive: {
            430: {

            },
            576: {
                items: 4,
                nav: false
            },
            // 768: {

            // },
            // 992: {

            // },
            // 1200: {

            // },
        }
    });
    if ($('.jt-items').length) {
        $('.jt-items').owlCarousel({
            items: 1,
            margin: 25,
            loop: true,
            nav: true,
            navText: ["<span class='arrow left'></span>", "<span class='arrow right'></span>"],
            navText: [
                '<svg viewBox="0 0 24 24" width="40">' +
                '<path d="M0 0h24v24H0z" fill="none"></path>' +
                '<path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>' +
                '</svg>'
                ,
                '<svg viewBox="0 0 24 24" width="40">' +
                '<path d="M0 0h24v24H0z" fill="none"></path>' +
                '<path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>' +
                '</svg>'
            ],
            navText: [
                '<img src="assets/images/icons/arrow-left.svg" />'
                ,
                '<img src="assets/images/icons/arrow-left.svg" />'
            ],
            autoplay: false,
            autoplay: false,
            autoplayTimeout: 30000,
            autoplayHoverPause: true,
            stagePadding: 30,
            dots: false,
            responsive: {
                430: {

                },
                600: {
                    // nav: false
                    items: 2,
                    stagePadding: 0
                },
                768: {
                    items: 2,
                    margin: 0

                },
                992: {
                    items: 3,
                    stagePadding: 0,
                },
                1200: {
                    stagePadding: 0,
                    items: 4
                },
            }
        });
    }
    if ($('.for-mobile .owl-carousel').length) {
        $('.for-mobile .owl-carousel').owlCarousel({
            items: 1,
            margin: 15,
            loop: true,
            nav: true,
            navText: ["<span class='arrow left'></span>", "<span class='arrow right'></span>"],
            navText: [
                '<svg viewBox="0 0 24 24" width="40">' +
                '<path d="M0 0h24v24H0z" fill="none"></path>' +
                '<path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>' +
                '</svg>'
                ,
                '<svg viewBox="0 0 24 24" width="40">' +
                '<path d="M0 0h24v24H0z" fill="none"></path>' +
                '<path d="M8.59,16.59L13.17,12L8.59,7.41L10,6l6,6l-6,6L8.59,16.59z"></path>' +
                '</svg>'
            ],
            navText: [
                '<img src="assets/images/icons/arrow-left.svg" />'
                ,
                '<img src="assets/images/icons/arrow-left.svg" />'
            ],
            autoplay: true,
            autoplayTimeout: 30000,
            autoplayHoverPause: true,
            stagePadding: 25,
            dots: false
        });
    }
    if ($('.classment-logos .logos').length) {
        $('.classment-logos .logos').owlCarousel({
            items: 2,
            margin: 15,
            loop: true,
            nav: false,
            autoplay: true,
            autoplayTimeout: 1800,
            autoplayHoverPause: true,
            // stagePadding: 0,
            dots: false,
            responsive: {
                384: {
                    items: 3
                },
                576: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });
    }
    if ($('.right .slider-items').length) {
        $('.right .slider-items').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: true,
        });
    }
    if ($('.testimonial-items').length) {
        $('.testimonial-items').owlCarousel({
            items: 1,
            margin: 22,
            loop: true,
            autoplay: true,
            autoplayTimeout: 3000,
            autoplayHoverPause: true,
            dots: false,
            nav: true,
            navText: [
                '<img src="assets/images/icons/arrow-left.svg" />'
                ,
                '<img src="assets/images/icons/arrow-left.svg" />'
            ],
            responsive: {
                0: {

                },
                992: {
                    stagePadding: 100
                },
                1200: {
                    stagePadding: 150
                }
            }
        });
    }
    if ($('.test-start-body .slider-items').length) {
        $('.test-start-body .slider-items').owlCarousel({
            items: 1,
            loop: true,
            autoplay: true,
            autoplayTimeout: 2500,
            autoplayHoverPause: true,
            dots: true,
            nav: false
        });
    }
});



// $('.video-play-button').magnificPopup({
//     type: 'iframe'
// });

// Javascript
document.addEventListener('DOMContentLoaded', function () {


    // Header
    !function () {
        function CustomHeader(header = document.querySelector('header'), maxWidth = 1199) {

            this.eventListeners = function () {
                var headerBrand = header.querySelector('.header__brand');
                var menuIcon = header.querySelector('.menu__icon');
                var nav = header.querySelector('.header__nav');
                menuIcon.addEventListener('click', function () {

                    header.classList.toggle('active');

                    headerBrand.classList.toggle('header__brand--active');
                    nav.classList.toggle('header__nav--active');
                    this.classList.toggle('menu__icon--active');
                    if (nav.classList.contains('header__nav--active')) {
                        nav.style.setProperty('--nav-height', 'calc(100vh - ' + headerBrand.offsetHeight + 'px)')
                    }
                });
            }

            this.init = function () {
                // if (window.innerWidth <= maxWidth) {
                this.eventListeners();
                // }
            }
            this.init();
        }
        var header = document.querySelector('header');
        if (!header) return;
        new CustomHeader();

        // Megamenu
        !function () {
            var megaMenuItems = Array.from(document.querySelectorAll('.mega-menu'));
            // console.log(megaMenuItems)
            megaMenuItems = megaMenuItems.map(function (item) { return item.parentElement });
            if (!megaMenuItems.length) return;

            megaMenuItems.forEach(function (item) {
                item.addEventListener('click', function () {
                    if (window.innerWidth >= 1200) return;
                    var link = this.firstElementChild;
                    console.log();
                    if (event.target !== link) return;
                    this.classList.toggle('mega-menu-active');
                    event.preventDefault();

                    // Show Hide Header Bottom bar
                    var bottomBar = document.querySelector('header .social-icons');
                    console.log(bottomBar);
                    if (!bottomBar) return;
                    if (this.classList.contains('mega-menu-active')) {
                        bottomBar.classList.add('d-none');
                        this.style.borderBottomWidth = 0;
                        // console.log(this);
                    } else {
                        bottomBar.classList.remove('d-none');
                        this.style.borderBottomWidth = '1px';
                    }
                })
            })

        }();
    }();

    // FAQ Accordion
    !function () {
        function CustomAccordion(container) {
            this.buttons = container.querySelectorAll('.accordion__title');
            this.contents = container.querySelectorAll('.accordion__content');
            this.currentIndex = 0;
            let length = this.buttons.length


            this.showContent = function () {
                for (let i = 0; i < length; i++) {
                    if (i !== this.currentIndex) {
                        this.contents[i].style.height = 0;
                        this.buttons[i].classList.remove('accordion__title--active')
                    } else {
                        this.contents[i].style.height = this.contents[i].firstElementChild.offsetHeight + 'px';
                        this.buttons[i].classList.toggle('accordion__title--active')
                    }
                }
            }
            this.events = function () {
                for (let i = 0; i < length; i++) {
                    this.buttons[i].addEventListener('click', function () {
                        this.currentIndex = i;


                        // Accordin Slide-Y Toggle
                        this.showContent();
                        var nextElement = event.currentTarget.nextElementSibling;
                        var height = nextElement.offsetHeight;
                        if (height > 0) {
                            nextElement.style.height = 0;
                        } else {
                            nextElement.style.height = nextElement.firstElementChild.offsetHeight + 'px';
                        }
                    }.bind(this))
                }
            }
            this.reset = function () {
                // this.getContent();
                this.showContent();
                this.events()
            }
            this.init = function () {
                this.reset();
            }
            this.init();
        }
        // Accordion Setup 
        const accordionContainer = document.querySelectorAll('.custom-accordion');

        // console.log(accordionContainer)
        if (!accordionContainer.length) return
        for (let i = 0; i < accordionContainer.length; i++) {
            new CustomAccordion(accordionContainer[i]);
        }
    }();

    //  Create Account Checkbox 
    !function () {
        var button = document.querySelector('.create-account .middle-button label');
        // console.log(button);
        if (!button) return;
        console.log(button);
        button.addEventListener('click', function () {
            this.parentElement.classList.toggle('active');
        })
    }();

    // Footer 
    !function () {
        var button = document.querySelector('footer .links .widget-title');
        if (!button) return;
        button.addEventListener('click', function () {
            this.parentElement.classList.toggle('active');
        })
    }();

    // Candidates Table Arrow 
    !function () {
        setTimeout(function () {
            var paginate = document.querySelector('.candidates-table #table_id_paginate');
            if (!paginate) return;

            var func = function () {
                var prev = document.querySelector('.candidates-table #table_id_paginate .previous');
                var next = document.querySelector('.candidates-table #table_id_paginate .next');
                prev.innerHTML = next.innerHTML = '<img src="assets/images/icons/arrow-left-2.svg" />'
            }
            func();

            paginate.addEventListener('click', function (e) {
                e.preventDefault();
                func();
            })
        }, 1500);

    }();

})

