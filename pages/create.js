export default function Create() {
  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px",
      background: "#f7f2ee",
      fontFamily: "Georgia, serif"
    }}>
      <h2 style={{ fontSize: "32px" }}>📖 Scrapbook Creator</h2>

      <p style={{ maxWidth: "600px", fontSize: "18px" }}>
        This is where you will upload photos, write heartfelt quotes,
        and create a Pinterest-style digital scrapbook.
      </p>

      <div style={{
        marginTop: "30px",
        padding: "20px",
        background: "#efe1d8",
        borderRadius: "16px"
      }}>
        <p>✨ Photo upload (coming soon)</p>
        <p>✨ Quote cards (coming soon)</p>
        <p>✨ Page flip animation (coming soon)</p>
      </div>
    </div>
  );
}
