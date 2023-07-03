snack_inventory = []


def add_snack():
    snack_id = input("Enter snack ID: ")
    snack_name = input("Enter snack name: ")
    price = float(input("Enter price: "))
    availability = input("Is the snack available? (yes/no): ").lower()

    snack = {
        "snack_id": snack_id,
        "snack_name": snack_name,
        "price": price,
        "availability": availability
    }

    snack_inventory.append(snack)
    print("Snack added to inventory successfully.")


def remove_snack():
    snack_id = input("Enter snack ID to remove: ")
    for snack in snack_inventory:
        if snack['snack_id'] == snack_id:
            snack_inventory.remove(snack)
            print("Snack removed from inventory successfully.")
            return

    print("Snack not found in inventory.")


def update_availability():
    snack_id = input("Enter snack ID to update availability: ")
    availability = input("Is the snack available? (yes/no): ").lower()

    for snack in snack_inventory:
        if snack['snack_id'] == snack_id:
            snack['availability'] = availability
            print("Snack availability updated successfully.")
            return

    print("Snack not found in inventory.")


def record_sale():
    snack_id = input("Enter snack ID sold: ")

    for snack in snack_inventory:
        if snack['snack_id'] == snack_id:
            if snack['availability'] == 'yes':
                snack['availability'] = 'no'
                print("Sale recorded successfully.")
                return
            else:
                print("Snack is not available for sale.")
                return

    print("Snack not found in inventory.")


def display_inventory():
    print("Snack Inventory:")
    print("ID\tName\t\tPrice\tAvailability")

    for snack in snack_inventory:
        print(
            f"{snack['snack_id']}\t{snack['snack_name']}\t{snack['price']}\t{snack['availability']}")

    print()


def display_menu():
    print("Mumbai Munchies: The Canteen Chronicle")
    print("1. Add a snack to the inventory")
    print("2. Remove a snack from the inventory")
    print("3. Update the availability of a snack")
    print("4. Record a sale")
    print("5. Display snack inventory")
    print("6. Exit")


def run_canteen_app():
    while True:
        display_menu()
        choice = input("Enter your choice (1-6): ")
        print()

        if choice == '1':
            add_snack()
        elif choice == '2':
            remove_snack()
        elif choice == '3':
            update_availability()
        elif choice == '4':
            record_sale()
        elif choice == '5':
            display_inventory()
        elif choice == '6':
            print("Exiting the application.")
            break
        else:
            print("Invalid choice. Please try again.")


run_canteen_app()
