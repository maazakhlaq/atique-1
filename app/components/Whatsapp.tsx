"use client";

export default function WhatsAppButton() {
  const phone = "+966559030323"; // your WhatsApp number (no +, no spaces)
  const message = encodeURIComponent(
    "Hello Atqon Industrial Services, I would like to enquire about your services."
  );

  return (
    <a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#1ebe5d] text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-7 h-7 fill-current"
      >
        <path d="M16 0C7.2 0 0 7.2 0 16c0 2.8.7 5.5 2.1 7.9L0 32l8.4-2.2c2.3 1.2 4.9 1.9 7.6 1.9 8.8 0 16-7.2 16-16S24.8 0 16 0zm0 29c-2.5 0-4.9-.7-7-1.9l-.5-.3-5 1.3 1.3-4.9-.3-.5C3.2 20.6 2.4 18.4 2.4 16 2.4 8.5 8.5 2.4 16 2.4S29.6 8.5 29.6 16 23.5 29 16 29zm7.7-10.9c-.4-.2-2.5-1.2-2.9-1.4-.4-.1-.7-.2-1 .2s-1.1 1.4-1.4 1.7c-.3.3-.5.3-.9.1-.4-.2-1.7-.6-3.3-2-1.2-1.1-2-2.4-2.2-2.8-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.4-.6.1-.2 0-.5 0-.7s-1-2.4-1.3-3.3c-.3-.9-.7-.8-1-.8h-.8c-.3 0-.7.1-1.1.5s-1.4 1.4-1.4 3.3 1.4 3.8 1.6 4.1c.2.3 2.8 4.3 6.8 6 4 1.6 4.7 1.3 5.6 1.2.9-.1 2.8-1.2 3.2-2.3.4-1.1.4-2.1.3-2.3-.1-.2-.4-.3-.8-.5z" />
      </svg>
    </a>
  );
}