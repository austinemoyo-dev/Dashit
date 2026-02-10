from business_logic.db import get_connection
from datetime import datetime

def create_vendor_profile(user_id, business_name, business_address, description):
    conn = get_connection()
    cursor = conn.cursor()

    # Check if vendor already exists for this user
    cursor.execute(
        "SELECT id FROM vendors WHERE user_id = ?",
        (user_id,)
    )
    existing_vendor = cursor.fetchone()

    if existing_vendor:
        conn.close()
        return {
            "success": False,
            "message": "Vendor profile already exists"
        }

    cursor.execute(
        """
        INSERT INTO vendors (
            user_id,
            business_name,
            business_address,
            description,
            is_active,
            created_at
        )
        VALUES (?, ?, ?, ?, ?, ?)
        """,
        (
            user_id,
            business_name,
            business_address,
            description,
            1,
            datetime.now().isoformat()
        )
    )

    vendor_id = cursor.lastrowid
    conn.commit()
    conn.close()

    return {
        "success": True,
        "message": "Vendor profile created successfully",
        "vendor": {
            "id": vendor_id,
            "user_id": user_id,
            "business_name": business_name,
            "business_address": business_address,
            "description": description,
            "is_active": True
        }
    }