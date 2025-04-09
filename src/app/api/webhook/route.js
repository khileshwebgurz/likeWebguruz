import axios from "axios";
const HUBSPOT_API_KEY = process.env.HUBSPOT_KEY;

import { getPayPalAccessToken } from "../../../../lib/paypal";
import {
  updateContact,
  createHubSpotContact,
} from "../../../../lib/hubspotContact";

export async function POST(req) {
  try {
    const body = await req.json();
    const customData = body?.resource?.custom_id || "{}";

    const { email: myEmail, url: url } = JSON.parse(customData); // Parse JSON

    let status = "Unsuccessful";
    if (body?.resource?.status === "COMPLETED") status = "Successful";

    // Extract PayPal capture ID
    const captureId = body?.resource?.supplementary_data?.related_ids?.order_id;

    // Step 1: Fetch payer details using PayPal API
    let firstName = "No first name";
    let lastName = "No last name";

    const accessToken = await getPayPalAccessToken();

    try {
      const payerResponse = await axios.get(
        `https://api.sandbox.paypal.com/v2/checkout/orders/${captureId}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
            "Content-Type": "application/json",
          },
        }
      );

      const payerInfo = payerResponse?.data?.payer?.name;

      if (payerInfo) {
        firstName = payerInfo.given_name || "No first name";
        lastName = payerInfo.surname || "No last name";
      }

      console.log("Fetched Payer Details:", firstName, lastName);
    } catch (payerError) {
      console.error("Error fetching payer details:", payerError.response?.data);
    }

    const requestBody = {
      limit: 10,
      after: null,
      properties: [
        "firstname",
        "lastname",
        "email",
        "paypal_payment_status",
        "website",
      ],
      filterGroups: [
        {
          filters: [{ propertyName: "email", value: myEmail, operator: "EQ" }],
        },
      ],
    };

    const response = await axios.post(
      "https://api.hubapi.com/crm/v3/objects/contacts/search",
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    let message = "";

    if (response.data.results.length > 0) {
      await updateContact(response.data.results[0].id, HUBSPOT_API_KEY);
      message = "Contact Updated";
    } else {
     
      await createHubSpotContact(
        myEmail,
        firstName,
        lastName,
        status,
        url,
        HUBSPOT_API_KEY
      );
      message = "Contact Created";
    }
    // Prepare full response object
    const responseData = {
      message: "Webhook received successfully",
      myEmail,
      url,
    };

    return new Response(JSON.stringify({ message: message }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
      },
    });
  } catch (error) {
    console.error(" Webhook Error:", error);
    return new Response(
      JSON.stringify({ message: "Error processing webhook" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
        },
      }
    );
  }
}
