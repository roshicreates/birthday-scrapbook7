import { useState } from "react";

export default function Create() {
  return (
    <div style={styles.outer}>
      <h1 style={styles.heading}>📖 Birthday Scrapbook</h1>

      {/* BOOK */}
      <div style={styles.book}>
        
        {/* LEFT PAGE */}
        <div style={styles.page}>
          <span style={styles.washiTop}>🎀</span>

          <div style={{ ...styles.polaroid, transform: "rotate(-3deg)" }}>
            <div style={styles.photoPlaceholder}>Photo</div>
            <span style={styles.pin}>📌</span>
          </div>

          <div style={{ ...styles.quoteStrip, transform: "rotate(1deg)" }}>
            To the one who makes every day brighter ✨
          </div>

          <span style={styles.stickerStar}>⭐</span>
        </div>

        {/* RIGHT PAGE */}
        <div style={styles.page}>
          <span style={styles.washiTop}>🎀</span>

          <div style={{ ...styles.polaroid, transform: "rotate(2deg)" }}>
            <div style={styles.photoPlaceholder}>Photo</div>
            <span style={styles.pin}>📌</span>
          </div>

          <div style={{ ...styles.quoteStrip, transform: "rotate(-1deg)" }}>
            Another year of memories, laughs & love 💕
          </div>

          <span style={styles.stickerGift}>🎁</span>
          <span style={styles.butterfly}>🦋</span>
        </div>

      </div>
    </div>
  );
}

/* ---------------- STYLES ---------------- */

const styles = {
  outer: {
    minHeight: "100vh",
    padding: "40px 20px",
    background: "#f5efe6",
    fontFamily: "Georgia, serif"
  },

  heading: {
    textAlign: "center",
    marginBottom: "30px",
    fontSize: "36px"
  },

  /* BOOK */
  book: {
    maxWidth: "1100px",
    margin: "0 auto",
    background: "#e8dccf",
    borderRadius: "20px",
    padding: "40px",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "40px",
    boxShadow: "0 30px 60px rgba(0,0,0,0.25)",
    backgroundImage:
      "linear-gradient(0deg, rgba(255,255,255,0.2), rgba(255,255,255,0.2)), repeating-linear-gradient(45deg, rgba(0,0,0,0.03), rgba(0,0,0,0.03) 2px, transparent 2px, transparent 6px)"
  },

  /* PAGE */
  page: {
    background: "#fdfaf5",
    borderRadius: "14px",
    padding: "30px",
    position: "relative",
    boxShadow: "inset 0 0 20px rgba(0,0,0,0.05)"
  },

  /* POLAROID */
  polaroid: {
    background: "#fff",
    padding: "12px",
    width: "80%",
    margin: "0 auto",
    borderRadius: "8px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
    position: "relative"
  },

  photoPlaceholder: {
    height: "220px",
    background: "#d6ccc2",
    borderRadius: "6px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6b5b53",
    fontSize: "18px"
  },

  pin: {
    position: "absolute",
    top: "-14px",
    right: "14px",
    transform: "rotate(10deg)"
  },

  /* QUOTE */
  quoteStrip: {
    marginTop: "26px",
    background: "#f1e4d4",
    padding: "12px 18px",
    borderRadius: "10px",
    fontSize: "16px",
    width: "85%"
  },

  /* WASHI */
  washiTop: {
    position: "absolute",
    top: "-14px",
    left: "50%",
    transform: "translateX(-50%) rotate(-2deg)",
    fontSize: "26px"
  },

  /* STICKERS */
  stickerStar: {
    position: "absolute",
    bottom: "30px",
    left: "30px",
    fontSize: "26px",
    transform: "rotate(-10deg)"
  },

  stickerGift: {
    position: "absolute",
    bottom: "30px",
    right: "40px",
    fontSize: "26px",
    transform: "rotate(8deg)"
  },

  butterfly: {
    position: "absolute",
    top: "100px",
    right: "30px",
    fontSize: "28px",
    animation: "float 3s ease-in-out infinite"
  }
};

/* -------------- ANIMATION -------------- */

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    @keyframes float {
      0% { transform: translateY(0) rotate(5deg); }
      50% { transform: translateY(-6px) rotate(-5deg); }
      100% { transform: translateY(0) rotate(5deg); }
    }
  `;
  document.head.appendChild(style);
}
