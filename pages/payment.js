export default function Payment() {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px",
      background: "#fffaf5",
      fontFamily: "Georgia, serif"
    }}>
      <h2 style={{ fontSize: "32px" }}>💳 Payment</h2>

      <p style={{ maxWidth: "500px", fontSize: "18px" }}>
        Pay a small amount to create a beautiful,
        Pinterest-style digital birthday scrapbook.
      </p>

      <div style={{
        marginTop: "30px",
        padding: "20px",
        background: "#f3e5dc",
        borderRadius: "16px",
        maxWidth: "360px"
      }}>
        <p><strong>Price:</strong> ₹20</p>
        <p>UPI payment will be added here.</p>
      </div>

      <a
        href="/create"
        style={{
          display: "inline-block",
          marginTop: "30px",
          padding: "12px 20px",
          background: "#d8b4a0",
          color: "#000",
          textDecoration: "none",
          borderRadius: "12px"
        }}
      >
        I’ve Paid →
      </a>
    </div>
  );
}
