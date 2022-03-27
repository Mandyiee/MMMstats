let resultCon = document.querySelector('.result')
let resSpace = document.querySelector('.result-space')
let resType = document.querySelector('.result-type');

function calGMedian() {
 console.log(1)
  let intervalA = document.getElementsByClassName('interval');
  let frequencyA =  document.querySelectorAll('.frequency');
  
  let data = []
  let num = 0
  let value = 0
  let medianClass = 0
  let array = []
  let result = 0
  
  for (let i = 0; i < frequencyA.length; i++) {
    data.push({
      interval: intervalA[i].value,
      frequency: frequencyA[i].value
    })
    array.push(frequencyA[i].value)
  }
  
  data.sort((a,b) => {
    return a.interval - b.interval;
  })
  
  value = array.reduce((a, b) => {
    return Number(a) + Number(b)
  })
  value /= 2
//  console.log(data[0].interval)
  for (let i = 0; i < data.length; i++) {
    num += Number(data[i].frequency)
   if (num >= value) {
      medianClass = data[i]
      break
    }
  }
  result = medianClass.interval
  resultCon.style.clipPath = 'circle(100%)';
  resSpace.textContent = result 
  resType.textContent = "The Median is"
}

export { calGMedian }