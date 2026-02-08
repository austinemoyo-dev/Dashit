
# business-logic/auth/login.py

def login_user(email: str, password: str):
    """
    Handles user login logic.

    Returns:
    {
        success: bool,
        message: str,
        token: str | None,
        user: dict | None
    }
    """

    # TEMPORARY fake user (for now)
    fake_user = {
        "id": 1,
        "email": "test@example.com",
        "password": "1234",   # later this will be hashed
        "role": "vendor"
    }

    if email != fake_user["email"]:
        return {
            "success": False,
            "message": "User not found",
            "token": None,
            "user": None
        }

    if password != fake_user["password"]:
        return {
            "success": False,
            "message": "Invalid password",
            "token": None,
            "user": None
        }

    # TEMP token (real JWT later)
    token = "sample-login-token"

    return {
        "success": True,
        "message": "Login successful",
        "token": token,
        "user": {
            "id": fake_user["id"],
            "email": fake_user["email"],
            "role": fake_user["role"]
        }
    }
