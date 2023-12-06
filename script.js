
let valueDisplays = document.querySelectorAll(".num")
let interval = 4000;

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));
    let duration = Math.floor(interval / endValue)
    let counter = setInterval(function () {
        startValue += 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(counter)
        }
    });
});


window.addEventListener("scroll", function(){
    var navbar = document.querySelector("header");
    navbar.classList.toggle("sticky", window.scrollY > 0);
})