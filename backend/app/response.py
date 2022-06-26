from flask import jsonify

class Response:
    @classmethod
    def success(cls, status, data, status_code=200):
        response_dict = {
            'status': status,
            'data': data
        }
        return jsonify(response_dict), status_code

    @classmethod
    def error(cls, error_code, message):
        response_dict = {
            'status': 'error',
            'error': message,
            'error_code': error_code
        }
        return jsonify(response_dict), error_code