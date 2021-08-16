$(document).ready(function() {
  $("#wordPlay").submit(function(event) {
    event.preventDefault();
    const sentence = $("#sentence").val();
    const words = sentence.split(" ");
    let returnWords = [];
    let newString;
    words.forEach(function(word) {
      let length = word.length;
      if (length >= 3) {
        returnWords.push(word)
      }
      returnWords.reverse();
      newString = returnWords.join(' ');
      
    })
    $("#output").append(newString);
    console.log(newString);
  })
})