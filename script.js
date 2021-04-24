

document.querySelector('.theme-butt').addEventListener("click", themeToggle);
let displayTheme = false;
function themeToggle() {
  let d = !displayTheme;
  if (d) {
    displayTheme = d;
    document.querySelector('.theme-rap').style.display = "unset";
  } else {
    displayTheme = d;
    document.querySelector('.theme-rap').style.display = "none";
  }
}

document.getElementById('original').addEventListener("click", function () {
  document.documentElement.style.setProperty('--th', '#fff6f6');
  document.documentElement.style.setProperty('--view', '#7d3cff');
  document.documentElement.style.setProperty('--demoItem', '#ff5555');
  document.documentElement.style.setProperty('--text', '#000');
  document.documentElement.style.setProperty('--f', '#ff5555');
  document.documentElement.style.setProperty('--c1', '#ffce42');
  document.documentElement.style.setProperty('--c2', '#7d3cff');
  document.documentElement.style.setProperty('--c3', '#ff5555');
  document.documentElement.style.setProperty('--bl', '#000');
  document.documentElement.style.setProperty('--wh', '#ffffff');
});



document.getElementById('dark-blue').addEventListener("click", function () {
  document.documentElement.style.setProperty('--th', '#2d3d8a');
  document.documentElement.style.setProperty('--view', '#2d3d8a');
  document.documentElement.style.setProperty('--text', '#e9eaeb');
  document.documentElement.style.setProperty('--demoItem', '#5faebe');
  document.documentElement.style.setProperty('--f', '#2f4293');
  document.documentElement.style.setProperty('--c1', '#5faebe');
  document.documentElement.style.setProperty('--c2', '#f1575a');
  document.documentElement.style.setProperty('--c3', '#d4a03b');
  document.documentElement.style.setProperty('--bl', '#171818');
  document.documentElement.style.setProperty('--wh', '#e9eaeb');
});

//------------------------------------------------------------------------------------------


document.getElementById("page").onload = function () {
  let pageView=0;
  randomText("text-2")



  const countEl1 = document.getElementById('count1');

  updateVisitCount();

  function updateVisitCount() {
    fetch('https://api.countapi.xyz/update/peral-git/count/?amount=1')
      .then(res => res.json())
      .then(res => {
        pageView = res.value;
        console.log(pageView)
        var n = pageView.toString();
        console.log(n)
        var a =n.length
        console.log(a)
        countEl1.innerHTML = parseInt(n.charAt(a-1));
        document.getElementById('count2').innerHTML = parseInt(n.charAt(a-2));
       
      })
  }
};


function randomText(id) {
  const theLetters = "abcdefghijklmnopqrstuvwxyz#%&^+=-";
  let word = document.getElementById(id)
  let w = word.textContent
  let speed = 80;
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



//----------------------------------