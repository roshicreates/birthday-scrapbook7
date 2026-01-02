import { useState } from "react";

export default function Create() {
  const [pages, setPages] = useState([
    {
      id: 1,
      quote: "To the one who makes every day brighter ✨",
      image: null,
      active: false
    },
    {
      id: 2,
      quote: "Another year of memories, laughs & love 💕",
      image: null,
      active: false
    }
  ]);

  function handleImageUpload(e, id) {
    const file = e.target.files[0];
    if (!file) return;
    const url = URL.createObjectURL(file);

    setPages(prev =>
      prev.map(p =>
        p.id === id ? { ...p, image: url, active: true } : p
      )
    );
  }

  return (
    <div style={styles.bg}>
      <h1 style={styles.title}>📖 Birthday Scrapbook</h1>

      <div style={styles.book}>
        {pages.map((p) => (
          <div
            key={p.id}
            className="scrap-page"
            style={{
              ...styles.page,
              transform: p.active ? "scale(1.05)" : "scale(1)"
            }}
            onClick={() =>
              setPages(prev =>
                prev.map(pg =>
                  pg.id === p.id
                    ? { ...pg, active: !pg.active }
                    : pg
                )
              )
            }
          >
            {/* 🎂 Birthday Sticker */}
            <span style={styles.birthdaySticker}>🎂 Happy Birthday</span>

            {/* 🦋 Butterfly */}
            <span style={styles.butterfly}>🦋</span>

            {/* 📸 Polaroid */}
            <div style={styles.polaroid}>
              {p.image ? (
                <img src={p.image} alt="" style={styles.photo} className="photo-pop" />
              ) : (
                <label style={styles.uploadBox}>
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    hidden
                    onChange={(e) => handleImageUpload(e, p.id)}
                  />
                </label>
              )}
              <span style={styles.pin}>📌</span>
            </div>

            {/* ✍️ Quote */}
            <div style={styles.quoteCard}>
              <p style={styles.quote}>{p.quote}</p>
            </div>

            {/* 🏷️ Since Tag */}
            <span style={styles.sinceTag}>Since 2014 💕</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */

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
    gap: "30px"
  },
  page: {
    background: "#fff",
    padding: "26px",
    borderRadius: "22px",
    position: "relative",
    cursor: "pointer",
    boxShadow: "0 14px 30px rgba(0,0,0,0.12)",
    transition: "all 0.35s ease"
  },

  /* Stickers */
  birthdaySticker: {
    position: "absolute",
    top: "-14px",
    left: "20px",
    background: "#f7d046",
    padding: "6px 12px",
    borderRadius: "14px",
    fontSize: "14px",
    transform: "rotate(-4deg)",
    boxShadow: "0 4px 10px rgba(0,0,0,0.18)"
  },
  butterfly: {
    position: "absolute",
    right: "18px",
    top: "60px",
    fontSize: "28px",
    transform: "rotate(8deg)"
  },
  sinceTag: {
    position: "absolute",
    bottom: "-12px",
    left: "30px",
    background: "#f3e6dd",
    padding: "6px 16px",
    borderRadius: "12px",
    fontSize: "13px",
    transform: "rotate(-2deg)"
  },

  polaroid: {
    background: "#fff",
    padding: "12px",
    borderRadius: "12px",
    boxShadow: "0 6px 14px rgba(0,0,0,0.12)",
    position: "relative"
  },
  uploadBox: {
    height: "200px",
    background: "#e8ded6",
    borderRadius: "8px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#6b5b53",
    cursor: "pointer"
  },
  photo: {
    width: "100%",
    height: "200px",
    objectFit: "cover",
    borderRadius: "8px"
  },
  pin: {
    position: "absolute",
    top: "-12px",
    right: "12px",
    transform: "rotate(10deg)"
  },
  quoteCard: {
    marginTop: "18px",
    background: "#f3e6dd",
    padding: "14px",
    borderRadius: "14px"
  },
  quote: {
    fontSize: "16px",
    lineHeight: 1.4
  }
};

/* ---------- ANIMATIONS ---------- */

if (typeof document !== "undefined") {
  const style = document.createElement("style");
  style.innerHTML = `
    .scrap-page:hover {
      transform: scale(1.05);
      box-shadow: 0 24px 50px rgba(0,0,0,0.22);
    }
    .photo-pop {
      animation: pop 0.45s ease-out;
    }
    @keyframes pop {
      0% { transform: scale(0.9); opacity: 0; }
      100% { transform: scale(1); opacity: 1; }
    }
  `;
  document.head.appendChild(style);
}
