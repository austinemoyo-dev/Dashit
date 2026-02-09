
from flask import Blueprint, jsonify

vendor_routes = Blueprint("vendor_routes", __name__)


@vendor_routes.route("/vendors/health", methods=["GET"])
def health():
    return jsonify({"status": "ok"}), 200
