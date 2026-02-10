from business_logic.db import get_connection
from datetime import datetime

def add_menu_item(vendor_id, name, price, description):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        INSERT INTO menu_items (
            vendor_id,
            name,
            price,
            description,
            created_at
        )
        VALUES (?, ?, ?, ?, ?)
        """,
        (
            vendor_id,
            name,
            price,
            description,
            datetime.now().isoformat()
        )
    )

    item_id = cursor.lastrowid
    conn.commit()
    conn.close()

    return {
        "success": True,
        "message": "Menu item added successfully",
        "item": {
            "id": item_id,
            "vendor_id": vendor_id,
            "name": name,
            "price": price,
            "description": description
        }
    }


def get_menu_items(vendor_id):
    conn = get_connection()
    cursor = conn.cursor()

    cursor.execute(
        """
        SELECT id, name, price, description
        FROM menu_items
        WHERE vendor_id = ?
        """,
        (vendor_id,)
    )

    rows = cursor.fetchall()
    conn.close()

    items = []
    for row in rows:
        items.append({
            "id": row[0],
            "name": row[1],
            "price": row[2],
            "description": row[3]
        })

    return {
        "success": True,
        "items": items
    }