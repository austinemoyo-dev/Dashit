
from api_layer.routes.auth import auth_routes
from flask import Flask

app = Flask(__name__)
app.register_blueprint(auth_routes)

if __name__ == "__main__":
    app.run(debug=True)
