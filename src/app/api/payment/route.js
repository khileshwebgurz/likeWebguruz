import Razorpay from "razorpay";

// Yes, Razorpay automatically handles authentication when you initialize the Razorpay instance with the key_id and key_secret.
//  These credentials are securely used by the library to authenticate API requests on your behalf.

const razorpay = new Razorpay({
  key_id: process.env.RAZORPAY_KEY_ID,
  key_secret: process.env.RAZORPAY_KEY_SECRET,
});

export async function POST(req) {

  try {
    const { amount, email , url } = await req.json();
   
    const options = {
      amount: amount * 100,
      currency: "INR",
      receipt: `receipt_${Math.random()}`,
      payment_capture: 1,
      notes: {
        email: email,
        url: url,
      },
    };

    const order = await razorpay.orders.create(options);
    return new Response(
      JSON.stringify({
        orderId: order.id,
        amount: order.amount,
        currency: order.currency,
        notes: order.notes
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: "Payment order creation failed!" }),
      { status: 500 }
    );
  }
}
