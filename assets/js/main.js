document.addEventListener("DOMContentLoaded", function() {
    // declare Variable
    var button = document.querySelectorAll('.button-slider ul li');
    var itemSlide = document.querySelectorAll('.slide-items');
    var intervalTime = setInterval(function() { autoslide() }, 4000);
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', function() {
            clearInterval(intervalTime);
            for (let j = 0; j < button.length; j++) {
                button[j].classList.remove('button--active');
            }
            this.classList.add('button--active');
            // location - current Slide
            var currentSlide = this;
            var positionSlide = 0;
            for (positionSlide = 0; currentSlide = currentSlide.previousElementSibling; positionSlide++) {}
            // console.log(positionSlide);
            for (var s = 0; s < itemSlide.length; s++) {
                itemSlide[s].classList.remove('slide-items--active');
                itemSlide[positionSlide].classList.add('slide-items--active');
            }
        }); //click-function
    } //for-button

    // Auto-Slide
    function autoslide() {
        var positionSlide = 0;
        var currentSlide = document.querySelector('.slide-items--active');
        for (positionSlide = 0; currentSlide = currentSlide.previousElementSibling; positionSlide++) {}
        // console.log(positionSlide);
        if (positionSlide < (itemSlide.length - 1)) {
            for (var i = 0; i < itemSlide.length; i++) {
                itemSlide[i].classList.remove('slide-items--active');
                button[i].classList.remove('button--active');
            }
            itemSlide[positionSlide].nextElementSibling.classList.add('slide-items--active');
            button[positionSlide].nextElementSibling.classList.add('button--active');
        } else {
            for (var i = 0; i < itemSlide.length; i++) {
                itemSlide[i].classList.remove('slide-items--active');
                button[i].classList.remove('button--active');
            }
            itemSlide[0].nextElementSibling.classList.add('slide-items--active');
            button[0].nextElementSibling.classList.add('button--active');
        }
    }




}); //main