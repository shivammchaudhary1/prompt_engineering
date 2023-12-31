import pickle

menu = [
    {
        'dish_id': 1,
        'dish_name': 'Pasta',
        'price': 12.99,
        'stock': 5,
        'availability': True,
        'category': 'Main Course',
        'description': 'Delicious pasta with a choice of sauces.',
        'ingredients': ['Pasta', 'Sauce', 'Herbs'],
        'discounts': None,
        'image_url': 'https://images.pexels.com/photos/6382782/pexels-photo-6382782.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 2,
        'dish_name': 'Burger',
        'price': 9.99,
        'stock': 50,
        'availability': True,
        'category': 'Fast Food',
        'description': 'Classic burger with a juicy patty and fresh toppings.',
        'ingredients': ['Bun', 'Beef Patty', 'Lettuce', 'Tomato'],
        'discounts': '10% off on weekdays',
        'image_url': 'https://images.pexels.com/photos/10831651/pexels-photo-10831651.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 3,
        'dish_name': 'Pizza',
        'price': 14.99,
        'stock': 15,
        'availability': True,
        'category': 'Italian',
        'description': 'Authentic Italian pizza with a variety of toppings.',
        'ingredients': ['Dough', 'Tomato Sauce', 'Cheese', 'Toppings'],
        'discounts': None,
        'image_url': 'https://images.pexels.com/photos/11111603/pexels-photo-11111603.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 4,
        'dish_name': 'Steak',
        'price': 19.99,
        'stock': 8,
        'availability': True,
        'category': 'Main Course',
        'description': 'Tender steak cooked to perfection.',
        'ingredients': ['Beef Steak', 'Seasonings', 'Butter'],
        'discounts': None,
        'image_url': 'https://images.pexels.com/photos/7627422/pexels-photo-7627422.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 5,
        'dish_name': 'Salad',
        'price': 8.99,
        'stock': 20,
        'availability': True,
        'category': 'Appetizer',
        'description': 'Fresh and healthy salad with a variety of greens.',
        'ingredients': ['Lettuce', 'Tomato', 'Cucumber', 'Dressing'],
        'discounts': None,
        'image_url': 'https://images.pexels.com/photos/14571140/pexels-photo-14571140.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 6,
        'dish_name': 'Sushi',
        'price': 18.99,
        'stock': 12,
        'availability': True,
        'category': 'Japanese',
        'description': 'Traditional Japanese sushi rolls with fresh ingredients.',
        'ingredients': ['Sushi Rice', 'Nori', 'Fish', 'Vegetables'],
        'discounts': '20% off for a limited time',
        'image_url': 'https://images.pexels.com/photos/7243421/pexels-photo-7243421.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 7,
        'dish_name': 'Soup',
        'price': 6.99,
        'stock': 30,
        'availability': True,
        'category': 'Appetizer',
        'description': 'Warm and comforting soup for a delightful start.',
        'ingredients': ['Broth', 'Vegetables', 'Herbs', 'Spices'],
        'discounts': None,
        'image_url': 'https://images.pexels.com/photos/4062274/pexels-photo-4062274.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 8,
        'dish_name': 'Fish and Chips',
        'price': 15.99,
        'stock': 10,
        'availability': True,
        'category': 'Seafood',
        'description': 'Crispy fish and chips with tartar sauce.',
        'ingredients': ['Fish Fillet', 'Potatoes', 'Batter', 'Tartar Sauce'],
        'discounts': '15% off on weekends',
        'image_url': 'https://images.pexels.com/photos/8696562/pexels-photo-8696562.jpeg',
        'reviews': []
    },
    {
        'dish_id': 9,
        'dish_name': 'Chicken Curry',
        'price': 13.99,
        'stock': 15,
        'availability': True,
        'category': 'Indian',
        'description': 'Flavorful chicken curry with aromatic spices.',
        'ingredients': ['Chicken', 'Onions', 'Tomatoes', 'Spices'],
        'discounts': None,
        'image_url': 'https://images.pexels.com/photos/12737656/pexels-photo-12737656.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 10,
        'dish_name': 'Tacos',
        'price': 10.99,
        'stock': 25,
        'availability': True,
        'category': 'Mexican',
        'description': 'Authentic Mexican tacos with a choice of fillings.',
        'ingredients': ['Tortillas', 'Meat', 'Salsa', 'Guacamole'],
        'discounts': None,
        'image_url': 'https://images.pexels.com/photos/16694957/pexels-photo-16694957/free-photo-of-frying-shrimp-po-boy.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 11,
        'dish_name': 'Lasagna',
        'price': 16.99,
        'stock': 8,
        'availability': True,
        'category': 'Italian',
        'description': 'Layers of pasta, meat, and cheese baked to perfection.',
        'ingredients': ['Lasagna Sheets', 'Meat Sauce', 'Cheese', 'Herbs'],
        'discounts': None,
        'image_url': 'https://images.pexels.com/photos/2955819/pexels-photo-2955819.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 12,
        'dish_name': 'Ramen',
        'price': 11.99,
        'stock': 18,
        'availability': True,
        'category': 'Japanese',
        'description': 'Delicious ramen noodles with savory broth and toppings.',
        'ingredients': ['Ramen Noodles', 'Broth', 'Egg', 'Pork'],
        'discounts': '10% off for a limited time',
        'image_url': 'https://images.pexels.com/photos/16716140/pexels-photo-16716140/free-photo-of-shashlik-with-tomatoes-cheese-and-sausage.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 13,
        'dish_name': 'Cheesecake',
        'price': 7.99,
        'stock': 12,
        'availability': True,
        'category': 'Dessert',
        'description': 'Creamy and rich cheesecake with a crumbly crust.',
        'ingredients': ['Cream Cheese', 'Sugar', 'Graham Cracker Crust'],
        'discounts': None,
        'image_url': 'https://images.pexels.com/photos/7190367/pexels-photo-7190367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 14,
        'dish_name': 'Garden Salad',
        'price': 9.99,
        'stock': 20,
        'availability': True,
        'category': 'Appetizer',
        'description': 'Refreshing salad with fresh garden vegetables.',
        'ingredients': ['Lettuce', 'Cucumbers', 'Tomatoes', 'Dressing'],
        'discounts': None,
        'image_url': 'https://images.pexels.com/photos/772508/pexels-photo-772508.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    },
    {
        'dish_id': 15,
        'dish_name': 'Chicken Wings',
        'price': 12.99,
        'stock': 25,
        'availability': True,
        'category': 'Appetizer',
        'description': 'Crispy and flavorful chicken wings with various sauces.',
        'ingredients': ['Chicken Wings', 'Seasonings', 'Sauces'],
        'discounts': 'Buy one, get one free on Mondays',
        'image_url': 'https://images.pexels.com/photos/10361459/pexels-photo-10361459.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'reviews': []
    }
    # Add more dishes as needed
]
with open('menu.pickle', 'wb') as file:
    pickle.dump(menu, file)
