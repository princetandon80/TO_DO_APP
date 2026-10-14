# To Do List App

A clean, responsive task management web application built using React and Vite. It allows users to organize their daily schedule efficiently with real-time task addition, deletion, and vertical position reordering.

---

## Preview
![To Do List App Input State](./assets/Screenshot%202026-10-14%20204146.png)
![To Do List App Preview](./assets/Screenshot%202026-10-14%20204155.png)

---

## Key Features

- **Task Creation**: Add items directly into your list via input submission or keyboard events[cite: 1, 2].
- **Task Removal**: Instantly delete individual tasks from the board[cite: 1, 2].
- **Priority Reordering**: Shift tasks up or down within the sequence using dedicated positional controls[cite: 1, 2].
- **Clean UI**: Minimalist card-style layout with centered viewport alignment and clear action buttons[cite: 1, 2].

---

## Tech Stack

- **Frontend**: React
- **Build Tool**: Vite
- **Styling**: Vanilla CSS3
- **Language**: JavaScript ES6+

---

## Project Structure

```text
React/
├── .gitignore
├── README.md
├── assets/
│   └── Screenshot 2026-10-14 204155.png
└── To_Do-List/
    └── to_do_list/
        ├── public/
        ├── src/
        │   ├── assets/
        │   ├── App.css
        │   ├── App.jsx
        │   ├── index.css
        │   ├── main.jsx
        │   └── todolist.jsx
        ├── index.html
        ├── package.json
        └── vite.config.js

Installation & Setup
Clone the repository:

Bash
git clone [https://github.com/princetandon80/TO_DO_APP.git](https://github.com/princetandon80/TO_DO_APP.git)
Navigate into the application directory:

Bash
cd TO_DO_APP/To_Do-List/to_do_list
Install project dependencies:

Bash
npm install
Start the Vite development server:

Bash
npm run dev
Open your browser and navigate to the local server address displayed in your terminal:

### Terminal commands to push this to GitHub

Once saved, run these lines in Git Bash inside your `Desktop/React` folder:

```bash
git add README.md assets/
git commit -m "docs: add comprehensive readme with preview"
git push origin main



## Acknowledgements

- Inspired by and built following tutorials by [Bro Code on YouTube](https://www.youtube.com/@BroCodez).
