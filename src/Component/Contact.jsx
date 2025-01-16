import React from 'react';
import '../CSS/Contact.css';


const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p className="contact-description">
        We’d love to hear from you! Whether you have a question, feedback, or just want to say hello, feel free to reach out to us. 
        Our team is here to assist you.
      </p>
      
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Your Name</label>
          <input type="text" id="name" name="name" required placeholder="Enter your name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Your Email</label>
          <input type="email" id="email" name="email" required placeholder="Enter your email" />
        </div>

        <div className="form-group">
          <label htmlFor="message">Your Message</label>
          <textarea id="message" name="message" required placeholder="Enter your message" />
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      <div className="contact-details">
        <h2>Our Office</h2>
        <p>123 Perfume Street, Fragrance City, 10001</p>
        <p>Email: support@yourwebsite.com</p>
        <p>Phone: +1 (123) 456-7890</p>
      </div>
    </div>
  );
}

export default Contact;