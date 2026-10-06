import { useState } from "react";


/**
 * This file is for use UI input comment from user and then send to
 * @param {*} param0 
 * @returns 
 */
const CommentForm = ({ onSubmit }) => {
  // Use state for submit form of comment, is that true of false
  const [submitted, setSubmitted] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    onSubmit?.({
      name: form.name.trim(),
      email: form.email.trim(),
      message: form.message.trim(),
    });

    setForm({ name: "", email: "", message: "" });
    setSubmitted(true);

    setTimeout(() => setSubmitted(false), 7000);
  };
  

  /**
   * This return is for UI Interface comment, create html form and have input for username, email dan comment.
   */
  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-lg p-6 md:p-8 border-2 border-amber-200" noValidate>

      {/* Title of form */}
      <h3 className="text-2xl font-serif font-bold text-ink mb-6">
        Leave a Commentar
      </h3>


      {/* Condiiton if the commend has ben send */}
      {submitted && (
        <div className="mb-4 p-3 bg-green-50 border-l-4 border-green-500 text-green-800 text-sm rounded">
          Thank you! Your comment has been successfully sent.
        </div>
      )}


      {/* Part of input name from user */}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="block text-sm font-semibold text-ink mb-2"
        >
          Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Enter your full name..."
          className={`w-full px-4 py-3 rounded-lg border text-sm transition focus:outline-none focus:ring-2}`}
        />
      </div>


      {/* Part of input email from user */}
      <div className="mb-5">
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-ink mb-2"
        >
          Email <span className="text-red-500">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="example@email.com"
          className={`w-full px-4 py-3 rounded-lg border text-sm transition focus:outline-none focus:ring-2`}
        />
      </div>


      {/* Part of input comment from user */}
      <div className="mb-6">
        <label
          htmlFor="message"
          className="block text-sm font-semibold text-ink mb-2"
        >
          Commentar <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={form.message}
          onChange={handleChange}
          rows={5}
          placeholder="Leave your comment about this platform..."
          className={`w-full px-4 py-3 rounded-lg border text-sm transition focus:outline-none focus:ring-2 resize-none`}
        />
      </div>


      {/* Button for send commentar */}
      <button
        type="submit"
        className="w-full md:w-auto px-8 py-3 bg-gold text-ink font-bold rounded-full hover:bg-gold-dark transition shadow-md hover:shadow-lg disabled:opacity-50"
      >
        Send Commentar
      </button>
    </form>
  );
};

export default CommentForm;