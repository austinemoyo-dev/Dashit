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

(For Vendor)
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