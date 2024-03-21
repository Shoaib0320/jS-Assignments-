// function CheckPassword(inputtxt) 
// { 
// var passw= prompt ("Entar Password")+/^[A-Za-z]\w{7,14}$/;
// if(inputtxt.value.match(passw)) 
// { 
// alert('Correct, try another...')
// return true;
// }
// else{ 
// alert('Wrong...!')
// return false;
// }
// }


function verifyPassword() {  
    var pw = document.getElementById("pswd").value;  
    //check empty password field  
    if(pw == "") {  
       document.getElementById("message").innerHTML = "**Fill the password please!";  
       return false;  
    }  
     
   //minimum password length validation  
    if(pw.length < 8) {  
       document.getElementById("message").innerHTML = "**Password length must be atleast 8 characters";  
       return false;  
    }  
    
  //maximum length of password validation  
    if(pw.length > 15) {  
       document.getElementById("message").innerHTML = "**Password length must not exceed 15 characters";  
       return false;  
    } else {  
       alert("Password is correct");  
    }  
  }  

  document.write(pw)