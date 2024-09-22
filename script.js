let tl =gsap.timeline();

gsap.from("#first h1",{
    y: -100,
    duration: 0.4,
    scale:" 1.2",
    opacity:0,
    backgroundColor:"red",
    scrollTrigger:{
        scroller:"body",
        trigger:"#first",
            markers:true,
            start:"top 50% ",
            end:"top 40% ",
        // pin:true,
        // scrub:1,
    }
})