from flask import Flask, request, jsonify
from pymongo import MongoClient
from config import MONGO_URI
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

client = MongoClient(MONGO_URI)
db = client['Contact']  

@app.route('/save', methods=['POST'])
def save():
    try:
        data = request.json
        datos_collection = db['data']
        datos_collection.insert_one(data)
        return jsonify({'message': 'Datos almacenados exitosamente'})
    except Exception as e:
        return jsonify({'error': str(e)})

if __name__ == '__main__':
    app.run(debug=True)




