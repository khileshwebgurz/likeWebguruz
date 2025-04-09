import axios from "axios";

const PAYPAL_CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
const PAYPAL_SECRET = process.env.PAYPAL_SECRET;
const PAYPAL_API_BASE = process.env.PAYPAL_API_BASE || "https://api-m.sandbox.paypal.com";

let cachedToken = null;
let tokenExpiry = null;

export async function getPayPalAccessToken() {
  if (cachedToken && tokenExpiry && tokenExpiry > Date.now()) {
    return cachedToken; 
  }

  try {
    const response = await axios({
      method: "post",
      url: `${PAYPAL_API_BASE}/v1/oauth2/token`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      auth: {
        username: PAYPAL_CLIENT_ID,
        password: PAYPAL_SECRET,
      },
      data: "grant_type=client_credentials",
    });

    cachedToken = response.data.access_token;
    tokenExpiry = Date.now() + response.data.expires_in * 1000;

    console.log("✅ New PayPal Access Token:", cachedToken);
    return cachedToken;
  } catch (error) {
    console.error("❌ Error fetching PayPal access token:", error.response?.data || error);
    throw new Error("Failed to retrieve PayPal access token.");
  }
}
