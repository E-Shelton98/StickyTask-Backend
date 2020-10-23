# PROJECT WORKSHEET

### PROJECT DESCRIPTION

We will be creating a task manager that enables a user to assign specific tasks or chores to a designated person. You will be able to see completed tasks and to filter tasks by person.

### PROJECT LINKS

[Frontend](https://github.com/E-Shelton98/StickyTask-Frontend)

### WIRE FRAME

[Sticky Task Wire Frame](https://wireframepro.mockflow.com/view/M939316752bfaa091186ddd9d154b115d1603462373599#/page/257ef942b81d43aaad8abb3d7b5d5cb6)

### ARCHITECTURE

[Sticky Task Architecture](https://docs.google.com/drawings/d/1_CwUrQV9eqZGwslFzHCxl4eNz5BhPPd8lNYcYDlXYt0/edit)

### MVP

- User can create a new sticky task
- User can edit sticky task
- User can assign a person to a task
- User can toggle between complete and incomplete sticky task via tabs
- User can delete a sticky task or done stickies
- Deploy the backend to Heroku
- Deploy the frontend to Netlify
- Display All Stickies
- CRUD Functionality of Sticky and Person

### POST MVP

- Prioritize Tasks by Color Code
- Drag & Drop
- Animations
- Drop Down Form

### ROUTE TABLES

#### Sticky Routes

Controller - "/sticky"

| Verb                    | Route    | Action |
| ----------------------- | -------- | ------ |
| Get                     | "/"      | Index  |
| Post                    | "/"      | Create |
| Put                     | "/:id"   | Update |
| Delete By Done Property | "/:done" | Delete |
| Delete One              | "/:id"   | Delete |

#### Person Routes

Controller - "/person"

| Verb       | Route    | Action         |
| ---------- | -------- | -------------- |
| Get All    | "/"      | Index          |
| Get One    | "/:name" | Index          |
| Post       | "/"      | Create         |
| Put        | "/:name" | Update by Name |
| Delete One | "/:name" | Delete         |

### COMPONENTS

| Component   | Description                          |
| ----------- | ------------------------------------ |
| App         | Home Page                            |
| White Board | Contains All Stickies                |
| Done        | Contains Stickies of Completed Tasks |
| Person      | Enables Filtering Tasks by Person    |
| Sticky Form | Form to Create Stickies              |
| Person Form | Form to Create Person                |
| Footer      | Links to Github / Team Section       |
| About Us    | About the Team Section               |

### TIME TABLE

| Component                   | Priority | Estimated Time     | Actual Time |
| --------------------------- | -------- | ------------------ | ----------- |
| Git Management              | H        | 7                  |             |
| Bug Fixes                   | H        | 9                  |             |
| Connection                  | H        | 1                  |             |
| Express                     | H        | 1                  |             |
| Routes                      | H        | 2                  |             |
| Controllers/ Models         | H        | 1                  |             |
| Deployment                  | H        | 3                  |             |
| Switch/Link/Routes          | H        | 2                  |             |
| Display All                 | H        | 3                  |             |
| CRUD Options - Backend      | H        | 2                  |             |
| CRUD Options - Frontend     | H        | 6                  |             |
| Create Task Form            | H        | 1.5                |             |
| Create Person Form          | H        | 1.5                |             |
| Connect Form                | H        | 3                  |             |
| Styling                     | M        | 6                  |             |
| Font Awesome/ Icons         | M        | 2                  |             |
| Animation                   | L        | 5                  |             |
| React Strap Tabs            | M        | 4                  |             |
| Drop Down Form              | M        | 3                  |             |
| Postman Testing             | H        | 2                  |             |
| Hover                       | L        | 1.5                |             |
| Home Page                   | H        | 1.5                |             |
| Mobile/Tablet/Desktop       | H        | 4                  |             |
| "Done" Task Bar             | M        | 6                  |             |
| "Drag & Drop" Functionality | L        | 5                  |             |
|                             |          | Total Time: 83 hrs | Total Time: |

### ISSUES & RESOLUTIONS

### CODE SNIPPETS
