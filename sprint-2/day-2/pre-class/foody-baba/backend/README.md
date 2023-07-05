Here are some example commands to perform CRUD operations:

GET all dishes:

shell
Copy code
curl http://localhost:5000/api/dishes
GET a specific dish:

shell
Copy code
curl http://localhost:5000/api/dishes/1
POST (create) a new dish:

shell
Copy code
curl -X POST -H "Content-Type: application/json" -d '{"dish_id": 4, "dish_name": "Sushi", "price": 18.99, "availability": true}' http://localhost:5000/api/dishes
PUT (update) an existing dish:

shell
Copy code
curl -X PUT -H "Content-Type: application/json" -d '{"dish_id": 2, "dish_name": "Cheeseburger", "price": 10.99, "availability": false}' http://localhost:5000/api/dishes/2
DELETE a dish:

shell
Copy code
curl -X DELETE http://localhost:5000/api/dishes/3
Feel free to modify the code according to your specific requirements, and adapt the HTTP requests based on the structure of your dish data.
