"use client";

import axios from "axios";
import { ChangeEvent, FormEvent, useState } from "react";
import toast from "react-hot-toast";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  function changeHandler(
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = e.target;

    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  async function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    setLoading(true);

    try {
      await axios.post(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/email/send`,
        formData,
      );
      toast.success("Email Sent Successfully")
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col gap-4 max-w-150">
      <div className="flex flex-col gap-1.5">
        <label className="text-[0.85rem] font-semibold" htmlFor="name">Your Name</label>
        <input
          value={formData.name}
          onChange={changeHandler}
          type="text"
          name="name"
          id="name"
          placeholder="John Doe"
          required
          className="px-3.5 py-2.5 rounded-lg border border-[#e2e8f0] bg-white text-[0.9rem] text-[#0f172a] outline-none focus:border-[#2563eb] transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[0.85rem] font-semibold" htmlFor="email">Your Email</label>
        <input
          value={formData.email}
          onChange={changeHandler}
          type="email"
          name="email"
          id="email"
          placeholder="john@example.com"
          required
          className="px-3.5 py-2.5 rounded-lg border border-[#e2e8f0] bg-white text-[0.9rem] text-[#0f172a] outline-none focus:border-[#2563eb] transition-colors"
        />
      </div>
      <div className="flex flex-col gap-1.5">
        <label className="text-[0.85rem] font-semibold" htmlFor="message">Message</label>
        <textarea
          value={formData.message}
          onChange={changeHandler}
          rows={4}
          name="message"
          id="message"
          placeholder="Write your message here..."
          required
          className="px-3.5 py-2.5 rounded-lg border border-[#e2e8f0] bg-white text-[0.9rem] text-[#0f172a] outline-none focus:border-[#2563eb] transition-colors resize-y"
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={loading}
        className={`bg-[#2563eb] text-white border-none px-5 py-2.5 rounded-lg font-semibold self-start transition-all flex items-center gap-2 ${
          loading
            ? "opacity-70 cursor-not-allowed"
            : "hover:bg-[#1d4ed8] cursor-pointer"
        }`}
      >
        {loading ? (
          <>
            <i className="fa-solid fa-spinner animate-spin"></i> Sending...
          </>
        ) : (
          <>
            <i className="fa-solid fa-paper-plane"></i> Send Message
          </>
        )}
      </button>
    </form>
  );
};

export default ContactForm;
