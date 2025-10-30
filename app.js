const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')

// добавление новых заметок
createBtn.onclick=function(){
    if (inputElement.value.length===0){
        return
    }
    const newNote= {
        title:inputElement.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    inputElement.value='';
}

function render(){
     listElement.innerHTML=''
     if (notes.length===0){
        listElement.innerHTML='Нет элементов'
     }
    for (let note of notes) {
        listElement.insertAdjacentHTML(
        'beforeend',
        getNoteTemplate(note, notes.indexOf(note)))        
    }    
    
}
    

function getNoteTemplate(note, index){
    return `<li class="pading">
          <span class="${note.completed? 'text-decoration-line-trought': ''}">${note.title}</span>
          <span class="btn-position">
            <span  class="btn-status btn-${note.completed? 'completed': 'success'} btn" data-index=${index} data-type="completed">&check;</span>
            <span class="btn-status btn btn-danger" data-index=${index} data-type="remove">&times;</span>
          </span>
        </li>`
}



const notes = [
    {
        title: "Изучить новую тему JS",
        completed: true
    },
    {
        title: "Выполнить проект в Anylogic",
        completed: false
    },
    {
        title: "Забрать пропуск",
        completed: false,
    },
]


//получаем информацию по какому эл-менту сделан клик
listElement.onclick= function(event){
    
    if(event.target.dataset.index){
        const index= parseInt(event.target.dataset.index);
        const type= event.target.dataset.type;
         if (type==="completed"){
            notes[index].completed=!notes[index].completed
        } else  if (type==="remove"){
            notes.splice(index, 1)
        }
    }
   render()
}
render()