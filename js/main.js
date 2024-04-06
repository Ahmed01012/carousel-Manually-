var prev= document.querySelector(".prev");
let next= document.querySelector('.next');

next.addEventListener('click', function(){
    let slide = document.querySelectorAll('.slide');
    document.querySelector('.slider').appendChild(slide[0]);
})
prev.addEventListener('click', function(){
    let slide = document.querySelectorAll('.slide');
    document.querySelector('.slider').prepend(slide[slide.length -1]);
})