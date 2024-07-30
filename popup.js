document.addEventListener('DOMContentLoaded', function() {
  // Bookmarks
  let bookmarks = [];
  const bookmarksList = document.getElementById('bookmarks');
  const newBookmarkInput = document.getElementById('newBookmark');
  const addBookmarkButton = document.getElementById('addBookmark');

  function updateBookmarks() {
    bookmarksList.innerHTML = '';
    bookmarks.forEach((bookmark, index) => {
      const li = document.createElement('li');
      li.textContent = bookmark;
      bookmarksList.appendChild(li);
    });
  }

  addBookmarkButton.addEventListener('click', function() {
    const newBookmark = newBookmarkInput.value.trim();
    if (newBookmark) {
      bookmarks.push(newBookmark);
      updateBookmarks();
      newBookmarkInput.value = '';
    }
  });

  // To-Do List
  let todos = [];
  const todoList = document.getElementById('todoList');
  const newTodoInput = document.getElementById('newTodo');
  const addTodoButton = document.getElementById('addTodo');

  function updateTodos() {
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.textContent = todo;
      todoList.appendChild(li);
    });
  }

  addTodoButton.addEventListener('click', function() {
    const newTodo = newTodoInput.value.trim();
    if (newTodo) {
      todos.push(newTodo);
      updateTodos();
      newTodoInput.value = '';
    }
  });

  // Mock Gmail Inbox
  const gmailInbox = document.getElementById('gmailInbox');
  const mockEmails = [
    'Welcome to your new extension!',
    'This is a mock email.',
    'Another mock email here.'
  ];

  mockEmails.forEach(email => {
    const li = document.createElement('li');
    li.textContent = email;
    gmailInbox.appendChild(li);
  });
});
