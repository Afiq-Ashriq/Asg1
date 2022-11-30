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



  const dc = document.getElementById('display');

  function thankYou() {
      document.getElementById('message').style.display = 'block'
      document.getElementById('useremail').value = ""
  
  }

  const phoneview = window.matchMedia('(max-width: 600px)')
  function sweaters() {
    document.getElementById('Merch').style.display = 'none'
    var type = document.querySelectorAll('.Merch')
    if (phoneview) {
      type[1].style.display = 'flex'
    }
    else {
      type[1].style.display = 'grid'
    }
  }


