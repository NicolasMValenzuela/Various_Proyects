const buttons = document.querySelectorAll('button')
const form  = document.getElementById('form')
const alternative = document.getElementById('alternative')
const p = document.getElementById('p')
const submit = document.getElementById('submit')
const back = document.getElementById('back')


buttons.forEach(button=>{
        button.addEventListener('click',(e)=>{
            e.preventDefault()
            
            rate = e.target.textContent
        
            p.textContent = `You selected ${rate} out of 5`
            if (rate !=''){
                submit.disabled = false
            }
            
    })
    
})

form.addEventListener('submit',(e)=>{
        e.preventDefault()
        form.classList.add('inactive')
        alternative.classList.remove('inactive')
})
back.addEventListener('click',(e)=>{
    e.preventDefault()
    form.classList.remove('inactive')
    alternative.classList.add('inactive')
    submit.disabled = true
})

