from business_logic.db import get_connection

def get_user_profile(user_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        "SELECT id, email, role, full_name, phone, address FROM users WHERE id = ?",
        (user_id,)
    )
    row = cursor.fetchone()
    conn.close()

    if not row:
        return {
            "success": False,
            "message": "User not found",
            "profile": None
        }

    keys = ["id", "email", "role", "full_name", "phone", "address"]
    return {
        "success": True,
        "message": "Profile fetched successfully",
        "profile": dict(zip(keys, row))
    }

def update_user_profile(user_id, full_name, phone, address):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        UPDATE users
        SET full_name = ?, phone = ?, address = ?
        WHERE id = ?
        """,
        (full_name, phone, address, user_id)
    )

    conn.commit()
    conn.close()

    return {
        "success": True,
        "message": "User profile updated successfully"
    }