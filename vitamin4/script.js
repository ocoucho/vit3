/**
 * Question 1
 */
const question1 = () => {
  const sidebarButton = document.getElementById("sidebar-button");
  const sidebar = document.getElementById("sidebar");

  // Listen for a "click" event on the sidebar's button.
  //
  // Browsers emit lots of different kinds of events, for
  // a full list see the following link:
  //   https://www.javatpoint.com/javascript-events
  //
  // addEventListener will then call the function we provide
  // whenever the button is clicked.
  sidebarButton.addEventListener("click", (event) => {
    const sidebarIsOpen = sidebar.classList.contains("opened");

    if (sidebarIsOpen) {
      // Close the sidebars
      /** YOUR CODE HERE */
      sidebar.classList.remove("opened");
      sidebarButton.textContent = "›";
      
    } else {
      // Open the sidebar
      /** YOUR CODE HERE */
      sidebar.classList.add("opened");
      sidebarButton.textContent = "‹";
    }
  });
};

/**
 * Question 2
 */
const question2 = () => {
  const taskName = document.getElementById("task-name");
  const addTodoButton = document.getElementById("add-todo");
  const todoListUl = document.getElementById("todo-list");

  /** YOUR CODE HERE */
  addTodoButton.addEventListener("click", () => {
    const taskText = taskName.value.trim();
    if (taskText !== ""){
      const newTodo = document.createElement("li");
      newTodo.textContent = taskText;
      todoListUl.appendChild(newTodo);
      taskName.value = "";
    }
    else {
      alert("Task name cannot be empty!");
    }
  }
)
};

/**
 * Question 3
 */
const question3 = () => {
  const firstNameInput = document.getElementById("first-name");
  const lastNameInput = document.getElementById("last-name");
  const message = document.getElementById("message");

  // using this function is reccomended but not necessary
  const updateMessage = () => {
    /** YOUR CODE HERE */
    const firstName = firstNameInput.value.trim();
    const lastName = lastNameInput.value.trim();
    if (firstName || lastName) {
      message.textContent = `Hello ${firstName} ${lastName}!`.trim();
    }
    else{
      message.textContent = "Type your name to see a message!";
    }
  };

  /** YOUR CODE HERE */
  firstNameInput.addEventListener("input", updateMessage);
  lastNameInput.addEventListener("input", updateMessage);

};

/**
 * We need to wait for the HTML file to fully load before running
 * our JavaScript, otherwise it won't be able to operate on the HTML
 * since it hasn't loaded.
 */
document.addEventListener("DOMContentLoaded", (event) => {
  // We wrap each question in a try-catch so that way even if
  // your code for one question errors, the other ones
  // will work.
  try {
    question1();
  } catch (e) {
    console.error(e);
  }

  try {
    question2();
  } catch (e) {
    console.error(e);
  }

  try {
    question3();
  } catch (e) {
    console.error(e);
  }
});
