function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskText = taskInput.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task.');
        return;
    }

    const li = document.createElement('li');
    li.textContent = taskText;

    // Mark task as completed on click
    li.onclick = function() {
        li.classList.toggle('completed');
    };

    // Add a delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        li.remove();
    };
    li.appendChild(deleteButton);

    document.getElementById('taskList').appendChild(li);
    taskInput.value = ''; // Clear input field
}