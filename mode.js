let resultCon = document.querySelector('.result');
let resSpace = document.querySelector('.result-space');
let resType = document.querySelector('.result-type');
let inputCon = document.querySelector('.con');

function calMode() {
  let max = Number.MIN_VALUE;

  let Marray = inputCon.children
  let array = []
  

  for (var i = 0; i < Marray.length; i++) {
    array.push(Marray[i].value)
  }
  let a = array;

  let n = a.length;


  for (let i = 0; i < a.length; i++)
  {
    max = Math.max(max, a[i]);
  }

  let t = max + 1;

  let count = new Array(t);

  for (let i = 0; i < t; i++) {
    count[i] = 0;
  }


  for (let i = 0; i < n; i++) {
    count[a[i]]++;
  }


  let mode = 0;

  let k = count[0];

  for (let i = 1; i < t; i++) {
    if (count[i] > k) {
      k = count[i];
      mode = i;
    }

  }
resultCon.style.clipPath = 'circle(100%)';
 resSpace.textContent = mode
resType.textContent = "The Mode is"
}




export { calMode }