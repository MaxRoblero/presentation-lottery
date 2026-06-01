# =================
#      Imports
# =================
from flask import Flask, request, jsonify, send_from_directory
from flask_cors import CORS
import lottery

# ================
#       Code
# ================
app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return send_from_directory("ui", "index.html")

@app.route("/<path:path>")
def static_files(path):
    return send_from_directory("ui", path)

@app.route("/generate", methods=["POST"])
def generate():
    data = request.get_json(silent=True)

    if not data or "count" not in data:
        return jsonify({"error": "missing count"}), 400

    try:
        count = int(data["count"])
    except:
        return jsonify({"error": "count must be a number"}), 400
    
    if count <= 0:
        return jsonify({"error": "count must be > 0"})

    teams = lottery.setup_lottery(count)
    order = lottery.generate_order(teams)

    lottery.save_results(order)

    return jsonify(order)

if __name__ == "__main__":
    app.run(debug=True)

# ============================
#      Code by MaxRoblero
# ============================
