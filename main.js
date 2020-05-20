const rollButton = document.querySelector("#roll-button")
const numOfDice = document.querySelector("#numofdice")
const sumOf = document.querySelector("#sumof")
const allRolls = document.querySelector("#allrolls")
const showRolls = document.querySelector("#showrolls")
let dieRolls = []
let position = 0
let sum = 0
let index = 0

console.log('click')
rollButton.addEventListener("click", function(){
  let diceinput = numOfDice.value
  while(position <  diceinput){
 let random = Math.floor(Math.random() * 6) + 1
  dieRolls.push(random)
 sum += random
 
 
 
 
 
  position += 1 
}

sumOf.innerHTML = sum
console.log(dieRolls)
   
   
})
showRolls.addEventListener("click", function(){
  while(index < dieRolls.length){
  let listitem = document.createElement('li')
  listitem.innerHTML = dieRolls[index]
  allRolls.appendChild(listitem)
  
  
  
    index += 1
  }
  })
