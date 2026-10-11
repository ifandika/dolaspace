import { Link } from "react-router-dom";


/**
 * This component for widget or display UI Chatbot in Homepage.
 * @returns 
 */
const ChatbotWidget = () => {
  return (
    <div className="flex flex-col items-center justify-center py-10">


      {/* For icon chatbot */}
      <div className="w-40 h-40 rounded-full bg-ink flex items-center justify-center shadow-xl relative">
        <div className="text-6xl">🤖</div>
        <span className="absolute top-4 right-6 w-10 h-10 bg-gold rounded-full animate-ping"></span>
      </div>
      

      {/* Button that direct to page or chatbot */}
      <Link
        to="/chatbot"
        className="mt-8 px-10 py-4 bg-ink text-gold font-serif font-bold text-lg rounded-full hover:bg-gold hover:text-ink transition-all shadow-lg hover:shadow-xl hover:scale-105"
      >
        Mari Mengobrol
      </Link>

    </div>
  );
};

export default ChatbotWidget