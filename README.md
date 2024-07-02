# Backend Repository

This repository contains the backend code for the project, using Express.js and Firebase.

## Setup

1. **Clone the repository**

   ```bash
   git clone git@github.com:alfredlouisw8/ebuddy-backend-repo.git
   cd ebuddy-backend-repo
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Copy and configure environment variables**

   ```bash
   cp .env.example .env
   ```

   Fill in the `.env` file with the necessary environment variables. Specifically, set the `PROJECT_ID`.

4. **Add service account key**

   Place your `serviceAccountKey.json` file inside the `config` folder.

5. **Run the server**

   ```bash
   npm run serve
   ```

## Project Structure

- `routes/`: Contains route definitions.
- `controller/`: Contains the controller logic.
- `middleware/`: Contains middleware functions.
- `config/`: Contains configuration files.

## Endpoints

- **Update User Data**: `/update-user-data`
- **Fetch User Data**: `/fetch-user-data`

## Middleware

- **authMiddleware**: Validates the request token.

## Error Handling

- **ApiError**: Standardizes error responses.

## License

This project is licensed under the MIT License.
