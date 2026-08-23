import ContactForm from "./ContactForm";

const Contact = () => {
  return (
    <section className="animate-[fadeIn_0.3s_ease-in-out]">
      <h2 className="text-[1.75rem] font-bold mb-4 flex items-center gap-3">
        Contact{" "}
        <span className="text-base font-normal text-[#64748b]">
          {`// Get In Touch`}
        </span>
      </h2>
      <p className="text-[#64748b] text-[0.95rem] leading-relaxed mb-8">
        Have an opportunity, project idea, or want to collaborate? Drop a
        message below.
      </p>

      <ContactForm />
    </section>
  );
};

export default Contact;
