const btnLeft = document.querySelector('.left-arrow');
const btnRight = document.querySelector('.right-arrow');
const slider = document.querySelector('.main-slider');
const sliderItems = document.querySelector('.main-slider').children;
const sliderLength = sliderItems.length;
let motionIndex = 0;

btnLeft.addEventListener('click', () => {
    priviousImg();
});

btnRight.addEventListener('click', () => {
    nextImg();
});

function nextImg (){

    sliderItems[motionIndex].classList.remove('dBlock');
    console.log('next');

    if((motionIndex == 2)  ){
        motionIndex = 0;
    }

    else {
        motionIndex++ ;
    }

    sliderItems[motionIndex].classList.add('dBlock');
    console.log(sliderItems[motionIndex])

}

function priviousImg (){

    sliderItems[motionIndex].classList.remove('dBlock');

    if(motionIndex == 0){
        motionIndex = 2;
    }

    else {
        motionIndex-- ;
    }

    sliderItems[motionIndex].classList.add('dBlock');

}