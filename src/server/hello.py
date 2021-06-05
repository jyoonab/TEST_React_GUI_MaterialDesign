from flask import Flask, json, request
from flask_cors import CORS

import cmdResult
import elastic

api = Flask(__name__)
CORS(api)

@api.route('/command', methods=['POST'])
def get_command_result():
    return json.dumps(cmdResult.list_command(request.form['cmd']))

@api.route('/insert', methods=['POST'])
def insert_data():
    return elastic.make_index("alias")

@api.route('/save', methods=['POST'])
def save_data():
    return elastic.save_data("alias", request.form['cmd'])

@api.route('/delete', methods=['POST'])
def delete_document():
    return elastic.delete_document("alias", request.form['cmd'])

@api.route('/getaliaslist', methods=['GET'])
def get_alias_list():
    return elastic.get_alias_list("dig")

if __name__ == '__main__':
    api.run()
