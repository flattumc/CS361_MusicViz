# Microservice for Processing JSON Data

This microservice retrives specific data from a JSON file based on a provided key. The service also allows users to filter the JSON data based on a provided key:value pair.

## Features

- File upload via a RESTful API.
- Retrieve data based on a specified output key within the JSON file.
- Provide optional support for filtering data based on an inputted key:value pair.

## Getting Started

The following instructions will provide guidance on how to use the microservice.

### Prerequisites

- A JSON file you wish to process.

### Using the Microservice

1. **Prepare Your JSON File**: Make sure your JSON file is structured in a way that is interpretable for the microservice. For example:

    ```json
    [
        {
            "track_artist": "Ed Sheeran",
            "albums": [
                {
                    "track_album": "Album Name",
                    "tracks": [
                        {
                            "track_id": "12345",
                            "meta": [
                                {
                                    "track_name": "Track Name",
                                    "track_popularity": 66
                                    // Other track details...
                                }
                            ]
                        }
                    ]
                }
            ]
        }
    ]
    ```

2. **Upload Your File and Request Data**: Use a command such as `curl`, or write a script with a `POST` request to the microservice. Make sure to include the JSON file as part of the request's form data.

    **CURL Example**:

    ```bash
    curl -X POST -F "file=@path/to/your/file.json" -F "output_key=meta" -F "filter_json=track_id:12345" http://localhost:5000/upload_and_get_data
    ```

    Replace `path/to/your/file.json` with the actual path to your JSON file. Adjust the `output_key` and `filter_json` form fields as needed based on what data you want to retrieve.

   **Python POST Example**;
```python
import requests
import json

url = 'http://localhost:5000/upload_and_get_data'  # Update with your actual URL

# Specify the correct path to your file
files = {'file': open('path/to/your/data.json', 'rb')}
data = {
    'output_key': 'meta',  # Specify the key you're interested in
    'filter_json': 'track_id:6f807x0ima9a1j3VPbc7VN'  # Optional filter
}

response = requests.post(url, files=files, data=data)
if response.status_code == 200:
    print(json.loads(response.text))
else:
    print("Error:", response.text)

```

### Filtering Data

The `filter_json` parameter is optional. If provided, it should be in the format `key:value`. The microservice will return data that matches the specified key-value pair within the `output_key`'s data.

### Output

The microservice will return the data associated with the `output_key` from the uploaded JSON file. If `filter_json` is provided, only data that matches the filter criteria will be returned.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.
