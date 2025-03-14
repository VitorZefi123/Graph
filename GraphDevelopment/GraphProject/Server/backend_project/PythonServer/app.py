from flask import Flask, jsonify
from pymilvus import connections,utility

app = Flask(__name__)

# Simple test connection to Milvus
@app.route('/test_connection', methods=['GET'])
def test_connection():
    try:
        # Connect to Milvus server using the provided URI
        uri = "http://192.168.100.164:19530"
        connections.connect(uri=uri)

        # List all collections in the Milvus database
        collection_names = utility.list_collections()

        # If the connection is successful and collections are fetched, return the collections
        return jsonify({
            "message": "Successfully connected to Milvus!",
            "collections": collection_names
        }), 200
    except Exception as e:
        # In case of failure, return an error message
        return jsonify({"message": f"Failed to connect to Milvus: {str(e)}"}), 500

# A simple default route
@app.route('/')
def hello_world():
    return 'Hello, World!'

if __name__ == '__main__':
    app.run(debug=True)
