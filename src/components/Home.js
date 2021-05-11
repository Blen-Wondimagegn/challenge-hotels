import React from "react";
import "./Home.css";

function Home() {
  return (
    <section>
      <div class="sidenav">
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
        <a href="#about">About</a>
        <a href="#services">Services</a>
        <a href="#clients">Clients</a>
        <a href="#contact">Contact</a>
      </div>

      <div class="main">
        <h2>VENETIAN</h2>
        <button class="tablink" onclick="openPage('Home', this, 'red')">
          DESCRIPTION
        </button>
        <button
          class="tablink"
          onclick="openPage('News', this, 'green')"
          id="defaultOpen"
        >
          DETAILS
        </button>
        <button class="tablink" onclick="openPage('Contact', this, 'blue')">
          LOCATION
        </button>

        <div id="DESCRIPTION" class="tabcontent">
          <h3>DESCRIPTION</h3>
          <p>Home is where the heart is..</p>
        </div>

        <div id="DETAILS" class="tabcontent">
          <h3>DETAILS</h3>
          <p>Some news this fine day!</p>
        </div>

        <div id="LOCATION" class="tabcontent">
          <h3>LOCATION</h3>
          <p>Get in touch, or swing by for a cup of coffee.</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
