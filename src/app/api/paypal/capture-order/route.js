import axios from 'axios';

export async function POST(req) {
  const { orderID } = await req.json();

  const CLIENT_ID = process.env.PAYPAL_CLIENT_ID;
  const SECRET = process.env.PAYPAL_SECRET;
  const PAYPAL_API = 'https://api-m.sandbox.paypal.com'; 

  const auth = Buffer.from(`${CLIENT_ID}:${SECRET}`).toString('base64');
  const headers = {
    Authorization: `Basic ${auth}`,
    'Content-Type': 'application/json',
  };

  try {
    const response = await axios.post(
      `${PAYPAL_API}/v2/checkout/orders/${orderID}/capture`,
      {},
      { headers }
    );

    console.log('PayPal capture response:', response.data); // Log full response
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error('Error capturing PayPal order:', error.response?.data || error.message);
    return new Response(JSON.stringify({ error: error.response?.data || 'Unknown error' }), { status: 500 });
  }
}
