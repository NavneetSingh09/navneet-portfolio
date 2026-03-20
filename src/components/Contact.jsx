function Contact() {
  return (
    <section id="contact" className="fade-in">
      <div className="container row">

        <div className="contact-left">
          <h1 className="sub-title">Contact</h1>
          <p>Email: navneet@email.com</p>
          <p>Phone: +1 XXX XXX XXXX</p>
        </div>

        <div className="contact-right">
          <form>
            <input type="text" placeholder="Name" required />
            <input type="email" placeholder="Email" required />
            <textarea rows="6" placeholder="Message"></textarea>
            <button className="btn">Send</button>
          </form>
        </div>

      </div>
    </section>
  );
}

export default Contact;