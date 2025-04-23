import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const services = [
    { id: 1, title: "Web Development", desc: "Modern, fast, and responsive." },
    { id: 2, title: "App Design", desc: "Beautiful and intuitive design." },
    { id: 3, title: "SEO Optimization", desc: "Get noticed online." }
  ];

  const [form, setForm] = useState({ name: '', email: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(`Thank you, ${form.name}! We'll contact you at ${form.email}.`);
  };

  return (
    <>
      {/* Header */}
      <header className="bg-dark text-white p-3">
        <div className="container d-flex justify-content-between">
          <h2>ReactOne</h2>
          <nav>
            <a href="#services" className="text-white mx-2">Services</a>
            <a href="#contact" className="text-white mx-2">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-light text-center p-5">
        <h1>Welcome to ReactOne</h1>
        <p>Your all-in-one solution for modern websites</p>
        <button className="btn btn-primary mt-3">Get Started</button>
      </section>

      {/* Services/Content Section */}
      <section id="services" className="container py-5">
        <h2 className="text-center mb-4">Our Services</h2>
        <div className="row">
          {services.map(service => (
            <div className="col-md-4 text-center mb-3" key={service.id}>
              <h4>{service.title}</h4>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="bg-light py-5">
        <div className="container">
          <h2 className="text-center">Contact Us</h2>
          <form onSubmit={handleSubmit} className="w-50 mx-auto">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control my-2"
              onChange={handleChange}
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="form-control my-2"
              onChange={handleChange}
              required
            />
            <button type="submit" className="btn btn-success w-100 mt-2">Submit</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center p-3 mt-4">
        <p>
          © 2025 ReactOne. Follow us on
          <a href="#" className="text-white mx-1"> Twitter </a>|
          <a href="#" className="text-white mx-1"> Instagram </a>|
          <a href="#" className="text-white mx-1"> GitHub </a>
        </p>
      </footer>
    </>
  );
}

export default App;
