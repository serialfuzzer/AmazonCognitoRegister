const { CognitoIdentityProviderClient, SignUpCommand, ResendConfirmationCodeCommand, ConfirmSignUpCommand } = require("@aws-sdk/client-cognito-identity-provider");

const client = new CognitoIdentityProviderClient({ region: "eu-west-1" }); // Change to your AWS region

const CLIENT_ID = "XXXXX"; // Replace with your Cognito App Client ID

// Function to sign up a new user
async function signUpUser(username, password) {
    const command = new SignUpCommand({
        ClientId: CLIENT_ID,
        Username: username,
        Password: password,
        UserAttributes: [
            { Name: "email", Value: username }, // Email as username
            { Name: "phone_number", Value: "+123456789" }, // Optional
            { Name: "given_name", Value: "John" }, // First name
            { Name: "family_name", Value: "Doe" } // Last name
        ]
    });

    try {
        const response = await client.send(command);
        console.log("✅ User registered successfully:", response);
    } catch (error) {
        console.error("❌ Error registering user:", error);
    }
}

// Function to resend confirmation code
async function resendConfirmationCode(username) {
    const command = new ResendConfirmationCodeCommand({
        ClientId: CLIENT_ID,
        Username: username
    });

    try {
        const response = await client.send(command);
        console.log("✅ Confirmation code resent:", response);
    } catch (error) {
        console.error("❌ Error resending confirmation code:", error);
    }
}

// Function to confirm the user with a received code

// Example usage
(async () => {
    const email = "test@gmail.com";
    const password = "YourStrongPassword123!";

    // Step 1: Register User
    await signUpUser(email, password);

    // Step 2: Resend Confirmation Code (if needed)
    await resendConfirmationCode(email);

})();

