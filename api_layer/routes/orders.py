
from flask import Blueprint, jsonify

order_routes = Blueprint("order_routes", __name__)


@order_routes.route("/orders/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200
