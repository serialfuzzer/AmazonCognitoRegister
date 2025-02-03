const { CognitoIdentityProviderClient, SignUpCommand, ResendConfirmationCodeCommand, ConfirmSignUpCommand } = require("@aws-sdk/client-cognito-identity-provider");

const email = "test@gmail.com";
const password = "YourStrongPassword123!";

async function confirmUser(username, confirmationCode) {
    const command = new ConfirmSignUpCommand({
        ClientId: CLIENT_ID,
        Username: username,
        ConfirmationCode: confirmationCode
    });

    try {
        const response = await client.send(command);
        console.log("✅ User confirmed successfully:", response);
    } catch (error) {
        console.error("❌ Error confirming user:", error);
    }
}
(async () => {

    await confirmUser(email, "123456");

})();
    // Step 3: Confirm User (Replace "123456" with actual code received)

