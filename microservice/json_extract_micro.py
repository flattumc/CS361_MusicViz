from flask import Flask, request, jsonify
import json

app = Flask(__name__)

def find_in_data(data, key, filter_key=None, filter_value=None):
    if isinstance(data, dict):
        if filter_key in data and data.get(filter_key) == filter_value:
            return data.get(key, None)
        for k, v in data.items():
            found = find_in_data(v, key, filter_key, filter_value)
            if found:
                return found
    elif isinstance(data, list):
        for item in data:
            found = find_in_data(item, key, filter_key, filter_value)
            if found:
                return found
    return None

@app.route('/upload_and_get_data', methods=['POST'])
def upload_and_get_data():
    if 'file' not in request.files:
        return jsonify({"error": "No file part"}), 400
    
    file = request.files['file']
    output_key = request.form.get('output_key')  # Key to output
    filter_json = request.form.get('filter_json')  # Optional filter in the format "key:value"

    if file.filename == '':
        return jsonify({"error": "No selected file"}), 400
    
    try:
        data = json.load(file)

        # Apply filtering if filter_json is provided
        filter_key, filter_value = None, None
        if filter_json:
            filter_key, filter_value = filter_json.split(":")
            filter_key, filter_value = filter_key.strip(), filter_value.strip()

        # Find and return the data for the output_key, applying any filter if specified
        output_data = find_in_data(data, output_key, filter_key, filter_value)
        if output_data is not None:
            return jsonify(output_data)
        else:
            return jsonify({"error": f"Data for key '{output_key}' not found or does not match filter criteria"}), 404
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True)
