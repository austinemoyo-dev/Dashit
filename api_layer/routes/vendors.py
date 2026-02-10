from flask import Blueprint, request, jsonify
from business_logic.vendors.vendor_profile import create_vendor_profile
from business_logic.vendors.menu import add_menu_item, get_menu_items
vendor_routes = Blueprint("vendor_routes", __name__)

# TEMP until JWT is added
TEMP_USER_ID = 1

@vendor_routes.route("/vendor/profile", methods=["POST"])
def create_vendor():
    data = request.get_json()

    result = create_vendor_profile(
        user_id=TEMP_USER_ID,
        business_name=data.get("business_name"),
        business_address=data.get("business_address"),
        description=data.get("description")
    )

    status_code = 201 if result["success"] else 400
    return jsonify(result), status_code



# TEMP until auth is added
TEMP_VENDOR_ID = 1

@vendor_routes.route("/vendor/menu", methods=["POST"])
def create_menu_item():
    data = request.get_json()

    result = add_menu_item(
        vendor_id=TEMP_VENDOR_ID,
        name=data.get("name"),
        price=data.get("price"),
        description=data.get("description")
    )

    return jsonify(result), 201


@vendor_routes.route("/vendor/menu", methods=["GET"])
def fetch_menu_items():
    result = get_menu_items(TEMP_VENDOR_ID)
    return jsonify(result), 200