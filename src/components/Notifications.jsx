import React, { useState } from "react";
import axios from "axios";
import "../assets/css/notifications.css"; 

const Notifications = () => {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("Security Alert 📢");
  const [message, setMessage] = useState("This is a security update from our system.");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("https://projectnewbackend1-1.onrender.com/api/notifications/sendNotification", {
        to: email,
        subject,
        text: message,
      });
      alert("✅ Email sent successfully!");
    } catch (error) {
      console.error("Error sending email:", error);
      alert("❌ Failed to send email.");
    }
  };

  return (
    <div className="notifications-wrapper">
      <div className="notifications-container">
        <h2 className="notifications-title">Send Email Notification</h2>
        <form onSubmit={handleSubmit} className="notifications-form">
          <input
            type="email"
            placeholder="Recipient Email"
            className="notifications-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Subject"
            className="notifications-input"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            placeholder="Message"
            className="notifications-textarea"
            rows={5}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
          <button type="submit" className="notifications-button">
            Send Email
          </button>
        </form>
      </div>
    </div>
  );
};

export default Notifications;
