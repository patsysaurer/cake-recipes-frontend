import React from "react";

const Footer = () => {
  return (
    
    <footer className="p-15 d-block text-center text-grey">
      <div className="line"></div>
      <p style={{ color: "var(--primary-color)" }}>
      <span style={{ color: "var(--primary-dark)" }}>&copy;</span> Cake Recipes <span style={{ color: "var(--secondary-dark)" }}> | </span>
        <span style={{ color: "var(--primary-dark)" }}>{new Date().getFullYear()}</span>
      </p>
    </footer>
  );
};

export default Footer;
