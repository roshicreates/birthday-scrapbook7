import { useState } from "react";

export default function CreateScrapbook() {
  const [photo1, setPhoto1] = useState(null);
  const [photo2, setPhoto2] = useState(null);

  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>📖 Birthday Scrapbook</h1>

      <div style={styles.book}>
        {/* LEFT PAGE */}
        <div style={styles.page}>
          <label style={styles.photoFrame}>
            {photo1 ? (
              <img src={photo1} style={styles.photo} />
            ) : (
              <span>Add Photo</span>
            )}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) =>
                setPhoto1(URL.createObjectURL(e.target.files[0]))
              }
            />
          </label>

          <div style={styles.tape} />
          <p style={styles.quote}>
            Add your birthday quote ✨
          </p>

          <span style={styles.sticker}>🦋</span>
        </div>

        {/* SPINE */}
        <div style={styles.spine} />

        {/* RIGHT PAGE */}
        <div style={styles.page}>
          <label style={styles.photoFrame}>
            {photo2 ? (
              <img src={photo2} style={styles.photo} />
            ) : (
              <span>Add Photo</span>
            )}
            <input
              type="file"
              accept="image/*"
              hidden
              onChange={(e) =>
                setPhoto2(URL.createObjectURL(e.target.files[0]))
              }
            />
          </label>

          <div style={styles.tapeAlt} />
          <p style={styles.quote}>
            Another beautiful memory 💛
          </p>

          <span style={styles.stickerAlt}>🎁</span>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#e6c8a0",
    padding: 30,
    textAlign: "center",
  },
  title: {
    fontFamily: "'Brush Script MT', cursive",
    fontSize: 38,
    marginBottom: 30,
  },
  book: {
    display: "flex",
    justifyContent: "center",
    background: "#4b3621",
    padding: 25,
    borderRadius: 20,
    boxShadow: "0 30px 70px rgba(0,0,0,0.4)",
  },
  page: {
    width: 380,
    height: 520,
    background: "#f4eadc",
    borderRadius: 14,
    padding: 20,
    margin: 5,
    position: "relative",
    boxShadow: "inset 0 0 25px rgba(0,0,0,0.08)",
  },
  spine: {
    width: 18,
    background: "linear-gradient(to right,#2f1e12,#6d4c41)",
    borderRadius: 8,
    margin: "0 10px",
  },
  photoFrame: {
    width: "100%",
    height: 220,
    border: "2px dashed #c2b4a3",
    borderRadius: 12,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    background: "#e9dfd0",
    boxShadow: "0 8px 18px rgba(0,0,0,0.15)",
  },
  photo: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    borderRadius: 12,
  },
  quote: {
    marginTop: 25,
    fontSize: 18,
    fontStyle: "italic",
    color: "#5a4b3c",
  },
  tape: {
    position: "absolute",
    top: 10,
    left: 120,
    width: 120,
    height: 20,
    background: "rgba(255,200,150,0.7)",
    transform: "rotate(-3deg)",
  },
  tapeAlt: {
    position: "absolute",
    top: 12,
    left: 140,
    width: 100,
    height: 18,
    background: "rgba(255,200,150,0.7)",
    transform: "rotate(4deg)",
  },
  sticker: {
    position: "absolute",
    bottom: 25,
    right: 30,
    fontSize: 32,
    animation: "float 3s ease-in-out infinite",
  },
  stickerAlt: {
    position: "absolute",
    bottom: 30,
    left: 30,
    fontSize: 30,
    animation: "float 4s ease-in-out infinite",
  },
};
