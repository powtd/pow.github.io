
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
    const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-"; //You can customize what letters it will cycle through
    let word = document.getElementById(id)
    let w = word.textContent // Your text goes here
    let speed = 50; // ms per frame
    let increment = 8; // frames per step. Must be >2

    let si = 0;
    let count = 0;
    let block = "";
    let fixed = "";
    //Call self x times, whole function wrapped in setTimeout
    (function r(i) {
        setTimeout(function () {
            if (--i) { r(i); }
            nextFrame(i);
            si = si + 1;
        }, speed);
    })(w.length * increment + 1);
    function nextFrame(pos) {
        for (let i = 0; i < w.length - count; i++) {
            //Random number
            let num = Math.floor(theLetters.length * Math.random());
            //Get random letter
            let letter = theLetters.charAt(num);
            block = block + letter;
        }
        if (si == (increment - 1)) {
            count++;
        }
        if (si == increment) {
            // Add a letter; 
            // every speed*10 ms
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

const perv = document.querySelector('#perv')
const next = document.querySelector('#next')
var demox = 0, demoy = 1

var demo_count = 0;
const pic_src = ['src/random.png', 'src/door.png', 'src/face-1.png', 'src/face-2.png', 'src/face-3.png', 'src/face-4.png']
const a_src = ['https://codepen.io/peralP/pen/WNoZPpa', 'https://codepen.io/peralP/pen/VwmMazz']
perv.addEventListener('click', () => {
    if (demo_count == 0) {
        demox = pic_src.length - 2
        demoy = pic_src.length - 1
        document.querySelector('#demo-1').setAttribute('src', pic_src[demox]);
        document.querySelector('#demo-2').setAttribute('src', pic_src[demoy]);
        demo_count = pic_src.length / 2 - 1;
    } else {
        demox -= 2
        demoy -= 2
        document.querySelector('#demo-1').setAttribute('src', pic_src[demox]);
        document.querySelector('#demo-2').setAttribute('src', pic_src[demoy]);
        demo_count--

    }

})
next.addEventListener('click', () => {
    if (demo_count == pic_src.length / 2 - 1) {
        demox = 0
        demoy = 1
        document.querySelector('#demo-1').setAttribute('src', pic_src[demox]);
        document.querySelector('#demo-2').setAttribute('src', pic_src[demoy]);
        demo_count = 0;
    } else {
        demox += 2
        demoy += 2
        document.querySelector('#demo-1').setAttribute('src', pic_src[demox]);
        document.querySelector('#demo-2').setAttribute('src', pic_src[demoy]);
        demo_count++

    }
})
