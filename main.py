import threading
import webview
from server import app

def run_flask():
    app.run(host="127.0.0.1", port=5000, debug=False)

if __name__ == "__main__":
    # levantar backend
    t = threading.Thread(target=run_flask)
    t.daemon = True
    t.start()

    # abrir app de escritorio
    webview.create_window("🎓 Presentation Lottery", "http://127.0.0.1:5000", maximized=True)
    webview.start()