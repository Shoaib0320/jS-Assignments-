var hour=prompt("What is the current hour? ","");

if( hour >= 6 && hour <= 9 ){
  alert("Breakfast is served.");
}
else if( hour >=11  && hour <= 13 ){
  alert("Time for lunch.");
}
else if( hour >=17  && hour <= 20 ){
  alert("It's dinner time.");
}
else {
  alert("Sorry, you'll have to wait, or go get snack.");
}