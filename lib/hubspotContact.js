// lib/fetchData.js
import axios from "axios";
export async function updateContact(contactId, HUBSPOT_API_KEY) {
  try {
    const properties = { paypal_payment_status: "Successful" };

    const response = await axios.patch(
      `https://api.hubapi.com/crm/v3/objects/contacts/${contactId}`,
      { properties },
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("Response:", response.data);
  } catch (error) {}
}

export async function createHubSpotContact(
  myEmail,
  firstName,
  lastName,
  status,
  myUrl,
  HUBSPOT_API_KEY
) {
  console.log('my email for hubspot  contact is >>>>>', myEmail , 'my url is >>', myUrl)
  try {
    const requestBody = {
      properties: {
        email: myEmail,
        firstname: firstName || "",
        lastname: lastName || "",
        paypal_payment_status: status || "Unsuccessful",
        website: myUrl || "",
      },
    };

    const response = await axios.post(
      "https://api.hubapi.com/crm/v3/objects/contacts",
      requestBody,
      {
        headers: {
          Authorization: `Bearer ${HUBSPOT_API_KEY}`,
          "Content-Type": "application/json",
        },
      }
    );

    console.log("Contact Created Successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error(
      "Error Creating HubSpot Contact:",
      error.response?.data || error.message
    );
    throw new Error(
      error.response?.data?.message || "Failed to create contact"
    );
  }
}
