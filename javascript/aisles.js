var myData = localStorage.getItem('objectToPass');
localStorage.clear(); // Clear the localStorage
console.log(myData);
var emoji = JSON.parse(myData).emoji;
var season = JSON.parse(myData).month;
var initialMoney = randomIntFromInterval(9000, 9999);
var moneySpan = document.querySelector(".initialMoney");
var notepadEmoji = document.querySelector(".notepad");
var notepadDiv = document.querySelector(".noteSidebar");
var btnClose = document.querySelector(".closeNote");
var audioMarket = new Audio('audio/supermarket1.mp3');
var cartEmoji = document.querySelector(".cartEmoji");
var cartDiv = document.querySelector(".cartSidebar");
var btnCloseCart = document.querySelector(".closeCart");
var emojiPlayer = document.querySelector(".emojiUser");
var numFruitsEmoji = document.querySelectorAll(".cardBackground").length;
var numWinterEmoji = document.querySelectorAll(".cardWinter").length;
var numSpringEmoji = document.querySelectorAll(".cardSpring").length;
var numSummerEmoji = document.querySelectorAll(".cardSummer").length;
var numAutumnEmoji = document.querySelectorAll(".cardAutumn").length;
var cartItems = document.querySelector(".cartItems");
var nextEmoji = document.querySelector(".nextEmoji");
var backEmoji = document.querySelectorAll(".backEmoji").length;
var fruitsDiv = document.querySelector(".fruits");
var winterDiv = document.querySelector(".Winter");
var springDiv = document.querySelector(".Spring");
var summerDiv = document.querySelector(".Summer");
var autumnDiv = document.querySelector(".Autumn");
var logo = document.querySelector(".logo");
var totalP = document.querySelector(".total");
var total = 0;
var currentSeason;

var arrayCart = [];

var cartDict = {

};


var groceryList = {
  "🍎" : 3,
  "🍑" : 2,
};


console.log(numFruitsEmoji);

logo.addEventListener("click", function () {
  location.href = "index.html";
});

nextEmoji.addEventListener("click", function () {

  fruitsDiv.classList.add("hidden");

  if(season === "Winter"){
    winterDiv.classList.remove("hidden");
    currentSeason = winterDiv;
  }
  else if(season ==="Spring"){
    springDiv.classList.remove("hidden");
    currentSeason = springDiv;
  }
  else if(season ==="Summer"){
    summerDiv.classList.remove("hidden");
    currentSeason = summerDiv;
  }
  else{
    autumnDiv.classList.remove("hidden");
    currentSeason = autumnDiv;
  }

  console.log(currentSeason);
});

// backEmoji.addEventListener("click",function(){
//   currentSeason.classList.add("hidden");
//   fruitsDiv.classList.remove("hidden");
// });

for(var i=0;i<backEmoji;i++){
  document.querySelectorAll(".backEmoji")[i].addEventListener("click", function () {

    currentSeason.classList.add("hidden");
    fruitsDiv.classList.remove("hidden");

  });
}


for(var i=0;i<numFruitsEmoji;i++){
  document.querySelectorAll(".cardBackground")[i].addEventListener("click", function () {

    addCart(this);

  });
}

for(var i=0;i<numWinterEmoji;i++){
  document.querySelectorAll(".cardWinter")[i].addEventListener("click", function () {

    addCart(this);

  });
}

for(var i=0;i<numSpringEmoji;i++){
  document.querySelectorAll(".cardSpring")[i].addEventListener("click", function () {

    addCart(this);

  });
}

for(var i=0;i<numSummerEmoji;i++){
  document.querySelectorAll(".cardSummer")[i].addEventListener("click", function () {

    addCart(this);

  });
}

for(var i=0;i<numAutumnEmoji;i++){
  document.querySelectorAll(".cardAutumn")[i].addEventListener("click", function () {

    addCart(this);

  });
}

function addCart(element){
  console.log(element);
  console.log("hello");
  var p = document.createElement('ul');
  const cartEmoji = element.children[0].children[0].innerHTML;
  var priceEmoji = element.children[0].children[2].innerHTML;
  var priceEmojiInt = parseInt(priceEmoji.substr(1));
  console.log(priceEmoji.substr(1));

  if(arrayCart.includes(cartEmoji)){
    console.log("segundo");
    console.log(cartEmoji);
    var cartP = document.querySelector("."+cartEmoji);
    console.log(cartDict);
    cartDict[cartEmoji] = cartDict[cartEmoji] + 1;
    console.log(cartDict[cartEmoji]);
    var newTotal = priceEmojiInt*cartDict[cartEmoji];
    cartP.innerHTML = p.innerHTML = `<li><span class="line">${cartEmoji} X ${cartDict[cartEmoji]} = $${newTotal}</span><span class="minus"><p class="buttonMinus ${cartEmoji}">➖</p></span><span class="cross"><p class="buttonDelete ${cartEmoji}">❌</p></span></li>`;
    total = total + priceEmojiInt;
    totalP.innerHTML = "Total = $"+total.toString();
    verifyCheck(cartEmoji);
    updateMoney(priceEmojiInt);
  }
  else {
    console.log("primero");
    p.innerHTML = `<li><span class="line"> ${cartEmoji} X 1 = $${priceEmojiInt}</span><span class="minus"><p class="buttonMinus ${cartEmoji}">➖</p></span><span class="cross"><p class="buttonDelete ${cartEmoji}">❌</p></span></li>`;
    p.classList.add(cartEmoji);
    arrayCart.push(cartEmoji);
    cartItems.appendChild(p);
    cartDict[cartEmoji] = 1;
    console.log(cartDict);
    total = total + priceEmojiInt;
    totalP.innerHTML = "Total = $"+total.toString();
    verifyCheck(cartEmoji);
    updateMoney(priceEmojiInt);
  }
}

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}


document.addEventListener("DOMContentLoaded",()=>{
  makeSound();
  moneySpan.textContent = initialMoney;
  emojiPlayer.textContent = emoji;
  totalP.textContent = "Total = $0";
  console.log(groceryList);
  experiments();


});

function experiments(){
  var fruits = {

  };

  console.log(fruits);

  var fruit = "oranges";

  fruits[fruit] = 13;

  console.log(fruits);

  var fruit = "apples";

  fruits[fruit] = 12;

  console.log(fruits);

}

function makeSound(){
  audioMarket.play();
}

audioMarket.onended = function() {
  makeSound();
};

notepadEmoji.addEventListener("click",() =>{
  if(notepadDiv.classList.contains("hidden")){
    notepadDiv.classList.remove("hidden");
  }
  else{
    notepadDiv.classList.add("hidden");
  }
});

btnClose.addEventListener("click",() =>{
  notepadDiv.classList.add("hidden");
});

cartEmoji.addEventListener("click",() =>{
  if(cartDiv.classList.contains("hidden")){
    cartDiv.classList.remove("hidden");
  }
  else{
    cartDiv.classList.add("hidden");
  }
});

btnCloseCart.addEventListener("click",() =>{
  cartDiv.classList.add("hidden");
});

function verifyCheck(cartEmoji){

  if(cartDict[cartEmoji] === groceryList[cartEmoji]){
    if(cartEmoji=="🍎"){
      document.getElementById("defaultCheck1").checked = true;
    }
    else if(cartEmoji=="🍑"){
      document.getElementById("defaultCheck2").checked = true;
    }
  }

}

function updateMoney(emojiCost){
  initialMoney = initialMoney - emojiCost;

  if(initialMoney>0){

  moneySpan.textContent = initialMoney;
  }
  else{
    moneySpan.textContent = "0";
  }
}

// fruitsEmoji.addEventListener("click",() =>{
//   console.log(this)
//   const p = document.createElement('p');
//   const cartEmoji = this.children[0].children[0].innerHTML;
//   const priceEmoji = this.children[0].children[2].innerHTML;
//
//   if(arrayCart.includes(cartEmoji)){
//     var cartP = document.querySelector("."+cartEmoji);
//     cartP.innerHTML = p.innerHTML = `${cartEmoji} X 2 = {priceEmoji}`;
//         cartItems.appendChild(p);
//   }
//   else {
//     p.innerHTML = `${cartEmoji} X 1 = {priceEmoji}`;
//     p.classList.add(cartEmoji);
//     cartItems.appendChild(p);
//   }
//   p.innerHTML = `${cartEmoji} X 1 = {priceEmoji}`;
//   cartItems.appendChild(p);
// })

// const div = document.createElement('div');
//       div.innerHTML = `
//         <h2>${value1}</h2>
//         <h2>${value2}</h2>
//       `;
//       document.body.appendChild(div);
