
// Header scroll

window.onscroll = function(){
    scrollFunction()
};

function scrollFunction(){
    let scrollPos = 200;
   let header = document.querySelector('.header');

   if(document.body.scrollTop > scrollPos || document.documentElement.scrollTop > scrollPos){
    header.classList.add('active');
   } else {
    header.classList.remove('active');
   }
}



// Burger


const burger = document.querySelector('.header__burger');


if (burger) {
    const menu = document.querySelector('.nav__items');

    burger.addEventListener('click', function (e) {
        document.body.classList.toggle('lock');
        burger.classList.toggle('active');
        menu.classList.toggle('active');
    })

}

//  Time (footer)


function date_time(){
    var current_datetime = new Date();
    var year =  current_datetime.getFullYear();
    return year;
}
document.getElementById('date').innerHTML = date_time();
console.log(document.getElementById('date'))