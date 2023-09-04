# Aircall Webhook to Glassix Messaging Service

## Description

This repository contains code that listens for `call.transferred` events from Aircall's API and sends a message via Glassix's API in response. The message is sent over WhatsApp when a call is transferred and picked up by an agent in a specific team.

## Features

- **Aircall Webhook:** Listens for `call.transferred` events.
- **Glassix API:** Sends messages via the Glassix API.

## Requirements

- Node.js
- Express.js
- Axios for API requests

## Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your_username_here/aircall-glassix-service.git
    ```

2. **Navigate to the project folder and install dependencies:**
    ```bash
    cd aircall-glassix-service
    npm install
    ```

## Usage

1. **Set up environment variables for authentication:**
    ```bash
    export GLASSIX_API_TOKEN=your_glassix_token_here
    ```

2. **Run the server:**
    ```bash
    npm start
    ```

The service will now listen for Aircall `call.transferred` events and send messages via Glassix in response.

## Contributing

Contributions are welcome! Feel free to open an issue or submit a pull request.

## License

MIT License. See the `LICENSE` file for more details.
