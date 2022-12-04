// Thank you message when email is entered and submitted
  function thankYou() {
      let userinput = document.getElementById('useremail').value
      if (userinput != "") {
        document.getElementById('message').style.display = 'block'
        document.getElementById('useremail').value = ""
      }

  }



// Function to calculate the score and print out the necessary messages.
  const submitbtn = document.getElementById("sub")
  let score = 0;
  submitbtn.addEventListener("click",calculateScore);
  function calculateScore() {
      const maxqns = 5;
      let name = document.getElementById("name").value;
      let answers = []
      // find value of checked radio buttons and add them to an array
      var q1 = document.querySelector('input[name = q1]:checked').value;
      var q2 = document.querySelector('input[name = q2]:checked').value;
      var q3 = document.querySelector('input[name = q3]:checked').value;
      var q4 = document.querySelector('input[name = q4]:checked').value;
      var q5 = document.querySelector('input[name = q5]:checked').value;
      answers.push(q1);
      answers.push(q2);
      answers.push(q3);
      answers.push(q4);
      answers.push(q5);

      // check if the values in array match ans and score will be calculated
      for (let i = 0; i < answers.length; i++) {
          if (answers[i] == "Ans") {
          score++
      }
      }
      var message = ""
      if (score > (maxqns/2))
      {
          message = "You are a Rammstein fan"
      }
      else if (score < (maxqns/2)) {
          message = "You are not a rammstein fan"
      }
  
      var score_card = document.getElementById("score");
      score_card.innerHTML = `${name}, you got ${score}/${maxqns} <br> ${message}`;
      score = 0;


      document.getElementById("quiz-form").style.display = "none"
      document.getElementById("score-card").style.display = "block"

  } 







