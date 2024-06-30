document.addEventListener('DOMContentLoaded', () => {
    const sun = document.querySelector('.sun');
    const king = document.querySelector('.king');
    const queen = document.querySelector('.queen');
    const knight = document.querySelector('.knight');
    const pawn = document.querySelector('.pawn');

    sun.style.animation = 'riseSun 2s ease-out';
    king.style.animation = 'riseChessPieces 1.5s ease-out 0.5s forwards';
    queen.style.animation = 'riseChessPieces 1.5s ease-out 0.5s forwards';

    setTimeout(() => {
        knight.style.animation = 'tiltPieces 1s ease-in-out forwards';
        pawn.style.animation = 'tiltPieces 1s ease-in-out forwards';
    }, 1000);
});

let brElements = document.querySelectorAll(':has(> br)')
