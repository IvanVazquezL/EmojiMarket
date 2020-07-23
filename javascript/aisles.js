var myData = localStorage.getItem('objectToPass');
localStorage.clear(); // Clear the localStorage
console.log(myData);
var emoji = JSON.parse(myData).emoji;
var month = JSON.parse(myData).month;
var initialMoney = randomIntFromInterval(1000, 5000);
var moneySpan = document.querySelector(".initialMoney");
var notepadEmoji = document.querySelector(".notepad");
var notepadDiv = document.querySelector(".noteSidebar");
var btnClose = document.querySelector(".closeNote");
var audioMarket = new Audio('audio/supermarket1.mp3');
var cartEmoji = document.querySelector(".cartEmoji");
var cartDiv = document.querySelector(".cartSidebar");
var btnCloseCart = document.querySelector(".closeCart");
var emojiPlayer = document.querySelector(".emojiUser");

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Products{
  async getProducts(){
    try {
      //retrieval of data from the json file
      let result=await fetch('products.json')
      let data = await result.json();
      let products = data.items;
      console.log(products)
      return products;

    } catch (error) {
      console.log(error);
    }
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  makeSound();
  moneySpan.textContent = initialMoney;
  if(emoji == "ROFL"){
    emojiPlayer.textContent = "🤣";
  }
  else if(emoji== "Thinker"){
    emojiPlayer.textContent = "🤔";
  }
  else{
    emojiPlayer.textContent = "🤪";
  }
  const products = new Products();

  products.getProducts().then(products =>{
    products.forEach(product => {
      console.log(product.emoji);
      console.log(product.name);
    });
  });

});

function makeSound(){
  audioMarket.play();
}

audioMarket.onended = function() {
  makeSound();
};

notepadEmoji.addEventListener("click",() =>{
  notepadDiv.classList.remove("hidden");
})

btnClose.addEventListener("click",() =>{
  notepadDiv.classList.add("hidden");
})

cartEmoji.addEventListener("click",() =>{
  cartDiv.classList.remove("hidden");
})

btnCloseCart.addEventListener("click",() =>{
  cartDiv.classList.add("hidden");
})

// const div = document.createElement('div');
//       div.innerHTML = `
//         <h2>${value1}</h2>
//         <h2>${value2}</h2>
//       `;
//       document.body.appendChild(div);
