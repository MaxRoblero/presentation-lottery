# =================
#      Imports
# =================
import random

# ===================
#       Lottery
# ===================

def get_team_count():
    return int(empty_text("¿Cuántos equipos hay? ", [is_number]))

def setup_lottery():
    available_teams = []
    count = get_team_count()
    for  i in range(1, count + 1):
        available_teams.append("Equipo " + str(i))
    return available_teams

def generate_order(available_teams: list):
    order = {}
    position = len(available_teams)

    while available_teams:
        selected_team = random.choice(available_teams)
        available_teams.remove(selected_team)

        order[selected_team] = position
        position -= 1

    return order

# ====================
#       Helpers
# ====================

def empty_text(prompt, validators=None):
    validators = validators or []
    while True:
        text = input(prompt).strip()
        if not text:
            print("This field cannot be empty.")
            continue
        if all(validator(text) for validator in validators):
            return text

def is_number(text):
    try:
        float(text)
        return True
    except ValueError:
        print("Solo ingresa números.")
        return False

# ============================
#      Code by MaxRoblero
# ============================
