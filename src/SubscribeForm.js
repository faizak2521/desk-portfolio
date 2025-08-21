import React, { useState } from "react";

export default function SubscribeForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); 
    console.log("User email:", email); 
    setEmail(""); 
  };

  return (
    <form onSubmit={handleSubmit} className="subscribe-form">
      <label htmlFor="email">Enter your email:</label>  
      <input // Allows for user input (typing) 
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
      />
      <button type="submit">Subscribe</button>
    </form>
  );
}