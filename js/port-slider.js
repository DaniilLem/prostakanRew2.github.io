const btnPortLeft = document.querySelector('.port-left-arrow');
const btnPortRight = document.querySelector('.port-right-arrow');
const sliderItemsTxT = document.querySelector('.txt-portfolio-slider').children;
const sliderItemsImg = document.querySelector('.img-portfolio-slider').children;
const sliderPortLength = sliderItemsImg.length;
let motionPortIndex = 0;

btnPortLeft.addEventListener('click', ( ) => {
    previousItem();
});


btnPortRight.addEventListener('click', ( ) => {
    nextItem();
});

function nextItem() {
    
    sliderItemsTxT[motionPortIndex].classList.remove('dpBlock');
    sliderItemsImg[motionPortIndex].classList.remove('dpBlock');

    if((motionPortIndex == sliderPortLength-1)  ){
        motionPortIndex = 0;
    }

    else {
        motionPortIndex++ ;
    }
    
    sliderItemsTxT[motionPortIndex].classList.add('dpBlock');
    sliderItemsImg[motionPortIndex].classList.add('dpBlock');
    console.log('next');
}

function previousItem() {
    
    sliderItemsTxT[motionPortIndex].classList.remove('dpBlock');
    sliderItemsImg[motionPortIndex].classList.remove('dpBlock');

    if((motionPortIndex == 0)  ){
        motionPortIndex = sliderPortLength-1;
    }

    else {
        motionPortIndex-- ;
    }

    sliderItemsTxT[motionPortIndex].classList.add('dpBlock');
    sliderItemsImg[motionPortIndex].classList.add('dpBlock');
}