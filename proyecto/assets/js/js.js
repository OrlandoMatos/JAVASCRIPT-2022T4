const btn = document.querySelector('.btn')
const header = document.querySelector('.header')


function evento(){
    btn.classList.toggle('rotacion')
    header.classList.toggle('active');
};

btn.addEventListener('click', evento);