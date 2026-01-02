import dynamic from "next/dynamic";
import React from "react";

/* Konva – client side only */
const Stage = dynamic(() => import("react-konva").then(m => m.Stage), { ssr: false });
const Layer = dynamic(() => import("react-konva").then(m => m.Layer), { ssr: false });
const Rect = dynamic(() => import("react-konva").then(m => m.Rect), { ssr: false });
const Text = dynamic(() => import("react-konva").then(m => m.Text), { ssr: false });

export default function CreateScrapbook() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>📖 Birthday Scrapbook</h1>

      <div style={styles.book}>
        {/* LEFT PAGE */}
        <div style={styles.page}>
          <Stage width={420} height={520}>
            <Layer>
              {/* Paper */}
              <Rect width={420} height={520} fill="#f4eadc" cornerRadius={8} />

              {/* Photo placeholder */}
              <Rect
                x={80}
                y={90}
                width={260}
                height={180}
                fill="#e0d6c8"
                cornerRadius={6}
                shadowBlur={8}
              />
              <Text
                text="Add Photo"
                x={170}
                y={165}
                fontSize={16}
                fill="#6b5e4a"
              />

              {/* Quote */}
              <Text
                text="Add your birthday quote ✨"
                x={60}
                y={320}
                width={300}
                align="center"
                fontSize={18}
                fill="#5a4b3c"
              />
            </Layer>
          </Stage>
        </div>

        {/* BOOK FOLD */}
        <div style={styles.fold} />

        {/* RIGHT PAGE */}
        <div style={styles.page}>
          <Stage width={420} height={520}>
            <Layer>
              <Rect width={420} height={520} fill="#f4eadc" cornerRadius={8} />

              <Rect
                x={80}
                y={90}
                width={260}
                height={180}
                fill="#e0d6c8"
                cornerRadius={6}
                shadowBlur={8}
              />
              <Text
                text="Add Photo"
                x={170}
                y={165}
                fontSize={16}
                fill="#6b5e4a"
              />

              <Text
                text="Another beautiful memory 💛"
                x={60}
                y={320}
                width={300}
                align="center"
                fontSize={18}
                fill="#5a4b3c"
              />
            </Layer>
          </Stage>
        </div>
      </div>
    </div>
  );
}

/* STYLES */
const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#e6c8a0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30
  },
  title: {
    fontFamily: "'Brush Script MT', cursive",
    fontSize: 36,
    marginBottom: 20
  },
  book: {
    display: "flex",
    background: "#4b3621",
    padding: 24,
    borderRadius: 16,
    boxShadow: "0 30px 70px rgba(0,0,0,0.45)"
  },
  page: {
    background: "#f4eadc",
    padding: 10,
    borderRadius: 10
  },
  fold: {
    width: 18,
    background: "linear-gradient(to right, #2f1e12, #6d4c41)",
    margin: "0 12px",
    borderRadius: 6
  }
};
