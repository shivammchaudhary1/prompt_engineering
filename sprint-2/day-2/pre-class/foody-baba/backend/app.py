
import os
from flask import Flask, jsonify, request
import pickle
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Get the absolute path to the directory containing app.py
current_dir = os.path.dirname(os.path.abspath(__file__))
menu_file_path = os.path.join(current_dir, 'menu.pickle')

# Load menu data from pickle file if it exists, otherwise initialize an empty menu
try:
    with open(menu_file_path, 'rb') as file:
        menu = pickle.load(file)
except FileNotFoundError:
    menu = {}


@app.route('/api/dishes', methods=['GET'])
def get_dishes():
    return jsonify(menu)




@app.route('/api/dishes', methods=['POST'])
def create_dish():
    new_dish = request.json
    dish_id = new_dish.get('dish_id')
    menu.append(new_dish)  # Use the append() method to add the new dish to the menu list
    save_menu()
    return jsonify(new_dish), 201


# @app.route('/api/dishes', methods=['POST'])
# def create_dish():
#     new_dish = request.json
#     dish_id = new_dish.get('dish_id')
#     menu.append(new_dish)  # Use the append() method to add the new dish to the menu list
#     save_menu()
#     return jsonify(new_dish), 201




    
@app.route('/api/dishes/<int:dish_id>', methods=['GET'])
def get_dish(dish_id):
    dish = menu[dish_id-1]
    if dish:
        return jsonify(dish)
    else:
        return jsonify({'error': 'Dish not found'}), 404
    




@app.route('/api/dishes/<int:dish_id>', methods=['PUT'])
def update_dish(dish_id):
    updated_dish = request.json
    if dish_id-1 in range(len(menu)):
        menu[dish_id-1] = updated_dish
        save_menu()
        return jsonify(updated_dish)
    else:
        return jsonify({'error': 'Dish not found'}), 404



@app.route('/api/dishes/<int:dish_id>', methods=['DELETE'])
def delete_dish(dish_id):
    if dish_id-1 in range(len(menu)):
        del menu[dish_id-1]
        save_menu()
        return jsonify({'message': 'Dish deleted'})
    else:
        return jsonify({'error': 'Dish not found'}), 404



def save_menu():
    with open(menu_file_path, 'wb') as file:
        pickle.dump(menu, file)


if __name__ == '__main__':
    app.run(debug=True)
