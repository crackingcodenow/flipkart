var products = [
  {name: "Ipad", price: 35000, photo:"../Images/ipad.jpg", shippedto: ["delhi","hyd"] },
  {name: "Shoes", price: 10000, photo: "../Images/shoes.jpg", shippedto: ["hyd", "chennai", "delhi"] },
  {name: "Mac", price: 55000, photo: "../Images/mac.jpg", shippedto: ["mumbai", "hyd", "delhi"] },
  {name: "Flag", price: 1000, photo: "../Images/flag.jpg", shippedto: ["delhi", "hyd"] }
] ;

var productName, productPrice, productPhoto, productShippedTo ;
var i=0;

function getProducts(index) {
  productName = products[index].name;
  productPrice= products[index].price;
  productPhoto= products[index].photo;
  productShippedTo= products[index].shippedto.toString();

document.getElementById("lblName").innerHTML = productName;
document.getElementById("lblPrice").innerHTML= "&#8377; " + productPrice;
document.getElementById("imgProduct").src = productPhoto;
document.getElementById("lstCities").innerHTML="Ships to : " + productShippedTo; 
}

function nextClick() {
  i++;
  getProducts(i);
}

function prevClick() {
  i--;
  getProducts(i);
}