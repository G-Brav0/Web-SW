const button = document.querySelector('#btn');
const card = document.querySelector('.card');

let CardUp = false;
button.addEventListener('click', () => {
    if (CardUp) {
        card.style.transform = 'translateY(0)';
        card.style.transition = 'transform 0.7s ease-in-out'; 
    } 
    else {
        card.style.transform = 'translateY(-100%)';
        card.style.transition = 'transform 0.7s ease-in-out';
        // alert('Just please know that what I have here is only with good intentions :)');
        // alert('Hi, you\'ve been on my mind lately. Hopefully, I can get to know you more :)');
    }

    CardUp = !CardUp;
});