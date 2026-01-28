"use client";
import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const goHome = () => {
    document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const goCategories = () => {
    document.getElementById("categories")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const goAbout = () => {
    document.getElementById("about")?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <header className="vedic-topbar">
        <h2 className="vedic-title">Vedic Encyclopedia</h2>
        <button className="vedic-menu-btn" onClick={() => setOpen(true)}>
          ☰ Menu
        </button>
      </header>

      {open && <div className="vedic-overlay" onClick={() => setOpen(false)} />}

      <nav className={`vedic-sidebar ${open ? "open" : ""}`}>
        <button className="vedic-close-btn" onClick={() => setOpen(false)}>✕</button>
        <div className="menu-heading">Navigation</div>

        <ul>
         < li onClick={goHome}>Home</li>
          <li onClick={goCategories}>Categories</li>
          <li onClick={goAbout}>About</li>
      </ul>
      </nav>
    </>
  )
}
