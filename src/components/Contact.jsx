import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(""); // "sending" | "success" | "error"

  const sendEmail = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(
      "service_jq47el6",       
      "template_oh59a6n",      
      form.current,
      "KWFCEu6LYeK9cMVr3"        
    )
    .then(() => {
      setStatus("success");
      form.current.reset();
    })
    .catch(() => {
      setStatus("error");
    });
  };

  return (
    <section id="contact" className="fade-in">
      <div className="container row">

        <div className="contact-left">
          <h1 className="sub-title">Contact</h1>
          <p>Email: nk751240@gmail.com</p>
          <p>Phone: +1-414-731-3417</p>
        </div>

        <div className="contact-right">
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="from_name" placeholder="Name" required />
            <input type="email" name="from_email" placeholder="Email" required />
            <textarea rows="6" name="message" placeholder="Message" required></textarea>

            <button className="btn" type="submit" disabled={status === "sending"}>
              {status === "sending" ? "Sending..." : "Send"}
            </button>

            {status === "success" && (
              <p className="form-status success">✅ Message sent successfully!</p>
            )}
            {status === "error" && (
              <p className="form-status error">❌ Something went wrong. Try again.</p>
            )}
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;