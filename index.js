gsap.registerPlugin(ScrollTrigger);

gsap.from("#firstline", {
    x: -10000,
    delay: 0.2,
    duration: 2,
    yoyo: true,
    scrollTrigger: "#firstline"
})

gsap.from(".container", {
    x: 10000,
    delay: 0.2,
    duration: 2,
    yoyo: true,
    scrollTrigger: ".container"
})


gsap.from(".albums", {
    y: -200,
    delay: 0.2,
    duration: 2,
    yoyo: true,
    scrollTrigger: ".albums"
})


gsap.from(".gallery > img", 1, {
    scale: 0.1, 
    y: 100,
    ease: "power1.inOut",
    delay: 1,
    stagger: {
      amount: 1.5, 
      grid: "auto",
      from: "end"
    },
    scrollTrigger: ".gallery"
  });


