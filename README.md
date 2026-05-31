# 🎓 Presentation Lottery

A web application that generates a random presentation order for school teams using a Python Flask backend and an interactive frontend experience.

Instead of displaying the results instantly, the application reveals positions one by one through an animated slot-machine style system, building suspense until first place is revealed.

---

## ✨ Features

* Random team order generation
* Flask REST API
* Interactive web interface
* Animated slot-machine reveal system
* Dynamic leaderboard
* Reveal positions from last place to first place
* Dark mode support
* Confetti celebration for first place
* Local JSON result storage
* Responsive design

---

## 🛠️ Tech Stack

### Backend

* Python
* Flask
* Flask-CORS

### Frontend

* HTML5
* CSS3
* Vanilla JavaScript

### Data Storage

* JSON

---

## 🎰 How It Works

1. Enter the number of teams.
2. Click **Spin**.
3. The frontend sends a request to the Flask API.
4. The backend generates a random presentation order.
5. Results are returned as JSON.
6. The slot machine animation begins.
7. Positions are revealed from last place to first place.
8. The leaderboard fills progressively.
9. First place is revealed at the end.

---

## 📡 API Endpoint

### POST `/generate`

Request:

```json
{
    "count": 5
}
```

Response example:

```json
{
    "Equipo 3": 1,
    "Equipo 4": 2,
    "Equipo 1": 3,
    "Equipo 5": 4,
    "Equipo 2": 5
}
```

---

## 📂 Project Structure

```text
presentation-lottery/
│
├── lottery.py
├── server.py
│
├── ui/
|   └── app.js
|   └── index.html
|   └── style.css
│
├── data/
│   └── results.json
│
├── requirements.txt
├── README.md
└── LICENSE
```

---

## 🚀 Running the Project

Install dependencies:

```bash
pip install -r requirements.txt
```

Start the backend:

```bash
python server.py
```

Open:

```text
index.html
```

in your browser.

---

## 📚 Learning Goals

This project was created as a learning experience focused on:

* Python programming
* Flask APIs
* JSON data handling
* HTTP requests
* Frontend and backend integration
* JavaScript asynchronous programming
* DOM manipulation
* Web application architecture

---

## 🤝 Acknowledgements

This project was developed by MaxRoblero.

AI tools such as GitHub Copilot and ChatGPT were used as learning and development assistants, particularly for frontend implementation, debugging assistance, and web development guidance.

Project architecture, integration, customization, testing, and final decisions were carried out by the author.

---

## 📄 License

This project is licensed under the MIT License.
