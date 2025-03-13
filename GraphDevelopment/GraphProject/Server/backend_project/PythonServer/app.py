from flask import Flask, jsonify
from pymilvus import connections

app = Flask(__name__)

@app.route('/test_connection', methods=['GET'])
def test_connection():
    try:
        connections.connect("default", host="127.0.0.1", port="19530")
        
        return jsonify({"message": "Successfully connected to Milvus!"}), 200
    except Exception as e:
        return jsonify({"message": f"Failed to connect to Milvus: {str(e)}"}), 500

# A simple default route
@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
