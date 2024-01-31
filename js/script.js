// let outerheaderwidth = document.getElementById("outerheader").offsetWidth;
// let headcontainer = document.getElementById("headcontainer").offsetWidth;
// let elementwidth = document.getElementById("innerheader").offsetWidth;
// console.log(headcontainer, elementwidth, outerheaderwidth);
// let diferencawidth = (outerheaderwidth - elementwidth) / 2;
// console.log(diferencawidth);
// let elempadd = document.getElementById("header");
// elempadd.style.paddingTop = diferencawidth + "px";
function ifr(arg) {
  let newsrc = arg.children[0].src;
  document.getElementById("previmg").src = newsrc;
  console.log(newsrc);
}
let thumbnails = document.getElementById("thumbnails").children;
let thumbnailsparams = {
  leftparam: 0,
  topparam: -30,
  zindexparam: 0,
  translateparam: 0,
};
let screensize = window.innerWidth;
portfolioparams();
function portfolioparams() {
  if (screensize > 900) {
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].style.left = thumbnailsparams.leftparam + "px";
      thumbnails[i].style.top = thumbnailsparams.topparam + "px";
      thumbnailsparams.leftparam -= 0;
      thumbnailsparams.topparam += 80;
      thumbnailsparams.zindexparam -= 1;
    }
  } else if (screensize > 600) {
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].style.left = thumbnailsparams.leftparam + "px";
      thumbnails[i].style.top = thumbnailsparams.topparam + "px";
      thumbnailsparams.leftparam -= 0;
      thumbnailsparams.topparam += 80;
      thumbnailsparams.zindexparam -= 1;
    }
  } else if (screensize > 300) {
    let thumbnails = document.getElementById("thumbnails").children;
    let thumbnailsparams = {
      leftparam: -20,
      topparam: 0,
      zindexparam: 0,
      translateparam: 0,
    };
    for (let i = 0; i < thumbnails.length; i++) {
      thumbnails[i].style.left = thumbnailsparams.leftparam + "px";
      thumbnails[i].style.top = thumbnailsparams.topparam + "px";
      thumbnailsparams.leftparam += 70;
      thumbnailsparams.topparam += 0;
    }
  }
}
