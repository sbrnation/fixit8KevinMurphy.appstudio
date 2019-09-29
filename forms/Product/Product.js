//question 5: Option B
let num = [123, 433, 54326, 2234, 1919, 1123, 1928, 3374, 23, 190, 33874]
let product = 1

function numP(num1, num2){
  let productN = num1*num2
  return productN
  }
  
for (i=0; i<num.length; i++){
  product=numP(product,num[i])
  }
  
console.log(product)