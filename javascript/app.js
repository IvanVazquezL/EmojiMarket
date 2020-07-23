var playButton = document.querySelector(".btnPlay");
var containerDiv = document.querySelector(".container");
var numberOfEmojiButtons = document.querySelectorAll(".btnSelect").length;
var monthsDiv = document.querySelector(".containerMonths");
var numberOfMonthsButtons = document.querySelectorAll(".btnMonth").length;
var emojiMonth = {
  "emoji" : "",
  "month" : ""
};

playButton.addEventListener("click", function () {
  makeSound();
  playButton.classList.add("hidden");
  containerDiv.classList.remove("hidden");
});

function makeSound(){
  var audioSelect = new Audio('audio/select.mp3');
  audioSelect.play();

}

for(var i=0;i<numberOfEmojiButtons;i++){
  document.querySelectorAll(".btnSelect")[i].addEventListener("click", function () {
    emojiMonth.emoji = this.previousElementSibling.innerHTML;
    containerDiv.classList.add("hidden");
    monthsDiv.classList.remove("hidden");
  });
}

for(var i=0;i<numberOfMonthsButtons;i++){
  document.querySelectorAll(".btnMonth")[i].addEventListener("click", function () {
    emojiMonth.month = this.innerHTML;
    console.log(emojiMonth);
    localStorage.setItem( 'objectToPass', JSON.stringify(emojiMonth) );
    location.href = "aisles.html";

  });
}
