gsap.registerPlugin(ScrollTrigger);


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

  const dc = document.getElementById('display');


  function thankYou() {
      document.getElementById('message').style.display = 'block'
      document.getElementById('useremail').value = ""
  }







