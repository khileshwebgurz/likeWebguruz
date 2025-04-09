// app/api/paypal/create-order/route.js
import axios from 'axios';

export async function POST(request) {
  const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
  const SECRET = process.env.PAYPAL_SECRET;
  const PAYPAL_API = 'https://api-m.sandbox.paypal.com';  
  const { costs, email , url } = await request.json(); // Correct way to parse request body

  

  const auth = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString('base64');
 
  
  const headers = {
    Authorization: `Basic ${auth}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders`,
      {
        intent: 'CAPTURE',
        purchase_units: [
          {
            amount: {
              currency_code: 'USD',
              value: costs, // Adjust based on your price logic
            },
            custom_id: JSON.stringify({ email, url }),
          },
        ],
      },
      { headers }
    );

    return new Response(
      JSON.stringify({ orderID: response.data.id }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error creating PayPal order:', error);
    return new Response('Error creating order', { status: 500 });
  }
}
