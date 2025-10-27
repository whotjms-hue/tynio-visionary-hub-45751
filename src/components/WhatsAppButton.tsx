import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const phoneNumber = "8801873722228";
  const message = encodeURIComponent(
    "Hello, I'm interested in Tynio's AI-integrated solutions. Can we discuss my project?"
  );
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${message}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-5 right-5 md:bottom-6 md:right-6 z-40 bg-accent hover:bg-accent-hover text-accent-foreground rounded-full p-4 shadow-accent transition-all duration-300 hover:scale-110 animate-pulse-scale"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
