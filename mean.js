let inputCon = document.querySelector('.con')
let resultCon = document.querySelector('.result')
let resSpace = document.querySelector('.result-space')

function calMean() {
  
  let Marray = inputCon.children
  let array = []
  let result = 0
  let demArray = 0
  let numArray = 0
  let Rarray = []
  for (var i = 0; i < Marray.length; i++) {
    array.push(Marray[i].value)
  }
  Rarray = array.filter(number => {
    return number !==  ""
  })
 numArray = Rarray.reduce((a, b) => {
  return Number(a) + Number(b)
}) 
 
 demArray = Rarray.length
  result = numArray / demArray
 
 
 resultCon.style.clipPath = 'circle(100%)';
 resSpace.textContent = result
 
}

export { calMean }
 
