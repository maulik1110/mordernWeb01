var crsr=document.querySelector(".cursor")
var blur=document.querySelector(".cursor-blur")

document.addEventListener("mousemove", function(dets){
    // console.log(dets.y);
    crsr.style.left=dets.x+"px"
    crsr.style.top=dets.y+"px"
    blur.style.left=dets.x-200+"px"
    blur.style.top=dets.y-200+"px"
})


var h4all = document.querySelectorAll(".nav h4")
h4all.forEach(function(elem){
    elem.addEventListener("mouseenter", function(){
        crsr.style.scale=3
        crsr.style.border="1px solid #fff"
        crsr.style.backgroundColor=" transparent"
    })

    elem.addEventListener("mouseleave", function(){
        crsr.style.scale=1
        crsr.style.border="1px solid #95c11e"
        crsr.style.backgroundColor=" #95c11e"
    })
})
// document.addEventListener("mousemove", function(dets){
//     // console.log(dets.y);
// })

gsap.to(".nav",{
    backgroundColor: "#000",
    duration: 0.5,
    // delay: 1
    height:"85px",
    scrollTrigger:{
        trigger: ".nav",
        scroller:"body",
        // markers: true,
        start: "top -10%",
        end:"top -21px",
        scrub: 2
    }

})

gsap.to(".main",{
    backgroundColor: "#000",
    scrollTrigger:{
        trigger:".main",
        scroller:"body",
        // markers: true,
        start:"top -25%",
        end: "top -70%",
        scrub: 2,

    }

})


gsap.from(".about-us img, .about-us-text",{

        y:50,
        opacity: 0,
        duration: 1,
        stagger: 0.4,
        scrollTrigger:{
            trigger: ".about-us",
            scroller: "body",
            // markers: true,
            start: "top 60%",
            end: "50%",
            scrub: 1
        }


})

gsap.from(".colon1",{
    y:-70,
    x:-70,
    scrollTrigger:{
        trigger: "colon1",
        scroller: "body",
        start: "top 60%",
        end: "top 45%",
        scrub: 1
    }
})