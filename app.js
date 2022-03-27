import { calMean } from './mean.js';
import { calMedian } from './median.js';
import { calMode } from './mode.js';
import { calRange } from './range.js';

let deleteButton = document.querySelector('.delete-input')

let inputCon = document.querySelector('.con')

let resultCon = document.querySelector('.result')
let closeResultCon = document.querySelector('.close-result-con')
let resSpace = document.querySelector('.result-space')
let medianButton = document.getElementById('median')
let meanButton = document.getElementById('mean')
let modeButton = document.getElementById('mode')
let rangeButton = document.getElementById('range')
let addButton = document.getElementById('add-input')

function addInput() {
  let inp = document.createElement("input")
  inp.setAttribute('type','number')
  inp.setAttribute('required','true')
  inp.setAttribute('class','my-2')
  inputCon.appendChild(inp)
}

deleteButton.addEventListener('click', () => { 
  let lvalue = inputCon.children.length - 1
  if (lvalue >= 2 ) {
  inputCon.removeChild(inputCon.children[lvalue])
  }
})





meanButton.addEventListener('click', calMean)
addButton.addEventListener('click', addInput)
medianButton.addEventListener('click', calMedian)
modeButton.addEventListener('click', calMode)
rangeButton.addEventListener('click', calRange)

closeResultCon.addEventListener('click', () => {
  resultCon.style.clipPath = 'circle(0%)'
})