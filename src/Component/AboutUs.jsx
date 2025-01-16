import React from 'react';
import '../CSS/About.css';

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1 className="about-us-title">About Us</h1>

      <section className="about-us-section">
        <h2>Our Story</h2>
        <p>
          Welcome to [Shop Name], your gateway to the world of enchanting fragrances.
          Founded with a passion for timeless scents and a commitment to quality, we
          strive to bring you the finest perfumes from around the globe. Our journey
          began in [Year], inspired by the art of blending aromas that evoke memories,
          emotions, and individuality.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Our Mission</h2>
        <p>
          At [Shop Name], our mission is simple: to celebrate the beauty of self-expression
          through the magic of fragrance. Each bottle in our collection is thoughtfully curated
          to help you find your unique signature scent, whether you’re seeking bold sophistication,
          gentle florals, or adventurous spices.
        </p>
      </section>

      <section className="about-us-section">
        <h2>Why Choose Us?</h2>
        <ul>
          <li><strong>Curated Selection</strong>: We offer an exclusive range of designer and niche perfumes for both men and women.</li>
          <li><strong>Quality Guaranteed</strong>: Every product in our store is authentic, sourced directly from trusted brands and artisans.</li>
          <li><strong>Personalized Experience</strong>: Not sure what to pick? Let our experts guide you to your perfect match.</li>
          <li><strong>Sustainability</strong>: We are committed to eco-friendly practices, including offering refillable options and responsibly sourced ingredients.</li>
        </ul>
      </section>

      <section className="about-us-section">
        <h2>Our Values</h2>
        <ul>
          <li><strong>Elegance</strong>: We believe fragrance is an art form, blending style and sophistication.</li>
          <li><strong>Passion</strong>: We’re driven by our love for scents and the emotions they inspire.</li>
          <li><strong>Integrity</strong>: Authenticity is at the core of everything we do.</li>
        </ul>
      </section>

      <section className="about-us-section">
        <h2>Visit Us</h2>
        <p>
          Step into our store or explore our online collection to embark on your fragrance journey.
          Let [Shop Name] be your trusted partner in discovering the scent that speaks to your soul.
        </p>
      </section>
    </div>
  );
};

export default AboutUs;
