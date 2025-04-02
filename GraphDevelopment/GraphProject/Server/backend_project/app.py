from flask import Flask, jsonify, request
from pymilvus import connections,utility
import language_tool_python
from flask_cors import CORS
from spellchecker import SpellChecker


app = Flask(__name__)
CORS(app)
spell = SpellChecker()
tool = language_tool_python.LanguageTool('en-US')

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

@app.route('/correct', methods=['POST'])
def correct_sentence():
    data = request.get_json()
    sentence = data.get("text", "")

    if not sentence:
        return jsonify({"error": "No text provided"}), 400

    words = sentence.split()
    corrected_words = [spell.correction(word) or word for word in words]
    corrected_sentence = " ".join(corrected_words)

    return jsonify({"corrected": corrected_sentence})

if __name__ == '__main__':
    app.run(debug=True)
