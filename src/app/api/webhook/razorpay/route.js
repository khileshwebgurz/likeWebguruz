import axios from "axios";
const HUBSPOT_API_KEY = process.env.HUBSPOT_KEY;
import {
  updateContact,
  createHubSpotContact,
} from "../../../../../lib/hubspotContact";
export async function POST(req) {
  try {
    const body = await req.json();
    console.log(
      "my razorpay webhook data is >>>>",
      body.payload.payment.entity.notes
    );
    const myEmail = body.payload.payment.entity.notes.email;
    const url = body.payload.payment.entity.notes.url;
    const firstName = '';
    const lastName = '';

    let status = "Unsuccessful";
    if (body.payload.payment.entity.status === "captured")
      status = "Successful";

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
