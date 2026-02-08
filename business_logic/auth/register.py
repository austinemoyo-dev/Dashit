from business_logic.db import get_connection
from datetime import datetime

def register_user(email, password, role):
    conn = get_connection()
    cursor = conn.cursor()

    try:
        cursor.execute(
            """
            INSERT INTO users (email, password, role, created_at)
            VALUES (?, ?, ?, ?)
            """,
            (email, password, role, datetime.now().isoformat())
        )
        conn.commit()

        user_id = cursor.lastrowid

        return {
            "success": True,
            "message": "Registration successful",
            "user": {
                "id": user_id,
                "email": email,
                "role": role
            }
        }

    except Exception:
        return {
            "success": False,
            "message": "Email already exists",
            "user": None
        }

    finally:
        conn.close()