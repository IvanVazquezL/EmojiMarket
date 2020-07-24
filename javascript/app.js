var playButton = document.querySelector(".btnPlay");
var containerDiv = document.querySelector(".container");
var numberOfEmojiButtons = document.querySelectorAll(".cardSelector").length;
var monthsDiv = document.querySelector(".containerMonths");
var numberOfMonthsButtons = document.querySelectorAll(".cardSeason").length;
var audioSelect = new Audio('audio/select.mp3');
var emojiMonth = {
  "emoji" : "",
  "month" : ""
};


playButton.addEventListener("click", function () {
  makeSound();
  playButton.classList.add("hidden");
  containerDiv.classList.remove("hidden");
  console.log(numberOfEmojiButtons);
  console.log(numberOfMonthsButtons);
});

function makeSound(){
  audioSelect.play();
}

audioSelect.onended = function() {
  makeSound();
};

for(var i=0;i<numberOfEmojiButtons;i++){
  document.querySelectorAll(".cardSelector")[i].addEventListener("click", function () {
    emojiMonth.emoji= this.children[0].children[0].innerHTML;
    containerDiv.classList.add("hidden");
    monthsDiv.classList.remove("hidden");
  });
}

for(var i=0;i<numberOfMonthsButtons;i++){
  document.querySelectorAll(".cardSeason")[i].addEventListener("click", function () {
    emojiMonth.month = this.children[0].children[1].innerHTML;
    console.log(emojiMonth);
    localStorage.setItem( 'objectToPass', JSON.stringify(emojiMonth) );
    location.href = "aisles.html";

  });
}
