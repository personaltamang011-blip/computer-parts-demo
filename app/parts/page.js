"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const partCards = [
  {
    id: "monitor",
    name: "Monitor",
    price: "$150",
    image:
      "https://images.unsplash.com/photo-1587825140708-1b4252b82b2e?auto=format&fit=crop&w=400&q=80",
    description: "24-inch Full HD display",
  },
  {
    id: "mouse",
    name: "Mouse",
    price: "$25",
    image:
      "https://images.unsplash.com/photo-1598550561763-15717856a8c2?auto=format&fit=crop&w=400&q=80",
    description: "Wireless optical mouse",
  },
  {
    id: "keyboard",
    name: "Keyboard",
    price: "$45",
    image:
      "https://images.unsplash.com/photo-1593642634367-d91a135587b5?auto=format&fit=crop&w=400&q=80",
    description: "Mechanical keyboard with RGB",
  },
  {
    id: "cpu",
    name: "CPU",
    price: "$350",
    image:
      "https://images.unsplash.com/photo-1603791440384-56cd371ee9a7?auto=format&fit=crop&w=400&q=80",
    description: "Intel Core i7 Processor",
  },
  {
    id: "ram",
    name: "RAM",
    price: "$70",
    image:
      "https://images.unsplash.com/photo-1598327097750-bf660af43b46?auto=format&fit=crop&w=400&q=80",
    description: "16GB DDR4 RAM",
  },
];

export default function PartsPage() {
  const router = useRouter();
  const [searchTerm, setSearchTerm] = useState("");

  // Search functionality for top input
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
              backgroundColor: "#538601",
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
              <img
                src={part.image}
                alt={part.name}
                style={{
                  width: "100%",
                  height: "150px",
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
                  backgroundColor: "#3b8608",
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
