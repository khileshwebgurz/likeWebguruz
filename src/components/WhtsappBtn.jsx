"use client";

import Link from "next/link";

export default function WhatsAppButton() {
  const phoneNumber = "7087233361"; // Replace with your number
  const message = "Hello! I want to chat with you."; // Optional message
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
    message
  )}`;

  return (
    <Link href={whatsappLink} target="_blank" rel="noopener noreferrer">
      <button className="p-3">
        Click Here for Chat
      </button>
    </Link>
  );
}
