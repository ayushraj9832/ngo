import React from "react";

const NGOHomePage = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif", backgroundColor: "white", minHeight: "100vh", color: "black" }}>
      
      <header style={{ backgroundColor: "black", color: "white", padding: "20px", textAlign: "center" }}>
        <h1>Vishoka Foundation</h1>
      </header>

      <nav style={{ backgroundColor: "lightgray", padding: "10px", textAlign: "center" }}>
        <a href="#home" style={{ margin: "0 15px", color: "black" }}>Home</a>
        <a href="#about" style={{ margin: "0 15px", color: "black" }}>About</a>
        <a href="#projects" style={{ margin: "0 15px", color: "black" }}>Projects</a>
        <a href="#contact" style={{ margin: "0 15px", color: "black" }}>Contact</a>
      </nav>

      <main style={{ padding: "30px", textAlign: "center" }}>
        <section id="home">
          <h2>Welcome to Vishoka</h2>
        </section>

        <section id="about" style={{ marginTop: "40px" }}>
          <h3>About Us</h3>
          <p>
           Empowering the underprivileged through sustainability and community
          </p>
        </section>

        <section id="projects" style={{ marginTop: "40px" }}>
          <h3>Our Projects</h3>
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>Free Education Drives</li>
            <li>Tree Plantation Initiatives</li>
          </ul>
        </section>

        <section id="contact" style={{ marginTop: "40px" }}>
          <h3>Contact Us</h3>
          <p>Email: <a href="mailto:vishoka@gmail.com" style={{ color: "black" }}>vishoka@gmail.com</a></p>
          <p>Phone: +91-9876543210</p>
        </section>
      </main>

      <footer style={{ backgroundColor: "black", color: "white", textAlign: "center", padding: "15px", marginTop: "40px" }}>
        <p>© 2025 Vishoka Foundation. All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default NGOHomePage;
