function addTodo(event){
  event.preventDefault();
  const input = document.getElementById("new-task-description");
  const text = input.value;
  const list = document.getElementById('tasks');

  const btn = document.createElement("button");
  btn.textContent = "X";
  btn.id= list.children.length;
  btn.onclick = () => removeTodo(btn.id);

  const li = document.createElement("li");
  li.textContent = text.trim();
  li.append(btn);

  li.id= "todo"+list.children.length
  list.append(li);
  input.value = "" ;
}

function removeTodo(id){
  console.log(`li#todo${id}`);
  document.querySelector(`li#todo${id}`).remove();
}

document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form= document.getElementById("create-task-form");
  form.addEventListener("submit",addTodo);

});
