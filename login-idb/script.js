const idb = window.indexedDB
const loginForm = document.getElementById('login')
const registerForm = document.getElementById('register')

if(idb && registerForm){
    let db
    const req = idb.open('Users',1)
    req.onsuccess=()=>{
        db = req.result
        console.log('open',db)
    }
    req.onupgradeneeded=()=>{
        db = req.result
        console.log('create',db)
        const objectStore = db.createObjectStore('users',{
            keyPath:'userName'
        })

    }
    req.onerror=(err)=>{
        console.log('error',err)
    }
    const addUser =(user)=>{
        const transaction = db.transaction(['users'],'readwrite')
        const objectStore = transaction.objectStore('users')
        const req = objectStore.add(user)
    }
    registerForm.addEventListener('submit',(e)=>{
        e.preventDefault()
        const user = {
            userName : e.target.user.value,
            email: e.target.email.value,
            password: e.target.password.value
        }
        addUser(user)
    })
    
}



loginForm.addEventListener('submit',(e)=>{
    e.preventDefault()
})



