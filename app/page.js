"use client";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* === Responsive Navbar === */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#ffffffcc",
          backdropFilter: "blur(10px)",
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "12px 20px",
            maxWidth: "1100px",
            margin: "0 auto",
          }}
        >
          {/* Brand / Logo */}
          <Link
            href="/"
            style={{
              fontWeight: "bold",
              fontSize: "20px",
              color: "#648f00",
              textDecoration: "none",
            }}
          >
            Sarmimani Parts
          </Link>

          {/* Desktop Menu */}
          <div
            className="nav-links"
            style={{
              display: menuOpen ? "none" : "flex",
              gap: "20px",
            }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "#222" }}>
              Home
            </Link>
            <Link href="/parts" style={{ textDecoration: "none", color: "#222" }}>
              Parts
            </Link>
            <Link
              href="https://computer-inventory-pwa-57sq.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none", color: "#222" }}
            >
              Inventory
            </Link>
            <Link
              href="https://comp-form-demo.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none", color: "#222" }}
            >
              Form Demo
            </Link>
          </div>

          {/* Hamburger Button (visible on mobile) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              background: "none",
              border: "none",
              fontSize: "26px",
              cursor: "pointer",
              display: "block",
              color: "#333",
            }}
            className="hamburger"
          >
            {menuOpen ? "✕" : "☰"}
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div
            style={{
              background: "#f9f9f9",
              borderTop: "1px solid #ddd",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              padding: "15px 0",
              gap: "12px",
            }}
          >
            <Link
              href="/"
              style={{ textDecoration: "none", color: "#333" }}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/parts"
              style={{ textDecoration: "none", color: "#333" }}
              onClick={() => setMenuOpen(false)}
            >
              Parts
            </Link>
            <Link
              href="https://computer-inventory-pwa-57sq.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none", color: "#333" }}
              onClick={() => setMenuOpen(false)}
            >
              Inventory
            </Link>
            <Link
              href="https://comp-form-demo.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none", color: "#333" }}
              onClick={() => setMenuOpen(false)}
            >
              Form Demo
            </Link>
          </div>
        )}
      </header>

      {/* === Main Page Content === */}
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1>Welcome to Sarmimani Computer Parts Demo</h1>
        <p>
          This is my first e-commerce design practice demo site. This is for practical purpose only.
        </p>

        <div style={{ marginTop: 20 }}>
          <Link href="/parts">
            <button
              style={{
                marginTop: "20px",
                padding: "10px 20px",
                backgroundColor: "#648f00",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              View Parts
            </button>
          </Link>
        </div>

        <div style={{ marginTop: 16 }}>
          <Link href="https://computer-inventory-pwa-57sq.vercel.app/">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#648f00",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              computer-inventory
            </button>
          </Link>
        </div>

        <div style={{ marginTop: 16 }}>
          <Link href="https://comp-form-demo.vercel.app/">
            <button
              style={{
                padding: "10px 20px",
                backgroundColor: "#648f00",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              comp-form-demo
            </button>
          </Link>
        </div>
      </main>

      {/* === Footer === */}
      <footer
        style={{
          marginTop: "60px",
          background: "#f2f4f1",
          padding: "20px 0",
          textAlign: "center",
          color: "#555",
          fontSize: "14px",
        }}
      >
        © {new Date().getFullYear()} Sarmimani Parts — Built with ❤️
      </footer>

      {/* === Inline Responsive Styling === */}
      <style jsx>{`
        @media (max-width: 768px) {
          .nav-links {
            display: none !important;
          }
          .hamburger {
            display: block !important;
          }
        }

        @media (min-width: 769px) {
          .hamburger {
            display: none !important;
          }
          .nav-links {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
