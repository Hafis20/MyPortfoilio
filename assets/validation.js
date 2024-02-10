
      function validateForm() {
        var name = document.getElementById("name").value;
        var mobilenumber = document.getElementById("mobilenumber").value;
        var email = document.getElementById("email").value;
        var subject = document.getElementById("subject").value;
        var message = document.getElementById("message").value;
        var msg1 = document.getElementById("msg1")
<<<<<<< HEAD
        
=======

>>>>>>> origin/main
        if (name == "") {
          msg1.innerHTML = "Name must be filled out"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false;
        }

        if (/\d/.test(name)){
          msg1.innerHTML = "Name must be character"
          setTimeout(function(){
                  msg1.innerHTML = ""
                },5000)
          return false
        }

        if (mobilenumber == "") {
<<<<<<< HEAD
          document.getElementById("msg2").innerHTML = "Mobile Number must be filled out"
          setTimeout(function(){
            document.getElementById("msg2").innerHTML = ""
=======
          msg1.innerHTML = "Mobile Number must be filled out"
          setTimeout(function(){
                  msg1.innerHTML = ""
>>>>>>> origin/main
                },5000)
          return false;
        }

        if (isNaN(mobilenumber)){
<<<<<<< HEAD
          document.getElementById("msg2").innerHTML = "Mobile Number must be Digits"
          setTimeout(function(){
            document.getElementById("msg2").innerHTML = ""
=======
          msg1.innerHTML = "Mobile Number must be Digits"
          setTimeout(function(){
                  msg1.innerHTML = ""
>>>>>>> origin/main
                },5000)
          return false
        }

        if (mobilenumber.length<10){
<<<<<<< HEAD
          document.getElementById("msg2").innerHTML = "Mobile Number must have 10 digits"
          setTimeout(function(){
            document.getElementById("msg2").innerHTML= ""
=======
          msg1.innerHTML = "Mobile Number must have 10 digits"
          setTimeout(function(){
                  msg1.innerHTML = ""
>>>>>>> origin/main
                },5000)
          return false
        }

        if (mobilenumber.length>10){
<<<<<<< HEAD
          document.getElementById("msg2").innerHTML = "Mobile Number must have only 10 digits"
          setTimeout(function(){
            document.getElementById("msg2").innerHTML = ""
=======
          msg1.innerHTML = "Mobile Number must have only 10 digits"
          setTimeout(function(){
                  msg1.innerHTML = ""
>>>>>>> origin/main
                },5000)
          return false
        }

        var emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        if (!emailRegex.test(email)) {
<<<<<<< HEAD
          document.getElementById("msg3").innerHTML = "Email must be a valid email address"
          setTimeout(function(){
            document.getElementById("msg3").innerHTML = ""
=======
          msg1.innerHTML = "Email must be a valid email address"
          setTimeout(function(){
                  msg1.innerHTML = ""
>>>>>>> origin/main
                },5000)
          return false;
        }

        if (subject == "") {
<<<<<<< HEAD
          document.getElementById("msg4").innerHTML = "Subject must be filled out"
          setTimeout(function(){
            document.getElementById("msg4").innerHTML = ""
=======
          msg1.innerHTML = "Subject must be filled out"
          setTimeout(function(){
                  msg1.innerHTML = ""
>>>>>>> origin/main
                },5000)
          return false;
        }
  

        if (message == "") {
<<<<<<< HEAD
          document.getElementById("msg5").innerHTML = "Message must be filled out"
          setTimeout(function(){
            document.getElementById("msg4").innerHTML = ""
=======
          msg1.innerHTML = "Message must be filled out"
          setTimeout(function(){
                  msg1.innerHTML = ""
>>>>>>> origin/main
                },5000)
          return false;
        }
        
        return true;
      }
      