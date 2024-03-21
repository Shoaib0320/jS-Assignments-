// function integer(a,b)

var a = prompt("Enter Value 1")
var b = prompt("Enter Value 2")


{

    if (a > 0 && b > 0 && a > b) {
      alert("The larger number is " + a );
    } else if (a > 0 && b > 0 && a < b) {
      alert("The larger number is " + b);
    } else if (a === b && a > 0 && b > 0) {
      alert("Both numbers are equal!")
    } else {
        alert("Please add an integer!");
  
    }
  }
  
//   integer(-1,-1);