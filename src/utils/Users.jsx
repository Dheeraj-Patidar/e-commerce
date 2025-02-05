const users=[
    {
        "id": 101,
        "name": "Alice Johnson",
        "role": "buyer",
        "email": "alice@example.com",
        "cart": [
          { "productId": 2, "quantity": 1 },
          { "productId": 10, "quantity": 2 }
        ],
        "wishlist": [3, 5]
      },
      {
        "id": 102,
        "name": "Bob Smith",
        "role": "seller",
        "email": "bob@example.com",
        "cart": [],
        "wishlist": []
      },
      {
        "id": 103,
        "name": "Carol Admin",
        "role": "admin",
        "email": "carol.admin@example.com",
        "cart": [],
        "wishlist": []
      }
  
]

export default users