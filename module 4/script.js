
(function(){

var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];


for (var i in names) {
  
  if (names[i][0]=="J" || names[i][0]=="j") {

    byeSpeaker.speak(names[i])
    
  } else {

    helloSpeaker.speak(names[i]);
    
  }
}


})();
