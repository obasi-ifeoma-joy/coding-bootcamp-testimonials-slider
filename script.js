//variables
let chevronLeft = document.getElementById('prev-btn');
let chevronRight = document.getElementById('next-btn');
let prev = document.getElementById('john-prev-btn')
let next = document.getElementById('john-next-btn')
let john = document.querySelector('div.john');
let tanya = document.querySelector('div.tanya')
let content = document.querySelector('div .content p')
console.log(content)
//slide buttons functionality

chevronRight.addEventListener('click', function(){
if(tanya.classList.contains('show')){
    tanya.classList.remove('show')
    tanya.classList.add('hide')
    
    if(john.classList.contains('hide')){
        john.classList.remove('hide')
        john.classList.add('show');
    }
}
})

prev.addEventListener('click', function(){
    if(john.classList.contains('show')){
        john.classList.remove('show');
        john.classList.add('hide');

        if(tanya.classList.contains('hide')){
            tanya.classList.remove('hide');
            tanya.classList.add('show');
        }
    }
})

