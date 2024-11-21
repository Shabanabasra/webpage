import React from 'react';

const Contact = () => {
  return (
    <div className="page-container">
      <section className="contact-form">
        <h2 className="fade-in">Contact Us</h2>
        <form>
          <input type="text" placeholder="Full Name" required />
          <input type="email" placeholder="Email Address" required />
          <input type="text" placeholder="Phone Number" />
          <textarea placeholder="Your message" rows={3} required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </section>
      
    </div>
  );
};

export default Contact;