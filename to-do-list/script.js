const input = document.getElementById('input')
const btn = document.getElementById('btn')
const list = document.getElementById('list')




btn.addEventListener('click',(e)=>{
    e.preventDefault()
    if (input.value != ''){
        const li = document.createElement('li')
        li.innerHTML = `${input.value} <button class="delete-btn">X</button>`
        li.classList.add('list-item')
        list.appendChild(li)
        input.value = ''
    }else{
        alert('Task bar is empty')
    }
})


list.addEventListener('click', (e)=>{
    if(e.target.classList.contains('delete-btn')){
        li = e.target.parentElement
        list.removeChild(li)
    }})






