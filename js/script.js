var user = document.getElementById("user");
var pass = document.getElementById("pass");

function inicio(){
    if(user.value == "yube" && pass.value == "12345"){      
      /*document.getElementById("info1").style.display="block";*/
      location.href = "iniciar.html";
    }
    else{
   
      alert("estas equivocado")

    }
  } 