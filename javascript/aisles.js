var myData = localStorage.getItem('objectToPass');
localStorage.clear(); // Clear the localStorage
console.log(myData);
var emoji = JSON.parse(myData).emoji;
var month = JSON.parse(myData).month;
var initialMoney = randomIntFromInterval(1000, 5000);
var moneySpan = document.querySelector(".initialMoney");
console.log(initialMoney);
moneySpan.textContent = initialMoney;

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

class Products{
  async getProducts(){
    try {
      let result=await fetch('products.json')
      let data = await result.json();
      let products = data.items;
      console.log("hello");
      console.log(products);
      products = products.map(item=>{
        const {id} = item.id;
        const {name} = item.name;
        const {price} = item.price;
        const {category} = item.category;
        const {emoji} = item.emoji;
        const {emojiName} = item.emojiName;

        return {id,name,price,category,emoji,emojiName}
      });
      return products;
    } catch (error) {
      console.log(error);
    }
  }
}

document.addEventListener("DOMContentLoaded",()=>{
  const products = new Products();
  console.log("hi");
  products.getProducts().then(products =>{
    products.forEach(product => {
      console.log(product.emoji);
      console.log(product.name);
    });
  });

});

// const div = document.createElement('div');
//       div.innerHTML = `
//         <h2>${value1}</h2>
//         <h2>${value2}</h2>
//       `;
//       document.body.appendChild(div);
