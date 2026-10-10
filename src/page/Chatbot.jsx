import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";


/**
 * This file is for Chatbot UI page that user can input message and the will
 * send to google gemini and we get the response and then show up.
 * @returns 
 */
const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: "assistant",
      content:
        "Halo! Saya Kak Dola, Tanyakan apa saja tentang Tari Dolalak ya!",
    },
  ]);


  // State and ref for input and response
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);


  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, loading]);


  const sendMessage = async (e) => {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const newMessages = [...messages, { role: "user", content: text }];
    setMessages(newMessages);
    setInput("");
    setLoading(true);

    console.log("[CHATBOT-LOG] : ", newMessages)

    // Process input and then send to Google Gemini with API KEY
    try {
      const res = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-3-flash-preview:generateContent?key=${import.meta.env.VITE_GEMINI_API_KEY}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: newMessages.map((m) => ({
              role: m.role === "assistant" ? "model" : "user",
              parts: [{ text: m.content }],
            })),
            systemInstruction: {
              parts: [
                {
                  text: "Kamu adalah Kak Dola, asisten virtual yang ramah dan ahli tentang Tari Dolalak dari Purworejo. Jawab dengan sopan, singkat, dan informatif dalam Bahasa Indonesia.",
                },
              ],
            },
          }),
        }
      );


      // Get response
      const data = await res.json();
      const reply =
        data?.candidates?.[0]?.content?.parts?.[0]?.text ||
        "Maaf, saya belum bisa menjawab itu. Coba tanya hal lain ya!";

      setMessages((prev) => [...prev, { role: "assistant", content: reply }]);
    }
    catch (err) {
      console.error(err);
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Maaf, terjadi kesalahan. Coba lagi ya. 🙏" },
      ]);
    }
    finally {
      setLoading(false);
    }
  };


  /**
   * Return UI layout for chatbot page.
   */
  return (
    <div className="h-[80vh] bg-cream flex flex-col">

      {/* Header chatbot */}
      <div className="bg-ink text-gold py-4 px-6 shadow-md">

        <div className="max-w-4xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-gold flex items-center justify-center text-ink text-xl">
              🤖
            </div>
            <div>
              <p className="font-serif font-bold">Kak Dola</p>
              <p className="text-xs text-amber-200/80">● Online</p>
            </div>
          </div>
          
          <Link
            to="/"
            className="text-sm text-amber-200 hover:text-gold transition"
          >
            Kembali ke beranda...
          </Link>

        </div>
      </div>


      {/* Messages */}
      <div className="flex-1 overflow-y-auto">

        <div className="max-w-4xl mx-auto px-4 py-6 space-y-4">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] px-4 py-3 rounded-2xl text-sm leading-relaxed shadow-sm ${
                  m.role === "user"
                    ? "bg-ink text-cream rounded-br-sm"
                    : "bg-white text-ink border border-amber-200 rounded-bl-sm"
                }`}
              >
                {m.content}
              </div>
            </div>
          ))}

          {loading && (
            <div className="flex justify-start">
              <div className="bg-white border border-amber-200 px-4 py-3 rounded-2xl text-sm text-neutral-500">
                Kak Dola sedang mengetik...
              </div>
            </div>
          )}

          <div ref={endRef} />
        </div>
      </div>


      {/* Input */}
      <form
        onSubmit={sendMessage}
        className="bg-white border-t border-amber-200 p-4"
      >
        <div className="max-w-4xl mx-auto flex gap-2">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Tanya apa saja tentang Tari Dolalak..."
            className="flex-1 px-4 py-3 rounded-full border border-amber-300 focus:outline-none focus:ring-2 focus:ring-gold text-sm"
          />
          <button
            type="submit"
            disabled={loading || !input.trim()}
            className="px-6 py-3 bg-gold text-ink font-bold rounded-full hover:bg-gold-dark transition disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Kirim
          </button>
        </div>
      </form>
    </div>
  );
};

export default Chatbot;