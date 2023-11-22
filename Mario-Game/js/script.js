const mario = document.querySelector('.mario');
const pipe = document.querySelector('.pipe');
const fim = document.querySelector('.fim');

const jump = () => {
    mario.classList.add('jump');

    setTimeout(() => {

        mario.classList.remove('jump');

    }, 500);
}

const loop = setInterval(() => {

    const pipePosition = pipe.offsetLeft;
    const marioPosition = +window.getComputedStyle(mario).bottom.replace('px', '');
    
    if (pipePosition <= 119 && pipePosition > 0 && marioPosition < 80){

        pipe.style.animation = 'none';
        pipe.style.left = `${pipePosition}px`;

        mario.style.animation = 'none';
        mario.style.bottom = `${marioPosition}px`;

        mario.src = "./IMG/game-over.png";
        mario.style.width = '175px'
        mario.style.marginLeft = '50px'

        clearInterval(loop);
        
    }
    

}, 10);

document.addEventListener('keydown', jump);