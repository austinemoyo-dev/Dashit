print("🔥 THIS IS THE APP.PY PYTHON IS RUNNING 🔥")
from flask import Flask
from flask_cors import CORS

from api_layer.routes.auth import auth_routes
from api_layer.routes.users import user_routes
from api_layer.routes.vendors import vendor_routes

app = Flask(__name__)
CORS(app)

app.register_blueprint(auth_routes)
app.register_blueprint(user_routes)
app.register_blueprint(vendor_routes)

if __name__ == "__main__":
    app.run(debug=True)