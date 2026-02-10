(for LOGIN)
## POST /auth/login

### Request
```json
{
  "email": "string",
  "password": "string"
}

(for Register)
## POST /auth/register

### Request
```json
{
  "email": "string",
  "password": "string",
  "role": "customer | vendor | rider"
}

🔥(Create Vendor Profile)
POST /vendor/profile

Request
{
  "business_name": "Mama T Kitchen",
  "business_address": "Yaba, Lagos",
  "description": "Local Nigerian dishes"
}

Response – Success
{
  "success": true,
  "message": "Vendor profile created successfully",
  "vendor": {
    "id": 1,
    "user_id": 1,
    "business_name": "Mama T Kitchen",
    "business_address": "Yaba, Lagos",
    "description": "Local Nigerian dishes",
    "is_active": true
  }
}

Response – Error
{
  "success": false,
  "message": "Vendor profile already exists"
}

🔥(For Menu Items)
POST /vendor/menu
(Description)
Allows a vendor to add a food item to their menu.

Request
{
  "name": "Jollof Rice",
  "price": 1500,
  "description": "Served with chicken"
}

Response – Success  
{
  "success": true,
  "message": "Menu item added successfully",
  "item": {
    "id": 1,
    "vendor_id": 1,
    "name": "Jollof Rice",
    "price": 1500,
    "description": "Served with chicken"
  }
}

🔥(Get vendor menu)
Get /vendor/menu
(Description))
Fetches all menu items for a vendor.

Response 
{
  "success": true,
  "items": [
    {
      "id": 1,
      "name": "Jollof Rice",
      "price": 1500,
      "description": "Served with chicken"
    }
  ]
}

🔥USER PROFILE
1️⃣ Get User Profile
GET /user/profile
(Description)
Fetches the logged-in user’s profile details.

Response
{
  "success": true,
  "profile": {
    "id": 1,
    "email": "user@example.com",
    "role": "customer",
    "full_name": "John Doe",
    "phone": "08012345678",
    "address": "Lagos"
  }
}

2️⃣ Update User Profile
PUT /user/profile
(Description)
Updates the logged-in user’s profile details.

Request
{
  "full_name": "John Doe",
  "phone": "08012345678",
  "address": "Lagos"
}

Response
{
  "success": true,
  "message": "User profile updated successfully",
} 