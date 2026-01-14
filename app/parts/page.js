"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const partCards = [
  { id: "monitor", name: "Monitor", price: "$150", image: "monitor.jpg", description: "24-inch Full HD display" },
  { id: "mouse", name: "Mouse", price: "$25", image: "mouse.jpg", description: "Wireless optical mouse" },
  { id: "keyboard", name: "Keyboard", price: "$45", image: "keyboard.jpg", description: "Mechanical keyboard with RGB" },
  { id: "cpu", name: "CPU", price: "$350", image: "cpu.jpg", description: "Intel Core i7 Processor" },
  { id: "ram", name: "RAM", price: "$70", image: "ram.jpg", description: "16GB DDR4 RAM" },
];

export default function PartsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    const found = partCards.find(
      (part) => part.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (found) {
      router.push(`/parts/${found.id}`);
    } else {
      alert("Part not found! Try Monitor, Mouse, Keyboard, CPU, or RAM.");
    }
  };

  return (
    <main style={{ padding: "20px", fontFamily: "Arial" }}>
      {/* --- Top Search Section --- */}
      <section style={{ textAlign: "center", marginBottom: "40px" }}>
        <h1>Search Computer Parts</h1>
        <div style={{ marginTop: "20px" }}>
          <input
            type="text"
            placeholder="Type part name (e.g., Monitor)"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              padding: "8px",
              width: "250px",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
          <button
            onClick={handleSearch}
            style={{
              marginLeft: "10px",
              padding: "8px 12px",
              backgroundColor: "#4b5f3f",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Search
          </button>
        </div>
      </section>

      {/* --- Bottom Card Section --- */}
      <section>
        <h2 style={{ textAlign: "center", marginBottom: "20px" }}>
          Shop Computer Parts
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "20px",
          }}
        >
          {partCards.map((part) => (
            <div
              key={part.id}
              style={{
                background: "white",
                padding: "20px",
                borderRadius: "10px",
                boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
                textAlign: "center",
              }}
            >
              <Image
                src={`/images/${part.image}`}
                alt={part.name}
                width={400}
                height={250}
                style={{
                  width: "100%",
                  height: "180px",
                  objectFit: "cover",
                  borderRadius: "8px",
                  marginBottom: "10px",
                }}
              />
              <h3>{part.name}</h3>
              <p style={{ fontWeight: "bold" }}>{part.price}</p>
              <p style={{ fontSize: "14px", color: "#555" }}>
                {part.description}
              </p>
              <button
                onClick={() => router.push(`/parts/${part.id}`)}
                style={{
                  marginTop: "10px",
                  padding: "8px 12px",
                  backgroundColor: "#a71676",
                  color: "white",
                  border: "none",
                  borderRadius: "5px",
                }}
              >
                View Details
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* --- Back Home Button --- */}
      <div style={{ textAlign: "center", marginTop: "40px" }}>
        <button
          onClick={() => router.push("/")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#555",
            color: "white",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          🏠 Back Home
        </button>
      </div>
    </main>
  );
}
