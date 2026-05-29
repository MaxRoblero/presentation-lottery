import lottery
def main():
    teams = lottery.setup_lottery()
    order = lottery.generate_order(teams)

    print(teams)
    print(order)

if __name__ == "__main__":
    main()

# ============================
#      Code by MaxRoblero
# ============================
