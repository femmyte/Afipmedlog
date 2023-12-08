"use client";
import { useState, useEffect } from "react";

const OtherDevice = () => {
  const [capturedPhrase, setCapturedPhrase] = useState("");

  useEffect(() => {
    // Simulate capturing the key phrase (replace with actual logic)
    const simulatedCapture = () => {
      const urlParams = new URLSearchParams(window.location.search);
      const captured = urlParams.get("phrase");
      if (captured) {
        setCapturedPhrase(captured);
      }
    };

    simulatedCapture();
  }, []);

  return (
    <div>
      <h1>Device Authentication</h1>
      <p>Captured Phrase: {capturedPhrase}</p>
    </div>
  );
};

export default OtherDevice;
