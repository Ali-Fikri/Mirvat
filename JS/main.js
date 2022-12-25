let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let mirvat = document.querySelector('.mirvat')

window.onscroll = function() {
    let value = scrollY;
    stars.style.left = `${value}px`;
    moon.style.top = `${value * 3}px`;
    mountains3.style.top = `${value * 2}px`;
    mountains4.style.top = `${value * 1.5}px`;
    river.style.top = `${value}px`;
    boat.style.top = `${value}px`;
    boat.style.left = `${value * 3}px`;
    mirvat.style.fontSize = `${value}px`;
    if (value >= 107) {
        mirvat.style.fontSize = `107px`;
        if (value >= 480) {
            mirvat.style.display = `none`;
        } else {
            mirvat.style.display = `block`;
        }
        if (value >= 170) {
            document.querySelector('.main').style.background = 'linear-gradient(#376281, #10001f)';
        } else {
            document.querySelector('.main').style.background = 'linear-gradient(#200016, #10001f)'
        }
    }
}