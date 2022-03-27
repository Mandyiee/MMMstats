let inputCon = document.querySelector('.con')
let resultCon = document.querySelector('.result')
let resSpace = document.querySelector('.result-space')
let resType = document.querySelector('.result-type');

function calRange() {
  let Marray = inputCon.children
  let min = 0
  let array = []
  let max = 0
  let result = 0
  let Rarray = []
  
  for (var i = 0; i < Marray.length; i++) {
    array.push(Marray[i].value)
  }
  Rarray = array.filter(number => {
    return number !==  ""
  })
  
   max = Rarray.reduce(function(a, b) {
    return Math.max(Number(a), Number(b));
}, -Infinity);
  
  min = Rarray.reduce(function(a, b) {
    return Math.min(Number(a), Number(b));
}, Infinity);

  
  result = max - min
  resultCon.style.clipPath = 'circle(100%)';
  resSpace.textContent = result 
  resType.textContent = "The Range is"
}

export { calRange }