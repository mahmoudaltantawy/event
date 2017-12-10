// Header Slider ( Fade IN / Out )

 var swiper = new Swiper('.s1', {
        pagination: '.s1 .swiper-pagination',
        paginationClickable: true,
        nextButton: '.s1 .swiper-button-next',
        prevButton: ' .s1.swiper-button-prev',
        spaceBetween: 30,
        effect: 'fade',
        autoplay: 7500,
    });

$(document).ready(function() {
  $('select').niceSelect();
  
});



// start mix

var container = document.querySelector('[data-ref="container"]');
            var inputSearch = document.querySelector('[data-ref="input-search"]');
            var keyupTimeout;

            var mixer = mixitup(container, {
                animation: {
                    duration: 350
                },
                callbacks: {
                    onMixClick: function() {
                        // Reset the search if a filter is clicked

                        if (this.matches('[data-filter]')) {
                            inputSearch.value = '';
                        }
                    }
                }
            });

            // Set up a handler to listen for "keyup" events from the search input

            inputSearch.addEventListener('keyup', function() {
                var searchValue;

                if (inputSearch.value.length < 3) {
                    // If the input value is less than 3 characters, don't send

                    searchValue = '';
                } else {
                    searchValue = inputSearch.value.toLowerCase().trim();
                }

                // Very basic throttling to prevent mixer thrashing. Only search
                // once 350ms has passed since the last keyup event

                clearTimeout(keyupTimeout);

                keyupTimeout = setTimeout(function() {
                    filterByString(searchValue);
                }, 350);
            });

            /**
             * Filters the mixer using a provided search string, which is matched against
             * the contents of each target's "class" attribute. Any custom data-attribute(s)
             * could also be used.
             *
             * @param  {string} searchValue
             * @return {void}
             */

            function filterByString(searchValue) {
                if (searchValue) {
                    // Use an attribute wildcard selector to check for matches

                    mixer.filter('[class*="' + searchValue + '"]');
                } else {
                    // If no searchValue, treat as filter('all')

                    mixer.filter('all');
                }
            }



  // suggested events
    var swiper = new Swiper('.s2 ', {
        pagination: ' .s2 .swiper-pagination',
        nextButton: '.s2 .swiper-button-next',
        prevButton: '.s2  .swiper-button-prev',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
         // Responsive breakpoints
    breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        }
    }
    });


   // popular_venues
     var swiper = new Swiper('.s3 ', {
        pagination: ' .s3 .swiper-pagination',
        nextButton: '.s3 .swiper-button-next',
        prevButton: '.s3  .swiper-button-prev',
        slidesPerView: 3,
        paginationClickable: true,
        spaceBetween: 30,
         // Responsive breakpoints
    breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
        },
        // when window width is <= 999px
        999: {
            slidesPerView: 2,
            spaceBetweenSlides: 50
        }
    }
    });

     // latest_posts
     var swiper = new Swiper('.s4 ', {
        pagination: ' .s4 .swiper-pagination',
        nextButton: '.s4 .swiper-button-next',
        prevButton: '.s4  .swiper-button-prev',
        slidesPerView: 2,
        paginationClickable: true,
        spaceBetween: 30,
         // Responsive breakpoints
    breakpoints: {
        // when window width is <= 499px
        499: {
            slidesPerView: 1,
            spaceBetweenSlides: 50
        },
        
    }
    });

     // testmonials
     var swiper = new Swiper('.s5 ', {
        pagination: ' .s5 .swiper-pagination',
        nextButton: '.s5 .swiper-button-next',
        prevButton: '.s5  .swiper-button-prev',
        slidesPerView: 1,
        paginationClickable: true,
        spaceBetween: 30
    });


     // --------------------------------------------start page Event --------------------------



   var stat = document.getElementById("statistics");
    var to = stat.offsetTop;
    var scroll = $(document).scrollTop();
   

$(document).ready(function(){
$(window).scroll(function(){

    if ( scroll >= to) {
     $('.timer').countTo().countTo('restart');
    } 

});
  
    
   

   
 
});

     