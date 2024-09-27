function loading() {
    const tl = gsap.timeline();

    tl.to("#yellow1", {
        top: "-100%", 
        duration: 0.5,
        delay: 0.5,  
        ease: "expo.out"
    });

    tl.from("#yellow2", {
        top: "100%",
        duration: 0.7,
        delay: 0.6,  
        ease: "expo.out"
    }, "anim");

    tl.to("#loader h1", {
        color: "black",
        duration: 0.7,
        delay: 0.6
    }, "anim");

    tl.to("#loader", {
        opacity: 0,
        duration: 0.5,  
    });

    tl.to("#loader", {
        display: "none",
        duration: 0 
    });
}

loading();

const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'), 
    smooth: true 
});

var elem = document.querySelectorAll(".elem");
var page2 = document.querySelector(".page2");

elem.forEach(function(e) {
    e.addEventListener("mouseenter", function() {
        var bgimg = e.getAttribute("data-img");
        page2.style.backgroundImage = `url('${bgimg}')`;  // Fixed string interpolation
    });
});

document.querySelector("#footer h2").addEventListener("click", () => {
    scroll.scrollTo(0);
});
