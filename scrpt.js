const list = document.querySelector(".navlist");

let shop = document.querySelectorAll("#shop");

const hamburger = document.querySelector(".fa-bars");

hamburger.addEventListener("click", function (dets) {
    hamburger.classList.toggle("fa-x");
    list.classList.toggle("navlist-active");
});

shop.addEventListener("click", function(){
    
})