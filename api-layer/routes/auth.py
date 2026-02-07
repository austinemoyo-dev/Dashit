# api-layer/routes/auth.py

from flask import Blueprint, request, jsonify
from business_logic.auth.login import login_user

auth_routes = Blueprint("auth_routes", __name__)

@auth_routes.route("/auth/login", methods=["POST"])
def login():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")

    if not email or not password:
        return jsonify({
            "success": False,
            "message": "Email and password are required"
        }), 400

    result = login_user(email, password)

    status_code = 200 if result["success"] else 401
    return jsonify(result), status_code
