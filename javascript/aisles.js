var myData = localStorage.getItem('objectToPass');
localStorage.clear(); // Clear the localStorage
console.log(myData);
var emoji = JSON.parse(myData).emoji;
var season = JSON.parse(myData).month;
var initialMoney = randomIntFromInterval(9999, 9999);
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
var listItems = document.querySelector(".listItems");
var logo = document.querySelector(".logo");
var totalP = document.querySelector(".total");
var total = 0;
var currentSeason;

var arrayCart = [];

var cartDict = {

};

var unitaryPrice = {
  "🍎" : 13,
  "🍑" : 6,
  "🍌" : 6,
  "🍉" : 4,
  "🍊" : 13,
  "🍇" : 20,
  "🎁" : 100,
  "🌲" : 500,
  "☃️" : 200,
  "🎆" : 50,
  "🥂" : 70,
  "🍾" : 250,
  "🥤" : 20,
  "🧳" : 500,
  "🍫" : 10,
  "🐰" : 150,
  "🥚" : 5,
  "🍺" : 10,
  "🥩" : 250,
  "🩲" : 90,
  "👙" : 150,
  "🩱" : 130,
  "🍔" : 20,
  "🌭" : 15,
  "🎃" : 50,
  "🍗" : 100,
  "🥧" : 70,
  "🦇" : 30,
  "🍬" : 10,
  "🏈" : 80,
}


var groceryList = {
  "🍎" : 3,
  "🍑" : 2,
  "🍌" : 1,
  "🎁" : 2,
  "🌲" : 1,
  "☃️" : 2,
};

var springList = {
  "🍉" : 5,
  "🍊" : 6,
  "🍇" : 2,
  "🥤" : 10,
  "🧳" : 1,
  "🍫" : 8,
};

var summerList = {
  "🍑" : 5,
  "🍇" : 3,
  "🍎" : 4,
  "🥩" : 5,
  "🩲" : 1,
  "👙" : 1,
};

var autumnList = {
  "🍊" : 2,
  "🍉" : 4,
  "🍌" : 1,
  "🎃" : 2,
  "🍗" : 5,
  "🥧" : 3,
};

console.log(numFruitsEmoji);

function buttonMinusListener(){
  var numButtonMinus = document.querySelectorAll(".buttonMinus").length;

  for(var i=0;i<numButtonMinus;i++){
    document.querySelectorAll(".buttonMinus")[i].addEventListener("click", function () {
      var emojiClass = this.classList[1];
      console.log(emojiClass);

      if(arrayCart.includes(emojiClass)){
        if(cartDict[emojiClass] === 1){
          console.log("delete");
          grandfather = this.parentElement.parentElement.parentElement;
          console.log(grandfather);
          grandfather.remove();
          returnMoney(emojiClass);
        }
        else{

          let cartPMinus = document.querySelector("."+emojiClass);

          cartDict[emojiClass] = cartDict[emojiClass] - 1;

          console.log("Last bbug");
          console.log("cartDict");
          console.log(cartDict);
          console.log("cartDict[emojiClass]");
          console.log(cartDict[emojiClass]);



          let newTotal = unitaryPrice[emojiClass]*cartDict[emojiClass];

          console.log("newTotal");
          console.log(newTotal);

          console.log("cartPMinus1");
          console.log(cartPMinus);
          cartPMinus.innerHTML = `<li><span class="line">${emojiClass} X ${cartDict[emojiClass]} = $${newTotal}</span><span class="minus"><p class="buttonMinus ${emojiClass}">➖</p></span><span class="cross"><p class="buttonDelete ${emojiClass}">❌</p></span></li>`;
          let elementHtml = cartPMinus.outerHTML;
          console.log("cartPMinus2");
          console.log(cartPMinus);
          console.log("elementHtml");
          console.log(elementHtml);

          let oneItemPrice = unitaryPrice[emojiClass];

          total = total - oneItemPrice;
          totalP.innerHTML = "Total = $"+total.toString();

          // update initial money
          initialMoney = initialMoney + oneItemPrice;
          moneySpan.textContent = initialMoney;

          //checks if the check boxes should be updated
          unCheck(emojiClass);

          buttonListener();
          buttonMinusListener();

        }

      }
    });
  }
}

function buttonListener(){
  var numButtonDelete = document.querySelectorAll(".buttonDelete").length;

  for(var i=0;i<numButtonDelete;i++){
    document.querySelectorAll(".buttonDelete")[i].addEventListener("click", function () {

      var emojiClass = this.classList[1];
      console.log(emojiClass);

      if(arrayCart.includes(emojiClass)){
        console.log("delete");
        grandfather = this.parentElement.parentElement.parentElement;
        console.log(grandfather);
        grandfather.remove();
        returnMoney(emojiClass);
      }

    });
  }
}

function returnMoney(keyEmoji){
  console.log("arrayCart");
  console.log(arrayCart);
  console.log("keyEmoji");
  console.log(keyEmoji);
  console.log("unitaryPrice");
  console.log(unitaryPrice[keyEmoji]);
  console.log("cartDict in priceNumItem");
  console.log(cartDict);
  console.log("cartDict[keyEmoji] in priceNumItem");
  console.log(cartDict[keyEmoji]);
  var priceNumItem = unitaryPrice[keyEmoji] * cartDict[keyEmoji];
  console.log("priceNumItem");
  console.log(priceNumItem);

// update initial money
  initialMoney = initialMoney + priceNumItem;

  moneySpan.textContent = initialMoney;

  console.log("total 1");
  console.log(total);

// update total of cart
  total = total - priceNumItem;
  console.log("total 2");
  console.log(total);

  totalP.innerHTML = "Total = $"+total.toString();

  console.log("cartDict 1");
  console.log(cartDict);
  // remove one from the quantity
    delete cartDict[keyEmoji];

    const index = arrayCart.indexOf(keyEmoji);

    if (index > -1) {
      arrayCart.splice(index, 1);
    }


    console.log("cartDict 2");
    console.log(cartDict);
    console.log("arrayCart 2");
    console.log(arrayCart);
    console.log("END");
    unCheck(keyEmoji);
}

function addGroceryList(list){

  var number = 1;
  Object.keys(list).forEach(function(key) {

    // console.log(key, obj[key]);
    var numberString = number.toString();

    var listDiv = document.createElement('div');
    listDiv.className = "form-check";
    listDiv.innerHTML = `
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck${numberString}">
      <label class="form-check-label" for="defaultCheck${numberString}">${key} X ${list[key]}</label>
      `;

      number = parseInt(numberString);
      number = number + 1;

    listItems.appendChild(listDiv);

  });

}

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

  console.log("arrayCart");
  console.log(arrayCart);

  if(arrayCart.includes(cartEmoji)){
    console.log("segundo");
    console.log(cartEmoji);
    var cartP = document.querySelector("."+cartEmoji);
    console.log(cartDict);
    cartDict[cartEmoji] = cartDict[cartEmoji] + 1;
    console.log(cartDict[cartEmoji]);
    var newTotal = priceEmojiInt*cartDict[cartEmoji];
    console.log("cartP 1")
    console.log(cartP);
    cartP.innerHTML = `<li><span class="line">${cartEmoji} X ${cartDict[cartEmoji]} = $${newTotal}</span><span class="minus"><p class="buttonMinus ${cartEmoji}">➖</p></span><span class="cross"><p class="buttonDelete ${cartEmoji}">❌</p></span></li>`;
    // cartP.innerHTML = p.innerHTML = `<li><span class="line">${cartEmoji} X ${cartDict[cartEmoji]} = $${newTotal}</span><span class="minus"><p class="buttonMinus ${cartEmoji}">➖</p></span><span class="cross"><p class="buttonDelete ${cartEmoji}">❌</p></span></li>`;
    console.log("cartP 2")
    console.log(cartP);
    total = total + priceEmojiInt;
    totalP.innerHTML = "Total = $"+total.toString();
    verifyCheck(cartEmoji);
    updateMoney(priceEmojiInt);
    buttonListener();
    buttonMinusListener();
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
    buttonListener();
    buttonMinusListener();
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

  if(season === "Winter"){
    addGroceryList(groceryList);
  }
  else if(season ==="Spring"){
    addGroceryList(springList);
  }
  else if(season ==="Summer"){
    addGroceryList(summerList);
  }
  else{
    addGroceryList(autumnList);
  }

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
  console.log("currentSeason");
  console.log(season);
  console.log("cartEmoji");
  console.log(cartEmoji);
  if(season === "Winter")
  {

    if(cartDict[cartEmoji] === groceryList[cartEmoji])
    {
      if(cartEmoji=="🍎"){
        document.getElementById("defaultCheck1").checked = true;
      }
      else if(cartEmoji=="🍑"){
        document.getElementById("defaultCheck2").checked = true;
      }
      else if(cartEmoji=="🍌"){
        document.getElementById("defaultCheck3").checked = true;
      }
      else if(cartEmoji=="🎁"){
        document.getElementById("defaultCheck4").checked = true;
      }
      else if(cartEmoji=="🌲"){
        document.getElementById("defaultCheck5").checked = true;
      }
      else if(cartEmoji=="☃️"){
        document.getElementById("defaultCheck6").checked = true;
      }
    }
  }
  else if(season === "Spring"){
    console.log("entre");
    if(cartDict[cartEmoji] === springList[cartEmoji])
    {
      console.log("entre2")
      if(cartEmoji=="🍉"){
        document.getElementById("defaultCheck1").checked = true;
      }
      else if(cartEmoji=="🍊"){
        document.getElementById("defaultCheck2").checked = true;
      }
      else if(cartEmoji=="🍇"){
        document.getElementById("defaultCheck3").checked = true;
      }
      else if(cartEmoji=="🥤"){
        document.getElementById("defaultCheck4").checked = true;
      }
      else if(cartEmoji=="🧳"){
        document.getElementById("defaultCheck5").checked = true;
      }
      else{
        document.getElementById("defaultCheck6").checked = true;
      }
    }
  }
  else if(season === "Summer"){
    if(cartDict[cartEmoji] === summerList[cartEmoji])
    {
      if(cartEmoji=="🍑"){
        document.getElementById("defaultCheck1").checked = true;
      }
      else if(cartEmoji=="🍇"){
        document.getElementById("defaultCheck2").checked = true;
      }
      else if(cartEmoji=="🍎"){
        document.getElementById("defaultCheck3").checked = true;
      }
      else if(cartEmoji=="🥩"){
        document.getElementById("defaultCheck4").checked = true;
      }
      else if(cartEmoji=="🩲"){
        document.getElementById("defaultCheck5").checked = true;
      }
      else{
        document.getElementById("defaultCheck6").checked = true;
      }
    }
  }
  else{
    if(cartDict[cartEmoji] === autumnList[cartEmoji])
    {
      if(cartEmoji=="🍊"){
        document.getElementById("defaultCheck1").checked = true;
      }
      else if(cartEmoji=="🍉"){
        document.getElementById("defaultCheck2").checked = true;
      }
      else if(cartEmoji=="🍌"){
        document.getElementById("defaultCheck3").checked = true;
      }
      else if(cartEmoji=="🎃"){
        document.getElementById("defaultCheck4").checked = true;
      }
      else if(cartEmoji=="🍗"){
        document.getElementById("defaultCheck5").checked = true;
      }
      else{
        document.getElementById("defaultCheck6").checked = true;
      }
    }
  }

}

function unCheck(cartEmoji){
  console.log("currentSeason");
  console.log(season);
  console.log("cartEmoji");
  console.log(cartEmoji);
  if(season === "Winter")
  {

    if(cartDict[cartEmoji] < groceryList[cartEmoji] || cartDict[cartEmoji] === undefined)
    {
      if(cartEmoji=="🍎"){
        document.getElementById("defaultCheck1").checked = false;
      }
      else if(cartEmoji=="🍑"){
        document.getElementById("defaultCheck2").checked = false;
      }
      else if(cartEmoji=="🍌"){
        document.getElementById("defaultCheck3").checked = false;
      }
      else if(cartEmoji=="🎁"){
        document.getElementById("defaultCheck4").checked = false;
      }
      else if(cartEmoji=="🌲"){
        document.getElementById("defaultCheck5").checked = false;
      }
      else if(cartEmoji=="☃️"){
        document.getElementById("defaultCheck6").checked = false;
      }
    }
  }
  else if(season === "Spring"){
    console.log("entre");
    console.log(cartDict[cartEmoji]);
    if(cartDict[cartEmoji] < springList[cartEmoji] || cartDict[cartEmoji] === undefined)
    {
      console.log("entre2")
      if(cartEmoji=="🍉"){
        document.getElementById("defaultCheck1").checked = false;
      }
      else if(cartEmoji=="🍊"){
        document.getElementById("defaultCheck2").checked = false;
      }
      else if(cartEmoji=="🍇"){
        document.getElementById("defaultCheck3").checked = false;
      }
      else if(cartEmoji=="🥤"){
        document.getElementById("defaultCheck4").checked = false;
      }
      else if(cartEmoji=="🧳"){
        document.getElementById("defaultCheck5").checked = false;
      }
      else{
        document.getElementById("defaultCheck6").checked = false;
      }
    }
  }
  else if(season === "Summer"){
    if(cartDict[cartEmoji] < summerList[cartEmoji] || cartDict[cartEmoji] === undefined)
    {
      if(cartEmoji=="🍑"){
        document.getElementById("defaultCheck1").checked = false;
      }
      else if(cartEmoji=="🍇"){
        document.getElementById("defaultCheck2").checked = false;
      }
      else if(cartEmoji=="🍎"){
        document.getElementById("defaultCheck3").checked = false;
      }
      else if(cartEmoji=="🥩"){
        document.getElementById("defaultCheck4").checked = false;
      }
      else if(cartEmoji=="🩲"){
        document.getElementById("defaultCheck5").checked = false;
      }
      else{
        document.getElementById("defaultCheck6").checked = false;
      }
    }
  }
  else{
    if(cartDict[cartEmoji] < autumnList[cartEmoji] || cartDict[cartEmoji] === undefined)
    {
      if(cartEmoji=="🍊"){
        document.getElementById("defaultCheck1").checked = false;
      }
      else if(cartEmoji=="🍉"){
        document.getElementById("defaultCheck2").checked = false;
      }
      else if(cartEmoji=="🍌"){
        document.getElementById("defaultCheck3").checked = false;
      }
      else if(cartEmoji=="🎃"){
        document.getElementById("defaultCheck4").checked = false;
      }
      else if(cartEmoji=="🍗"){
        document.getElementById("defaultCheck5").checked = false;
      }
      else{
        document.getElementById("defaultCheck6").checked = false;
      }
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
