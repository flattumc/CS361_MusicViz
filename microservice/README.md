# CS361 Microservice - User Authentification

## Overview
The MusicViz microservice provides an API for uploading images to generate music visualizations. 

## Authentification
* Endpoint: [Auth Token Generation Endpoint]
* Method: POST
* Headers:
* Content-Type: application/json
* Body:

{
  "apiKey": "YOUR_API_KEY_HERE"
}

* Response:
{
  "token": "YOUR_AUTH_TOKEN_HERE",
  "expires": "EXPIRATION_DATE_TIME"
}

# Example Request
Here's an example of how to use the authentication token when making a request to the MusicViz API:

## Example
* Endpoint: [API Endpoint]
* Method: GET/POST
* Headers:
* Content-Type: application/json

