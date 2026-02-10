from flask import Blueprint, request, jsonify
from business_logic.users.profile import get_user_profile, update_user_profile

user_routes = Blueprint("user_routes", __name__)

# TEMP until auth/JWT is added
TEMP_USER_ID = 1


@user_routes.route("/user/profile", methods=["GET"])
def fetch_profile():
    result = get_user_profile(TEMP_USER_ID)
    return jsonify(result), 200


@user_routes.route("/user/profile", methods=["PUT"])
def update_profile():
    data = request.get_json()

    result = update_user_profile(
        user_id=TEMP_USER_ID,
        full_name=data.get("full_name"),
        phone=data.get("phone"),
        address=data.get("address")
    )

    return jsonify(result), 200