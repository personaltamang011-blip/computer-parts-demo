"use client";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      {/* === Navbar Section === */}
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: "#ffffffcc",
          backdropFilter: "blur(8px)",
          boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
        }}
      >
        <nav
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            maxWidth: "1100px",
            margin: "0 auto",
            padding: "10px 20px",
          }}
        >
          {/* Left side (Brand) */}
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

          {/* Desktop Links */}
          <div
            style={{
              display: "flex",
              gap: "20px",
            }}
          >
            <Link href="/" style={{ textDecoration: "none", color: "black" }}>
              Home
            </Link>
            <Link href="/parts" style={{ textDecoration: "none", color: "black" }}>
              Parts
            </Link>
            <Link
              href="https://computer-inventory-pwa-57sq.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              Inventory
            </Link>
            <Link
              href="https://comp-form-demo.vercel.app/"
              target="_blank"
              style={{ textDecoration: "none", color: "black" }}
            >
              Form Demo
            </Link>
          </div>

          {/* Mobile menu button (optional future use) */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            style={{
              display: "none",
              border: "none",
              background: "none",
              fontSize: "22px",
              cursor: "pointer",
            }}
          >
            ☰
          </button>
        </nav>
      </header>

      {/* === Main Page Content === */}
      <main style={{ padding: "40px", textAlign: "center" }}>
        <h1>Welcome to Sarmimani Computer Parts Demo</h1>
        <p>
          This is my first e-commerce design practice demo site. This is for practical purpose only.
        </p>

        

       

        
      </main>
    </>
  );
}
