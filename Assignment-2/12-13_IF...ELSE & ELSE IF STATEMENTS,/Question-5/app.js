
var n = Math.floor((Math.random() * 1000) + 1);
if (n) {
  var output = "";
  if (n % 3 == 0)
    output += "Rock";
  if (n % 5 == 0)
    output += "star";
  prompt(output || n);
}
