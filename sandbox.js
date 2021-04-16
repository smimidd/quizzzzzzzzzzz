const addForm = document.querySelector('.add');
const list = document.querySelector('.todos');
const delete_items = document.querySelector('.todos');
const search = document.querySelector('.search');


const generateTemplate = todo => {
    
    const html = `
    <li class=" list-group-item d-flex justify-content-between align-items-center">    
    <span>${todo}</span>
    <i class="fas fa-trash-alt delete "></i>
    </li>
    `
    list.innerHTML += html;    
};

addForm.addEventListener('submit' , e => {
    e.preventDefault();
    const todo = addForm.add.value.trim();
    if(todo.length){
    generateTemplate(todo);    
    };
    addForm.reset();

});
delete_items.addEventListener('click', e => {
    e.preventDefault();
    if (e.target.classList.contains('delete'))
        e.target.parentElement.remove();
    

});