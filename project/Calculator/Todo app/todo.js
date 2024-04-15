let todoList = [
  {
    Item: 'Hello',
    dueDate: '05/06/2024'
    },
  {
  Item: 'I sk', 
  dueDate: '2/05/2024'
}
]; // Initialize an default object to store todo items

displayItems(); // Call the displayItems function to initially render the todo list

function AddTodo() {
  let inputElement = document.querySelector('#Todo_in'); // Get the input element by its id
  let inputDate = document.querySelector('#Todo_date'); // Get the date by its id
  let todoItem = inputElement.value; // Retrieve the value of the input element (the todo item)
  let todoDate = inputDate.value;
  todoList.push({Item: todoItem, dueDate: todoDate}); // Add the todo item to the todoList array
  inputElement.value = ''; // Clear the input field after adding the todo item
  dateElement.value = '';

  displayItems(); // Call the displayItems function to update the displayed todo list
}

function displayItems() {
  let containerElement = document.querySelector('.Todo_container'); // Get the container element where todo items will be displayed

  let newHtml = ''; // Initialize an empty string to store the HTML for displaying todo items

  for (let i = 0; i < todoList.length; i++) { // Iterate over each todo item in the todoList array
    // let Item = todoList[i].Item;
    // let dueDate = todoList[i].dueDate;
    let {Item, dueDate} = todoList[i];
    newHtml += ` 
    <div>
    <span> ${Item}</span> <!-- Create a span element to display the todo item -->
    <span> ${dueDate}</span>
    <button onclick = "todoList.splice(${i}, 1); displayItems();">Delete</button> <!-- Create a button element for deleting the todo item -->
    </div>
    `;

  }
  containerElement.innerHTML = newHtml; // Update the HTML content of the container element with the new todo items
}





