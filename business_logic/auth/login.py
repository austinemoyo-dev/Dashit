from business_logic.db import get_connection

def login_user(email, password):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT id, email, password, role FROM users WHERE email = ?",
        (email,)
    )
    row = cursor.fetchone()
    conn.close()

    if not row:
        return {
            "success": False,
            "message": "User not found",
            "token": None,
            "user": None
        }

    user_id, email, stored_password, role = row

    if password != stored_password:
        return {
            "success": False,
            "message": "Invalid password",
            "token": None,
            "user": None
        }

    return {
        "success": True,
        "message": "Login successful",
        "token": "sample-login-token",
        "user": {
            "id": user_id,
            "email": email,
            "role": role
        }
    }