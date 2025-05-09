import { useState } from 'react';
import axios from 'axios';
import '../styles/Contact.css';
import Footer from '../components/Footer';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const postUrl = process.env.MONGO_URI
      await axios.post(postUrl, formData);
      setStatus('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setStatus('Error sending message.');
    }
  };

  return (
    <div className="contact-container">
      <div className="contact">
      <div className="user-input">
      <div className="contact-heading">
        <h2>Contact Me<span>.</span></h2>
      </div>
      <div className="form">
        <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Your E-mail"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Send Message</button>
      </form>
      </div>
      </div>
      {status && <p>{status}</p>}

      
    </div>
    <Footer />
    </div>
      
      
      
    
  );
}

export default Contact;