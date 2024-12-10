Task List Manager with Editable Table
 Task List Manager with the following features:
1.A Task Table using an editable table library such as Tabulator.js .
2. Users can add, edit, delete, and filter tasks dynamically.
3. Integrated dummy data using the jsonplaceholder placeholder API.



1. Editable Task Table
- Using Tabulator.js to display a table with the following columns:
   - Task ID
   - Title
   - Description
   - Status: Dropdown with options 'To Do,' 'In Progress,' and 'Done.'
- Allowing inline editing for the Title, Description, and Status fields.
- Implemented a button to delete a task from the table.

2. Add a New Task
- Provided a form or button that allows users to add a new task dynamically.
- The newly added task should appear in the table without refreshing the page.

3. Task Filtering
- Added a dropdown filter to display tasks based on their Status: 'To Do,' 'In Progress,' or 'Done.'

4. Fetch Data from Dummy API
- Fetching initial task data from:
   https://jsonplaceholder.typicode.com/todos
-  Displaying the first 20 tasks.
- Mapped 'completed: true/false' to Status ('Done' or 'To Do').

5. Styling
- Using TailwindCSS to ensure the table is clean, responsive, and visually appealing.


Bonus Features 
1. Addd a search bar to filter tasks by their Title or Description.
2. Implemented task counters to show the total number of tasks for each status.
3. Using a toast notification to display success messages when a task is added, edited, or deleted.
