from flask import Flask, render_template, request, redirect

app = Flask(__name__)

# Sample data for menu and orders (to be replaced with your own database)
menu = {
    1: {'dish_name': 'Pasta', 'price': 10, 'availability': True},
    2: {'dish_name': 'Pizza', 'price': 15, 'availability': True},
    # ...
}

orders = {}

# Home page
@app.route('/')
def home():
    return render_template('index.html', menu=menu, orders=orders)

# Add a new dish to the menu
@app.route('/add_dish', methods=['POST'])
def add_dish():
    dish_name = request.form['dish_name']
    price = float(request.form['price'])
    availability = True if request.form['availability'] == 'yes' else False

    # Assign a unique ID for the dish
    dish_id = max(menu.keys()) + 1 if menu else 1

    # Create a new dish entry
    menu[dish_id] = {'dish_name': dish_name, 'price': price, 'availability': availability}

    return redirect('/')

# Remove a dish from the menu
@app.route('/remove_dish/<int:dish_id>')
def remove_dish(dish_id):
    if dish_id in menu:
        del menu[dish_id]
    return redirect('/')

# Take a new order
@app.route('/take_order', methods=['POST'])
def take_order():
    customer_name = request.form['customer_name']
    dish_ids = request.form.getlist('dish_ids')

    order_id = len(orders) + 1

    # Check if each dish is available
    for dish_id in dish_ids:
        if dish_id not in menu or not menu[dish_id]['availability']:
            return 'Invalid dish ID or dish not available.'

    # Process the order
    orders[order_id] = {'customer_name': customer_name, 'dish_ids': dish_ids, 'status': 'received'}

    return redirect('/')

# Update order status
@app.route('/update_status/<int:order_id>', methods=['POST'])
def update_status(order_id):
    if order_id in orders:
        new_status = request.form['status']
        orders[order_id]['status'] = new_status
    return redirect('/')

if __name__ == '__main__':
    app.run(debug=True)
