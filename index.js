gsap.registerPlugin(ScrollTrigger);



// gsap.from(".container", {
//     x: 10000,
//     duration: 0.5,
//     ease: "power1.inOut",
//     scrollTrigger: ".container"
// })




gsap.from(".gallery > img", 1, {
    scale: 0.1, 
    y: 100,
    ease: "power1.inOut",
    delay: .2,
    stagger: {
      amount: .5, 
      grid: "auto",
      from: "end"
    },
    scrollTrigger: ".gallery"
  });


