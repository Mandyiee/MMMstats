let resultCon = document.querySelector('.result')
let resSpace = document.querySelector('.result-space')


async function calGMean() {
  console.log(2)
let intervalA = await document.getElementsByClassName('interval')
let frequencyA = await document.querySelectorAll('.frequency')
  let numerator = 0
    let denominator = 0
    let data = []
    
    let result = 0
  for (let i = 0; i < frequencyA.length; i++) {
    data.push({
      interval: intervalA[i].value,
      frequency: frequencyA[i].value
    })
  }
 for (let i = 0; i < data.length; i++) {
    numerator += (Number(data[i].interval) * Number(data[i].frequency))
    denominator += Number(data[i].frequency)
 }
 result = numerator / denominator
 
 resultCon.style.clipPath = 'circle(100%)';
 resSpace.textContent = result
 
 numerator = 0
     denominator = 0
    data = []
     num = 0
   result = 0
}

export { calGMean }
