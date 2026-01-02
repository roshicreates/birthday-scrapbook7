export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px",
      background: "#fdf6f0",
      fontFamily: "Georgia, serif"
    }}>
      <h1 style={{ fontSize: "40px" }}>🎂 Birthday Scrapbook</h1>

      <p style={{ fontSize: "18px", maxWidth: "500px" }}>
        A Pinterest-style digital scrapbook to surprise someone you love.
      </p>

      <a
        href="/payment"
        style={{
          display: "inline-block",
          marginTop: "20px",
          padding: "12px 20px",
          background: "#e8c7b8",
          color: "#000",
          textDecoration: "none",
          borderRadius: "12px",
          boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
        }}
      >
        Create a Scrapbook →
      </a>
    </div>
  );
}
