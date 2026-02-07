# business-logic/auth/register.py

def register_user(email: str, password: str, role: str):
    """
    Handles user registration logic.

    Returns:
    {
        success: bool,
        message: str,
        user: dict | None
    }
    """

    allowed_roles = ["customer", "vendor", "rider"]

    if role not in allowed_roles:
        return {
            "success": False,
            "message": "Invalid role",
            "user": None
        }

    # TEMP: pretend user does not already exist
    # (real DB check later)

    if len(password) < 4:
        return {
            "success": False,
            "message": "Password too short",
            "user": None
        }

    # TEMP fake created user
    user = {
        "id": 2,
        "email": email,
        "role": role
    }

    return {
        "success": True,
        "message": "Registration successful",
        "user": user
    }
