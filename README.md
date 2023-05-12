
# Snapchat Login React App

This is a simple React app that allows users to log in using Snapchat and displays their user information upon successful login.

## Prerequisites

- Node.js (v12 or higher)
- NPM (v6 or higher)

## Getting Started

1. Clone the repository:

   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:

   ```bash
   cd snapchat-login-react-app
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Configure your Snapchat API credentials:

   - Open the `src/components/Login.js` file.
   - Replace the `clientId` variable with your own Snapchat client ID.
   - Replace the `redirectUri` variable with your own redirect URI in the future, but I used localhost:3000 for running locally
   - Save the file.

5. Start the development server:

   ```bash
   npm start
   ```

6. Open your web browser and visit `http://localhost:3000` to see the app.

## Usage

1. On the home page, click on the "Login with Snapchat" button.
2. You will be redirected to the Snapchat page.
3. Give the client access to your Snapchat account.
4. After successful login and authorization, you will be redirected back to the home page.
5. You will see your Snapchat display name and Bitmoji displayed on the page.

## Customize

- If you want to customize the UI or add additional functionality, you can modify the `Home.js` component to suit your needs. Refer to the [Snap Kit documentation](https://kit.snapchat.com/docs/) for more information on available API endpoints and data structures.

## License

This project is licensed under the [MIT License](LICENSE).