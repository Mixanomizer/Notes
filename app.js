const inputElement = document.getElementById('title')
const createBtn = document.getElementById('create')
const listElement = document.getElementById('list')
// const notes= ['Изучить новую тему JS', 'Выполнить проект в Anylogic']

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
     listElement.innerHTML='';
    for (let note of notes) {
        listElement.insertAdjacentHTML(
        'beforeend',
        getNoteTemplate(note, notes.indexOf(note)))        
    }    
}
    

function getNoteTemplate(note, index){
    return `<li class="pading">
          <span class="${note.comleted? 'text-decoration-line-trought': ''}">${note.title} i=${index}</span>
          <span class="btn-position">
            <span  class="btn-status btn-${note.comleted? 'completed': 'success'} btn">&check;</span>
            <span class="btn-status btn btn-danger">&times;</span>
          </span>
        </li>`
}



const notes = [
    {
        title: 'Изучить новую тему JS',
        comleted: true,
    },
    {
        title: 'Изучить новую тему JS',
        comleted: false,
    },
]
render()