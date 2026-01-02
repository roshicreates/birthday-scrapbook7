import { useState } from "react";

export default function Create() {
  const [pages] = useState([
    { id: 1, quote: "To the one who makes every day brighter ✨" },
    { id: 2, quote: "Another year of memories, laughs & love 💕" }
  ]);

  return (
    <div style={styles.bg}>
      <h1 style={styles.title}>📖 Birthday Scrapbook</h1>

      <div style={styles.book}>
        {pages.map((p) => (
          <div key={p.id} style={styles.page} 
          className="flip">
            <div style={styles.polaroid}>
              <div style={styles.photoPlaceholder}>
                Photo {p.id}
              </div>
              <span style={styles.tape}>📌</span>
            </div>

            <div style={styles.quoteCard}>
              <p style={styles.quote}>{p.quote}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  bg: {
    minHeight: "100vh",
    padding: "40px 20px",
    background: "linear-gradient(180deg, #fdf6f0, #f7efe9)",
    fontFamily: "Georgia, serif"
  },
  title: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "36px"
  },
  book: {
    maxWidth: "900px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "24px"
  },
  page: {
    background: "#fff",
    padding: "20px",
    borderRadius: "18px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)"
  },
  polaroid: {
    background: "#fff",
    padding: "12px",
    borderRadius: "10px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.12)",
    position: "relative"
  },
  photoPlaceholder: {
    height: "200px",
    background: "#e9dfd7",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6b5b53",
    fontSize: "18px"
  },
  tape: {
    position: "absolute",
    top: "-10px",
    right: "10px",
    transform: "rotate(8deg)"
  },
  quoteCard: {
    marginTop: "16px",
    background: "#f3e6dd",
    padding: "14px",
    borderRadius: "14px"
  },
  quote: {
    fontSize: "16px",
    lineHeight: 1.4
  }
};
// simple page-flip effect
if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    .flip {
      transition: transform 0.6s ease, box-shadow 0.6s ease;
      transform-origin: left center;
    }
    .flip:hover {
      transform: rotateY(-8deg);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }
  `;
  document.head.appendChild(style);
}
