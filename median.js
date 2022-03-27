let resultCon = document.querySelector('.result');
let resSpace = document.querySelector('.result-space');
let resType = document.querySelector('.result-type');
let inputCon = document.querySelector('.con');

function calMedian() {
  let Marray = inputCon.children
  let array = []
  let result = 0
    let value = 0
    let value1 = 0
     let value2 = 0
     
  for (var i = 0; i < Marray.length; i++) {
    if ( Marray[i].value != "") {
    array.push(Marray[i].value)
    }
  }
  array.sort((a,b) => a - b)
 console.log(array)
  if (array.length % 2 == 1) {
      value = array.length
      value -= 1 
      value /= 2
      result = array[value]
  } else {
    value = array.length
    value /= 2
    value1 = array[value]
    value -= 1
    value2 = array[value]
    result = (Number(value1) + Number(value2)) / 2
  }
  resultCon.style.clipPath = 'circle(100%)';
 resSpace.textContent = result
 resType.textContent = "The Median is"
 
  
  }
  
export { calMedian }
