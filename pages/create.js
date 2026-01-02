import dynamic from "next/dynamic";

const Stage = dynamic(() => import("react-konva").then(m => m.Stage), { ssr: false });
const Layer = dynamic(() => import("react-konva").then(m => m.Layer), { ssr: false });
const Rect = dynamic(() => import("react-konva").then(m => m.Rect), { ssr: false });
const Text = dynamic(() => import("react-konva").then(m => m.Text), { ssr: false });

export default function CreateScrapbook() {
  return (
    <div style={styles.wrapper}>
      <h1 style={styles.title}>📖 Birthday Scrapbook</h1>

      {/* BOOK */}
      <div style={styles.book}>
        {/* LEFT PAGE */}
        <div style={styles.page}>
          <Stage width={420} height={520}>
            <Layer>
              {/* Paper */}
              <Rect
                x={0}
                y={0}
                width={420}
                height={520}
                fill="#f4eadc"
                cornerRadius={8}
              />

              {/* Placeholder photo */}
              <Rect
                x={90}
                y={90}
                width={240}
                height={180}
                fill="#ddd"
                cornerRadius={6}
              />
              <Text
                text="Add Photo"
                x={165}
                y={170}
                fontSize={16}
                fill="#777"
              />

              {/* Quote */}
              <Text
                text="Add your quote here ✨"
                x={60}
                y={310}
                width={300}
                align="center"
                fontSize={18}
                fill="#555"
              />
            </Layer>
          </Stage>
        </div>

        {/* CENTER FOLD */}
        <div style={styles.fold} />

        {/* RIGHT PAGE */}
        <div style={styles.page}>
          <Stage width={420} height={520}>
            <Layer>
              <Rect
                x={0}
                y={0}
                width={420}
                height={520}
                fill="#f4eadc"
                cornerRadius={8}
              />

              <Rect
                x={90}
                y={90}
                width={240}
                height={180}
                fill="#ddd"
                cornerRadius={6}
              />
              <Text
                text="Add Photo"
                x={165}
                y={170}
                fontSize={16}
                fill="#777"
              />

              <Text
                text="Another memory 💛"
                x={60}
                y={310}
                width={300}
                align="center"
                fontSize={18}
                fill="#555"
              />
            </Layer>
          </Stage>
        </div>
      </div>
    </div>
  );
}

const styles = {
  wrapper: {
    minHeight: "100vh",
    background: "#e6c8a0",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    paddingTop: 30,
  },
  title: {
    fontFamily: "'Brush Script MT', cursive",
    fontSize: 36,
    marginBottom: 20,
  },
  book: {
    display: "flex",
    background: "#5b4636",
    padding: 25,
    borderRadius: 14,
    boxShadow: "0 25px 60px rgba(0,0,0,0.35)",
  },
  page: {
    background: "#f4eadc",
    padding: 10,
    borderRadius: 10,
  },
  fold: {
    width: 18,
    background: "linear-gradient(to right, #3a2a1f, #6d4c41)",
    margin: "0 10px",
    borderRadius: 6,
  },
};
