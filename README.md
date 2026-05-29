# 🎲 Presentation Lottery

A simple web app that generates a random order for team presentations
using a Flask backend and a basic HTML/JS frontend.

## 🚀 Features

-   Generate random team order
-   REST API with Flask
-   Frontend connected via fetch
-   JSON response system
-   Local data storage

## 🧠 Tech Stack

-   Flask (Backend API)
-   HTML + JavaScript (Frontend)
-   Python (Logic)

## ⚙️ How to run

1.  Install dependencies:

  pip install flask flask-cors

2.  Run server:

  python server.py

3.  Open index.html in browser

## 📡 API Endpoint

POST /generate

  Request:`{ “count”: 5 }`

  Response: `{ “Equipo 1”: 3, “Equipo 2”: 1 }`

---

## 🎯 Goal

Make team presentation order random and easy to use for classroom
environments.
