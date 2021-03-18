
document.getElementById("page").onload = function () {
    randomText("text-2")
    randomText("text-3")
    randomText("text-4")
    randomText("text-5")

};
var interval = null;
document.getElementById("text-2").onmouseover = function () {
    interval = setInterval(randomEffect, 100);

};
document.getElementById("text-2").onmouseleave = function () {
    clearInterval(interval);
    document.getElementById('text-2').innerText = ('Hello')

};

function randomText(id) {
    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
    let word = document.getElementById(id)
    let w = word.textContent
    let speed = 50;
    let increment = 5;

    let si = 0;
    let count = 0;
    let block = "";
    let fixed = "";

    (function r(i) {
        setTimeout(function () {
            if (--i) { r(i); }
            nextFrame(i);
            si = si + 1;
        }, speed);
    })(w.length * increment + 1);
    function nextFrame(pos) {
        for (let i = 0; i < w.length - count; i++) {
            let num = Math.floor(theLetters.length * Math.random());
            let letter = theLetters.charAt(num);
            block = block + letter;
        }
        if (si == (increment - 1)) {
            count++;
        }
        if (si == increment) {
            fixed = fixed + w.charAt(count - 1);
            si = 0;
        }
        document.getElementById(id).innerText = (fixed + block)
        block = "";
    }
}

var randomEffect = function () {
    var randomString = '';
    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
    const word = document.getElementById('text-2')
    const w = word.textContent
    var randomString = '';
    let w_length = w.length;
    for (var i = 0; i < w_length; i++) {
        var rnum = Math.floor(Math.random() * theLetters.length);
        randomString += theLetters.substring(rnum, rnum + 1);
    }
    word.innerText = (randomString);
}

//----------------------------------


const body = document.querySelector('body')
const toggleSwitch = document.querySelector('.switch')

toggleSwitch.addEventListener('click', () => {
    body.classList.toggle('dark-theme')
})

//-----------------------------------------

