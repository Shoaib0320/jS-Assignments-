var findVowel = function(letter) {

  var vowels = ["a", "e", "i", "o", "u"];
  
  for(var i in vowels){
  
      if(letter === i){
          return true;
      } else {
          return false;
      }
  }
  
  };
  
  findVowel("e");