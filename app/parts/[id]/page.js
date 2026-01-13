"use client";

import React, { use } from "react";
import { useRouter } from "next/navigation";

export default function PartDetail({ params }) {
  const { id } = use(params);
  const router = useRouter();

  const parts = {
    monitor: {
      name: "Monitor",
      details: "A 24-inch Full HD LED monitor with 75Hz refresh rate.",
    },
    mouse: {
      name: "Mouse",
      details: "A wireless optical mouse with adjustable DPI.",
    },
    keyboard: {
      name: "Keyboard",
      details: "A mechanical keyboard with RGB backlight.",
    },
    cpu: {
      name: "CPU",
      details: "An Intel Core i7 12th Gen processor.",
    },
    ram: {
      name: "RAM",
      details: "16GB DDR4 RAM, ideal for multitasking.",
    },
  };

  const part = parts[id];

  if (!part) {
    return (
      <main style={{ padding: "20px", textAlign: "center" }}>
        <h1>Part not found</h1>
        <button
          onClick={() => router.push("/parts")}
          style={{
            marginTop: "20px",
            padding: "8px 16px",
            backgroundColor: "#0070f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          Back to Search
        </button>
      </main>
    );
  }

  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>{part.name}</h1>
      <p>{part.details}</p>

      <div style={{ marginTop: "30px", display: "flex", gap: "10px", justifyContent: "center" }}>
        <button
          onClick={() => router.push("/parts")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#6c8000",
            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
        >
          ← Back to Search
        </button>

        <button
          onClick={() => router.push("/")}
          style={{
            padding: "10px 20px",
            backgroundColor: "#555",
            color: "white",
            borderRadius: "5px",
            border: "none",
          }}
        >
          🏠 Back Home
        </button>
      </div>
    </main>
  );
}
