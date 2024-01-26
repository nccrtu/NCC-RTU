import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./QueryForm.css";

function QueryForm() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await emailjs.sendForm(
        "service_nccrtu",
        "template_fp3kicj",
        e.target,
        "A4wp0toWinXK0ykif"
      );

      console.log("Email sent successfully:", response);
      alert("Email sent successfully!");

      setFormData({
        user_name: "",
        user_email: "",
        user_subject: "",
        message: "",
      });
    } catch (error) {
      console.error("Error sending email:", error);
      alert("Error sending email. Please try again later.");
    }
  };

  return (
    <div className="query-form-container">
      <h2>Get In Touch</h2>
      <form onSubmit={sendEmail}>
        <div className="intro-sec">
          <div className="form-group grp1">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="user_name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group grp2">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="user_email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
        </div>
        <div className="form-group grp4">
            <label htmlFor="subject">Subject:</label>
            <input
              type="text"
              id="subject"
              name="user_subject"
              value={formData.user_subject}
              onChange={handleChange}
              required
            />
          </div>
        <div className="form-group grp3">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default QueryForm;
