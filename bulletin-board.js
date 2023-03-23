// Get the form and message list elements
const form = document.querySelector('form');
const messageList = document.getElementById('messageList');

// Add an event listener to the form submit button
form.addEventListener('submit', function(e) {
  // Prevent the default form submission behavior
  e.preventDefault();

  // Get the message textarea element
  const messageInput = document.getElementById('message');

  // Create a new message element and append it to the message list
  const messageItem = document.createElement('div');
  messageItem.classList.add('message');
  messageItem.innerHTML = `<p>${messageInput.value}</p><span>${new Date().toLocaleString()}</span>`;
  messageList.appendChild(messageItem);

  // Clear the message input textarea
  messageInput.value = '';
});
