
from flask import Blueprint, jsonify

user_routes = Blueprint("user_routes", __name__)


@user_routes.route("/users/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200
