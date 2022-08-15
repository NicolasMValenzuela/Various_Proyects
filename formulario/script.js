const form = document.getElementById('form')
const nombre= document.getElementById('name')
const pass= document.getElementById('pass')
const email = document.getElementById('email')
const btn = document.getElementById('btn')

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    let valid = false
    let regexEmail = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    N = nombre.value.trim()
    if (N.length < 6){
        alert(`El nombre ${N} no es válido`)
        valid = true
    }
    else{
        console.log(N)
    }
    if(!regexEmail.test(email.value)){
        alert('email inválido')
        valid = true
    }
    if(pass.value.length <= 8){
        alert('La contraseña es demasiado corta')
        valid = true
    }
    if (!valid){
        alert('Enviado')
        nombre.value = ''
        pass.value = ''
        email.value = ''
    }
})
