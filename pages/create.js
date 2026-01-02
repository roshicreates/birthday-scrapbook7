import { useState } from "react";
import { collection, query, where, getDocs, updateDoc, doc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Create() {
  const [email, setEmail] = useState("");
  const [verified, setVerified] = useState(false);
  const [loading, setLoading] = useState(false);

  async function verifyPayment() {
    setLoading(true);

    const q = query(
      collection(db, "payments"),
      where("email", "==", email),
      where("used", "==", false)
    );

    const snapshot = await getDocs(q);

    if (snapshot.empty) {
      alert("No valid payment found ❌");
      setLoading(false);
      return;
    }

    // mark payment as used
    const paymentDoc = snapshot.docs[0];
    await updateDoc(doc(db, "payments", paymentDoc.id), {
      used: true
    });

    setVerified(true);
    setLoading(false);
  }

  if (!verified) {
    return (
      <div style={{
        minHeight: "100vh",
        padding: "40px",
        background: "#f7f2ee",
        fontFamily: "Georgia, serif"
      }}>
        <h2>🔐 Verify Payment</h2>

        <input
          placeholder="Enter your payment email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ padding: "10px", width: "300px" }}
        />

        <br /><br />

        <button
          onClick={verifyPayment}
          disabled={loading}
          style={{
            padding: "10px 20px",
            background: "#d8b4a0",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer"
          }}
        >
          {loading ? "Checking..." : "Unlock Scrapbook"}
        </button>
      </div>
    );
  }

  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px",
      background: "#fdf6f0",
      fontFamily: "Georgia, serif"
    }}>
      <h2>📖 Scrapbook Creator</h2>
      <p>✨ Access granted. Start creating your scrapbook.</p>
    </div>
  );
}
