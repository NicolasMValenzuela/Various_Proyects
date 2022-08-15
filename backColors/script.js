const change = document.getElementById('change-btn');
const body = document.querySelector('body')
const buttons = document.querySelectorAll('button.btn');
const primary = document.getElementById('primary');
const red = document.getElementById('red');
const green = document.getElementById('green');
const yellow = document.getElementById('yellow')


change.addEventListener('click',()=>{
    buttons.forEach(button =>{
        button.style.display = 'inline'
    })
})


primary.addEventListener('click', ()=>{
    body.style.backgroundColor = '#FFFFFF'
    valor = body.style.backgroundColor
    localStorage.setItem('backgroundValue',valor)
})
red.addEventListener('click', ()=>{
    body.style.backgroundColor = '#fa0404'
    valor = body.style.backgroundColor
    localStorage.setItem('backgroundValue',valor)
})
green.addEventListener('click', ()=>{
    body.style.backgroundColor = '#1aff00'
    valor = body.style.backgroundColor
    localStorage.setItem('backgroundValue',valor)
})
yellow.addEventListener('click', ()=>{
    body.style.backgroundColor = '#ffea00'
    valor = body.style.backgroundColor
    localStorage.setItem('backgroundValue',valor)
})


