import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome to Sarmimani Computer Parts Demo</h1>
      <p>This is my first e-commerce design practice demo site. This is for practical purpose only..</p>

      <Link href="/parts">
        <button
          style={{
            marginTop: "20px",
            padding: "10px 20px",
            backgroundColor: "#648f00",
            color: "white",
            border: "none",
            borderRadius: "5px",
          }}
        >
          View Parts
        </button>
      </Link>
    </main>
  );
}
