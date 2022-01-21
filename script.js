const todoInput = document.querySelector('#input1');
const btn = document.querySelector('#btn');
const newTodo = document.getElementById('todoItem');
const todoList = document.querySelector('.todo-list');

document.addEventListener('DOMContentLoaded',getTodos);
btn.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteTodo);

function addTodo(e) {
  // console.log(e.target);
    e.preventDefault();
   const  todoDiv = document.createElement('div');
         todoDiv.classList.add('todo');

 const listItem=document.createElement('li');
     listItem.classList.add('itemlist')
  listItem.innerHTML = todoInput.value;
  todoDiv.appendChild(listItem)
  
  if(listItem.innerHTML===''){
      alert('input field should not be empty');
  }
  else{
    saveInLocalStorage(todoInput.value);
    //create compete check button
     const completeBtn = document.createElement('button');
           completeBtn.classList.add('complete-btn');
           completeBtn.innerHTML ='<i class ="fas fa-check"></i>'
          todoDiv.appendChild(completeBtn);
      
           // create Edit Button
     const editButton=document.createElement('button');
     editButton.classList.add('edit-btn');
    editButton.innerHTML='<i class="fa fa-edit"></i>';
    todoDiv.appendChild(editButton);

     //create delete button
     const deleteBtn=document.createElement('button');
     deleteBtn.classList.add('delete-btn');
     deleteBtn.innerHTML ='<i class="far fa-times-circle" style="user-select: auto;"></i>'
     todoDiv.appendChild(deleteBtn);

      todoList.appendChild(todoDiv);
     todoInput.value=''
  }
}

//delete function for todo
 
function deleteTodo(e){
   console.log(e.target);
   e.preventDefault();
   const item=e.target;
   //console.log(items);
   //Delete Dodo  
   if(item.classList[0]==='delete-btn'){
      const todo=item.parentElement;
      removelTodos(todo);
         todo.remove();
   //    console.log(todo);
   //    todo.addEventListener('click',function(){
   //        todo.remove();
   // })
   }
}

//edit function for Todo


//save todos in local Storage
function saveInLocalStorage(todo){
   let todos;
   if(localStorage.getItem('todos')===null){
       todos=[];
   }
   else{
       todos = JSON.parse(localStorage.getItem('todos'));
   }
   todos.push(todo);
   localStorage.setItem('todos',JSON.stringify(todos));
}



//get Todo from local storage

function getTodos(){
   let todos;
   if(localStorage.getItem('todos')===null){
     todos=[];
 }
 else{
     todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
      const  todoDiv = document.createElement('div');
           todoDiv.classList.add('todo');
 //create li button
   const listItem=document.createElement('li');
  listItem.classList.add('itemlist')
  listItem.innerHTML = todo;  
  todoDiv.appendChild(listItem)

 //create compete check button
  const completeBtn = document.createElement('button');
        completeBtn.classList.add('complete-btn');
        completeBtn.innerHTML ='<i class ="fas fa-check"></i>'
       todoDiv.appendChild(completeBtn);
   
        // create Edit Button
  const editButton=document.createElement('button');
  editButton.classList.add('edit-btn');
 editButton.innerHTML='<i class="fa fa-edit"></i>';
 todoDiv.appendChild(editButton);

  //create delete button
  const deleteBtn=document.createElement('button');
  deleteBtn.classList.add('delete-btn');
  deleteBtn.innerHTML ='<i class="far fa-times-circle" style="user-select: auto;"></i>'
  todoDiv.appendChild(deleteBtn);
 todoList.appendChild(todoDiv);
    })
} 

//remove from local storage also
function removelTodos(todo){
   let todos;
   if(localStorage.getItem('todos')===null){
     todos=[];
 }
 else{
     todos = JSON.parse(localStorage.getItem('todos'));
    }
    const todosIndex=todo.children[0].innerText;

    todos.splice(todos.indexOf(todosIndex),1);
    localStorage.setItem('todos',JSON.stringify(todos)); 
     }
