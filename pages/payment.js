import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Payment() {
  const [email, setEmail] = useState("");
  const [txn, setTxn] = useState("");
  const [loading, setLoading] = useState(false);

  async function handlePayment() {
    if (!email || !txn) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      await addDoc(collection(db, "payments"), {
        email: email,
        transactionId: txn,
        used: false,
        createdAt: new Date()
      });

      alert("Payment recorded successfully 🎉");
      window.location.href = "/create";
    } catch (error) {
      alert("Something went wrong. Try again.");
      console.error(error);
    }

    setLoading(false);
  }

  return (
    <div style={{
      minHeight: "100vh",
      padding: "40px",
      background: "#fffaf5",
      fontFamily: "Georgia, serif"
    }}>
      <h2>💳 Payment</h2>

      <p>Pay ₹20 and enter details below</p>

      <div style={{
        maxWidth: "360px",
        background: "#f3e5dc",
        padding: "20px",
        borderRadius: "16px"
      }}>
        <input
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <input
          placeholder="UPI Transaction ID"
          value={txn}
          onChange={e => setTxn(e.target.value)}
          style={{ width: "100%", padding: "10px", marginBottom: "10px" }}
        />

        <button
          onClick={handlePayment}
          disabled={loading}
          style={{
            width: "100%",
            padding: "12px",
            background: "#d8b4a0",
            border: "none",
            borderRadius: "12px",
            cursor: "pointer"
          }}
        >
          {loading ? "Saving..." : "I have paid"}
        </button>
      </div>
    </div>
  );
}
