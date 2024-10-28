// Create three variables that hold references to the list (<ul>), <input>, and <button> elements.
const ul = document.querySelector("ul");
const input = document.querySelector("input");
const button = document.querySelector("#add-item");

// Create a function that will run in response to the button being clicked.
function addItem() {
  // Inside the function body, start off by storing the current value of the input element in a variable.
  const item = input.value;
  // Next, empty the input element by setting its value to an empty string — ''.
  input.value = "";

  // Create three new elements — a list item (<li>), <span>, and <button>, and store them in variables.
  const li = document.createElement("li");
  const span = document.createElement("span");
  const deleteButton = document.createElement("button");

  // Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
  span.textContent = item;
  deleteButton.textContent = "Delete";

  // Attach an event handler to the delete button so that, when clicked, it will delete the entire list item (<li>...</li>).
  deleteButton.addEventListener("click", function () {
    deleteButton.parentElement.remove();
  })

  // Append the span and the button as children of the list item.
  li.appendChild(span);
  li.appendChild(deleteButton);
  // Append the list item as a child of the list.
  ul.appendChild(li);
  
  // Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
  input.focus();
}

button.addEventListener("click", addItem);