let resultCon = document.querySelector('.result')
let resSpace = document.querySelector('.result-space')
let resType = document.querySelector('.result-type');

function calGMode() {
  let intervalA = document.getElementsByClassName('interval');
  let frequencyA =  document.querySelectorAll('.frequency');
  
  
  let data = []
  let num = 0
  let value = 0
  let array = []
  let max = 0
  let modalClass = 0
  let result = 0
  
  for (let i = 0; i < frequencyA.length; i++) {
    data.push({
      interval: intervalA[i].value,
      frequency: frequencyA[i].value
    })
    array.push(frequencyA[i].value)
  }
  
  max = array.reduce(function(a, b) {
  return Math.max(a, b);
}, -Infinity);


 for (let i = 0; i < data.length; i++) {
   if(data[i].frequency == max) {
     modalClass = data[i].interval
     break
   }
 }
  result = modalClass
  resultCon.style.clipPath = 'circle(100%)';
  resSpace.textContent = result 
  resType.textContent = "The Mode is"
}

export { calGMode }