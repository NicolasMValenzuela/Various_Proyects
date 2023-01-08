const URL1 = 'https://api.adviceslip.com/advice'
const htmlResponse = document.getElementById('advice')
const header = document.getElementById('header')
const dice = document.getElementById('dice')
let counter = 0
const contador = ()=>{
    
    counter +=1
    header.textContent = `ADVICE ${counter}`
    
}
fetch(URL1)
.then(res => res.json())
.then(res => htmlResponse.textContent = res.slip.advice)

dice.addEventListener('click', ()=>{
    fetch(URL1)
    .then(res => res.json())
    .then(res => htmlResponse.textContent = res.slip.advice)

    contador()
})