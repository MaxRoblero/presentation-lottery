# 🎓 Presentation Lottery

A desktop and web-based application that generates a random order for classroom presentations using a Python backend and a modern animated interface.

## 📸 Overview

Presentation Lottery allows teachers and students to generate a fair and random presentation order through an engaging slot-machine style animation.

The project started as a console application and evolved into a complete desktop application powered by Flask, PyWebView, HTML, CSS, and JavaScript.

---

## ✨ Features

* 🎲 Random team order generation
* 🎰 Slot machine reveal animation
* 🏆 Dynamic leaderboard
* 🌙 Dark mode support
* 🎉 Final celebration effects
* 📡 REST API with Flask
* 💾 JSON result storage
* 🖥️ Desktop application using PyWebView
* 📱 Responsive user interface

---

## 🧠 Tech Stack

### Backend

* Python
* Flask
* Flask-CORS

### Frontend

* HTML5
* CSS3
* JavaScript (Vanilla JS)

### Desktop

* PyWebView

### Tools

* Git
* GitHub
* PyInstaller

---

## 📂 Project Structure

```text
presentation-lottery/
│
├── ui/
│   ├── index.html
│   ├── style.css
│   └── app.js
│
├── data/
│   └── results.json
│
├── lottery.py
├── server.py
├── main.py
├── requirements.txt
├── README.md
└── LICENSE
```

---

## 🚀 Running the Project

### 1. Clone the repository

```bash
git clone https://github.com/USERNAME/presentation-lottery.git
cd presentation-lottery
```

### 2. Install dependencies

```bash
pip install -r requirements.txt
```

### 3. Run the application

```bash
python main.py
```

---

## 📡 API Endpoint

### POST /generate

#### Request

```json
{
    "count": 5
}
```

#### Response

```json
{
    "Equipo 1": 3,
    "Equipo 2": 1,
    "Equipo 3": 5,
    "Equipo 4": 2,
    "Equipo 5": 4
}
```

---

## 📦 Building the Executable

Using PyInstaller:

```bash
pyinstaller --onefile --windowed main.py
```

The executable will be generated inside:

```text
dist/
```

---

## 🗂️ Version History

### v1.0.0-alpha

* Initial console version
* Random team assignment system
* JSON result storage

### v1.0.0

* Flask API implementation
* Frontend and backend communication

### v1.1.0

* Web interface
* Slot machine animation
* Leaderboard system
* Dark mode
* Celebration effects

### v1.2.0

* Desktop application using PyWebView
* Flask serves frontend files directly
* Simplified application startup through `main.py`
* Improved deployment workflow

---

## 🤖 AI Usage Disclosure

This project was developed by MaxRoblero.

AI tools were used as learning assistants and to help with parts of the HTML, CSS, and JavaScript implementation. The Python backend logic, project structure decisions, debugging process, and integration work were completed as part of the learning experience.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**MaxRoblero**

GitHub: https://github.com/MaxRoblero
