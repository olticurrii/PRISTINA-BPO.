import React from "react";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-main">
        <div>
          <strong>Pristina BPO - Outsourcing Solutions</strong>
          <p>Your trusted outsourcing partner in Pristina, Kosovo.</p>
          <p>© 2025 Pristina BPO. All rights reserved.</p>
        </div>
        <div className="footer-media">
          <span>Our Media</span>
          <div className="footer-icons">
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-facebook"></i></a>
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
} 