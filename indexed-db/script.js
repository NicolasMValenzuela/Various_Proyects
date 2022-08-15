const indexedDB = window.indexedDB
const form = document.getElementById('form')
const tasks = document.getElementById('tasks')
const input = document.getElementById('input')
const addTask = document.getElementById('addTask')

if(indexedDB && form){
    let db 
    const req = indexedDB.open('taskslist', 1)
    req.onsuccess = ()=>{
        db = req.result
        console.log('OPEN',db)
        readData()
    } 
    req.onupgradeneeded = ()=>{
        db = req.result
        console.log('CREATE',db)
        const ObjectStore = db.createObjectStore('tasks', {
            keyPath: 'taskTitle'
        }) 
    }
    req.onerror = (err) =>{
        console.log('Error',err)
    }

    const addData = (data) =>{
        const transaction = db.transaction(['tasks'], 'readwrite')
        const ObjectStore = transaction.objectStore('tasks')
        const req = ObjectStore.add(data)
        readData()
        
    }

    const getData = (key) =>{
        const transaction = db.transaction(['tasks'], 'readwrite')
        const ObjectStore = transaction.objectStore('tasks')
        const req = ObjectStore.get(key)

        req.onsuccess = ()=>{
            form.input.value = req.result.taskTitle
            form.addTask.dataset.action = 'update'
            form.addTask.textContent = 'Update Task'
        }
    }

    const deleteData = (key)=>{
        const transaction = db.transaction(['tasks'], 'readwrite')
        const ObjectStore = transaction.objectStore('tasks')
        const req = ObjectStore.delete(key)
        req.onsuccess = ()=>{
        readData()
        }
    }
    const updateData = (data) =>{
        const transaction = db.transaction(['tasks'], 'readwrite')
        const ObjectStore = transaction.objectStore('tasks')
        const req = ObjectStore.put(data)
        req.onsuccess = ()=>{
            form.addTask.dataset.action = 'add'
            form.addTask.textContent = 'Add Task'
        readData()
        }
        
        
    }

    const readData = () =>{
        const transaction = db.transaction(['tasks'], 'readonly')
        const ObjectStore = transaction.objectStore('tasks')
        const req = ObjectStore.openCursor()
        const fragment = document.createDocumentFragment()

        req.onsuccess= (e)=>{
            cursor = e.target.result
            
            if(cursor){

                

                const taskTitle = document.createElement('li')
                taskTitle.textContent = cursor.value.taskTitle
                taskTitle.classList='list-item'
                fragment.appendChild(taskTitle)

                const delbtn= document.createElement('button')
                delbtn.dataset.type = 'delete'
                delbtn.dataset.key= cursor.key
                delbtn.dataset.type = 'delete'
                delbtn.textContent = 'Delete'
                delbtn.classList = 'deleteBtn'
                fragment.appendChild(delbtn)

                const updbtn= document.createElement('button')
                updbtn.dataset.type = 'update'
                updbtn.dataset.key= cursor.key
                updbtn.classList = 'updateBtn'
                updbtn.textContent = 'update'
                fragment.appendChild(updbtn)

                cursor.continue()
                
                
            }else{
                tasks.textContent =''
                tasks.appendChild(fragment)
            }
        }
        
    }
    form.addEventListener('submit',(e)=>{
        e.preventDefault()
        if (input.value !=''){
            const data = {
                taskTitle: e.target.tasks.value
            }
    
            if(e.target.addTask.dataset.action === 'add'){
                addData(data)
            }else if(e.target.addTask.dataset.action ==='update'){
                 updateData(data)
            }
    
            form.reset()
        }else{
            alert("You can't left an empty task bar")
        }
      
        

    })

    tasks.addEventListener('click', (e)=>{
        if(e.target.dataset.type == 'update'){
            getData(e.target.dataset.key)
        }else  if(e.target.dataset.type == 'delete'){
            deleteData(e.target.dataset.key)
        }
        
    })
    
}

