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
  function Tshirts() {
    var type = document.querySelectorAll('.Merch')
    type[1].style.display = 'none'
    if (phoneview.matches) {
      type[0].style.display = 'flex'
    }
    else {
      type[0].style.display = 'grid'
    }
  }
  function sweaters() {
    var type = document.querySelectorAll('.Merch')
    type[0].style.display = 'none'
    if (phoneview.matches) {
      type[1].style.display = 'flex'
    }
    else {
      type[1].style.display = 'grid'
    }
  }





