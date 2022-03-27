let table = document.querySelector('table')

let addButton = document.querySelector('.add-input')
let deleteButton = document.querySelector('.delete-input')
let resultCon = document.querySelector('.result')
let closeResultCon = document.querySelector('.close-result-con')
let gmeanButton = document.getElementById('gmean')
let gmedianButton = document.getElementById('gmedian')
let gmodeButton = document.getElementById('gmode')
import { calGMean } from './gmean.js';
import { calGMedian } from './gmedian.js';
import { calGMode } from './gmode.js';

addButton.addEventListener('click', () => {
  let tr = document.createElement('tr')
  let td1 = document.createElement('td')
  let inp1 = document.createElement('input')
  let td2 = document.createElement('td')
  let inp2 = document.createElement('input')
  td1.setAttribute('class','td')
  td2.setAttribute('class','td')
  inp1.setAttribute('type','number')
  inp2.setAttribute('type','number')
  inp1.setAttribute('class','interval input')
  inp2.setAttribute('class','frequency input')
  table.appendChild(tr)
  tr.appendChild(td1)
  td1.appendChild(inp1)
  tr.appendChild(td2)
  td2.appendChild(inp2)
})

deleteButton.addEventListener('click', () => { 
  let lvalue = table.children.length - 1
  if (lvalue >= 2 ) {
  table.removeChild(table.children[lvalue])
  }
  })
closeResultCon.addEventListener('click', () => {
  resultCon.style.clipPath = 'circle(0%)'
})
gmeanButton.addEventListener('click', calGMean)
gmedianButton.addEventListener('click', calGMedian)
gmodeButton.addEventListener('click', calGMode)

// to delete use element.lastChild