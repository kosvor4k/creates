const buttonRight = document.querySelector('.button-right');
const buttonLeft = document.querySelector('.button-left');
const firstFeedback = document.querySelector('.first-feedback');
const secondFeedback = document.querySelector('.second-feedback');
const thirdFeedback = document.querySelector('.third-feedback');

buttonRight.addEventListener('click', function(){
    if (firstFeedback.classList.contains('feedback-active')) {
        firstFeedback.classList.remove('feedback-active');
        firstFeedback.classList.add('left-feedback-not-active');
        secondFeedback.classList.remove('right-feedback-not-active');
        secondFeedback.classList.add('feedback-active');
        thirdFeedback.classList.remove('left-feedback-not-active');
        thirdFeedback.classList.add('right-feedback-not-active');
    } else if (secondFeedback.classList.contains('feedback-active')) {
        secondFeedback.classList.remove('feedback-active');
        secondFeedback.classList.add('left-feedback-not-active');
        thirdFeedback.classList.remove('right-feedback-not-active');
        thirdFeedback.classList.add('feedback-active');
        firstFeedback.classList.remove('left-feedback-not-active');
        firstFeedback.classList.add('right-feedback-not-active');
    } else {
        thirdFeedback.classList.remove('feedback-active');
        thirdFeedback.classList.add('left-feedback-not-active');
        firstFeedback.classList.remove('right-feedback-not-active');
        firstFeedback.classList.add('feedback-active');
        secondFeedback.classList.remove('left-feedback-not-active');
        secondFeedback.classList.add('right-feedback-not-active');
    }
});

buttonLeft.addEventListener('click', function(){
    if (firstFeedback.classList.contains('feedback-active')) {
        firstFeedback.classList.remove('feedback-active');
        firstFeedback.classList.add('right-feedback-not-active');
        thirdFeedback.classList.remove('left-feedback-not-active');
        thirdFeedback.classList.add('feedback-active');
        secondFeedback.classList.remove('right-feedback-not-active');
        secondFeedback.classList.add('left-feedback-not-active');
    } else if (secondFeedback.classList.contains('feedback-active')) {
        secondFeedback.classList.remove('feedback-active');
        secondFeedback.classList.add('right-feedback-not-active');
        firstFeedback.classList.remove('left-feedback-not-active');
        firstFeedback.classList.add('feedback-active');
        thirdFeedback.classList.remove('right-feedback-not-active');
        thirdFeedback.classList.add('left-feedback-not-active');
    } else {
        thirdFeedback.classList.remove('feedback-active');
        thirdFeedback.classList.add('right-feedback-not-active');
        secondFeedback.classList.remove('left-feedback-not-active');
        secondFeedback.classList.add('feedback-active');
        firstFeedback.classList.remove('right-feedback-not-active');
        firstFeedback.classList.add('left-feedback-not-active');
    }
});