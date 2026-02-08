# api-layer/routes/auth.py

from flask import Blueprint, request, jsonify
from business_logic.auth.login import login_user
from business_logic.auth.register import register_user

auth_routes = Blueprint("auth_routes", __name__)
#for login 

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


#for register
@auth_routes.route("/auth/register", methods=["POST"])
def register():
    data = request.get_json()

    email = data.get("email")
    password = data.get("password")
    role = data.get("role")

    if not email or not password or not role:
        return jsonify({
            "success": False,
            "message": "Email, password, and role are required",
            "user": None
        }), 400

    result = register_user(email, password, role)

    status_code = 201 if result["success"] else 400
    return jsonify(result), status_code
