let cart = [
  {
    id:1,
    product:'xyz',
    price : 2000
  },
  {
    id:2,
    product:'abc',
    price : 2000
  },
   {
    id:3,
    product:'pqr',
    price : 2000
  }
]

let totalPrice = cart.reduce((total,item)=>total + item.price,0);
console.log(totalPrice);

let index = cart.findIndex(item => item.id === 2)
console.log(index);
cart.splice(index,1)

console.log(cart);

let arr =[1,2,3,4,5]
console.log(arr.reduce((currentResult,currentValue)=>currentResult + currentValue,0));
