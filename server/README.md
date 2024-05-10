## Setting Up Environment Variables for the Server

Before you start working on the server side of the project, it's crucial to set up your environment variables correctly. These variables are used to configure the Firebase services that your project depends on. Below are the steps to obtain the necessary values from Firebase and set them up in your local environment.

### Step 1: Create a Firebase Project

1. Go to the [Firebase Console](https://console.firebase.google.com/).
2. Click on "Add project" and follow the prompts to create a new Firebase project.

### Step 2: Obtain Firebase Configuration Values

1. In the Firebase Console, navigate to your project's settings by clicking on the gear icon next to "Project Overview" and selecting "Project settings".
2. Go to the "Service accounts" tab.
3. Click on "Generate new private key" and follow the instructions to download the JSON file containing your Firebase configuration values.

### Step 3: Extract Configuration Values

1. Open the downloaded JSON file.
2. Extract the following values:
   - `FIREBASE_TYPE`
   - `FIREBASE_PROJECT_ID`
   - `FIREBASE_PRIVATE_KEY_ID`
   - `FIREBASE_PRIVATE_KEY`
   - `FIREBASE_CLIENT_EMAIL`
   - `FIREBASE_CLIENT_ID`
   - `FIREBASE_AUTH_URI`
   - `FIREBASE_TOKEN_URI`
   - `FIREBASE_AUTH_PROVIDER_X509_CERT_URL`
   - `FIREBASE_CLIENT_X509_CERT_URL`
   - `FIREBASE_UNIVERSE_DOMAIN`

### Step 4: Set Up Environment Variables

1. Copy the extracted values.
2. Open the `.env.example` file in the `server/` directory of your project.
3. Replace the placeholder values with the actual values you copied from the Firebase configuration.
4. Save the file as `.env` in the same directory.

### Step 5: Verify Your Setup

1. Start the server by running `node server.js` in the `server/` directory.
2. Ensure that there are no errors related to missing environment variables.

By following these steps, you should have successfully set up your environment variables for the server side of the project. If you encounter any issues, please refer to the Firebase documentation or the project's README.md for further assistance.

Note: The `.env` file should not be committed to your version control system. Add `.env` to your `.gitignore` file to prevent it from being tracked by Git.
