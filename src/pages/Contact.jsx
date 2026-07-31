import { useState } from "react";
import FadeIn from "../components/FadeIn";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  const TELEGRAM_BOT_TOKEN = "8923507740:AAGUc7OdCJRnKAq-ByJT0Vb0ottKzybKjBw";
  const TELEGRAM_CHAT_ID = "5061351040";

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const textMessage = `
📩 <b>សារថ្មីពី Portfolio!</b>

👤 <b>name:</b> ${formData.name}
✉️ <b>email:</b> ${formData.email}
📌 <b>Topic:</b> ${formData.subject}
💬 <b>Message:</b> 
${formData.message}
    `;

    try {
      const response = await fetch(
        `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            chat_id: TELEGRAM_CHAT_ID,
            text: textMessage,
            parse_mode: "HTML",
          }),
        }
      );

      const data = await response.json();

      if (data.ok) {
        alert("អរគុណសម្រាប់ការផ្ញើសារ! ខ្ញុំនឹងទាក់ទងទៅវិញឆាប់ៗនេះ។");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        alert("មានបញ្ហាក្នុងការផ្ញើសារ សូមព្យាយាមម្តងទៀត!");
      }
    } catch (error) {
      console.error("Telegram API Error:", error);
      alert("មិនអាចផ្ញើសារបានទេ សូមពិនិត្យមើលអ៊ីនធឺណិតរបស់អ្នក!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="py-16 min-h-screen flex items-center justify-center">
      <div className="max-w-6xl mx-auto px-6 w-full">
        
        {/* Section Header */}
        <FadeIn>
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-extrabold mb-3">
              <span className="bg-linear-to-r from-purple-500 via-pink-500 to-cyan-400 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-gray-400 max-w-lg mx-auto text-sm sm:text-base">
              Feel free to reach out to me for any project inquiries, collaborations, or just to say hi!
            </p>
            <div className="w-20 h-1 bg-linear-to-r from-purple-500 to-pink-500 mx-auto rounded-full mt-4" />
          </div>
        </FadeIn>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column - Contact Info */}
          <FadeIn direction="left" delay={0.15} className="lg:col-span-5">
            <div className="bg-slate-800/40 border border-slate-700/50 backdrop-blur-md p-8 rounded-3xl space-y-6 shadow-xl h-full">
              <h3 className="text-2xl font-bold text-white mb-4">Contact Info</h3>

              {/* Email */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-purple-500/10 border border-purple-500/30 rounded-2xl text-purple-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Email</p>
                  <a href="mailto:chhordinchheut@gmail.com" className="font-semibold text-gray-200 hover:text-purple-400 transition-colors">
                    chhordinchheut@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-pink-500/10 border border-pink-500/30 rounded-2xl text-pink-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Phone / Telegram</p>
                  <p className="font-semibold text-gray-200">+855 966335708</p>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-cyan-500/10 border border-cyan-500/30 rounded-2xl text-cyan-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider">Location</p>
                  <p className="font-semibold text-gray-200">Phnom Penh, Cambodia</p>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Right Column - Contact Form */}
          <FadeIn direction="right" delay={0.25} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-slate-800/40 border border-slate-700/50 backdrop-blur-md p-8 rounded-3xl space-y-5 shadow-xl h-full"
            >
              <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-300 mb-1.5">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="example@gmail.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Project Proposal / Question"
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-gray-300 mb-1.5">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  placeholder="Type your message here..."
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/60 border border-slate-700 text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 transition-all text-sm resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-6 rounded-xl font-semibold text-white bg-linear-to-r from-purple-500 via-pink-500 to-cyan-500 hover:opacity-95 shadow-lg shadow-purple-500/20 active:scale-[0.98] transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-50 cursor-pointer"
              >
                <span>{loading ? "កំពុងផ្ញើ..." : "Send Message"}</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </button>
            </form>
          </FadeIn>

        </div>
      </div>
    </section>
  );
};