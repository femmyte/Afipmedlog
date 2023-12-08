"use client";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";

const QrScanner = ({ stopScanner, onScan }) => {
  const [isScanning, setIsScanning] = useState(true);

  const handleScan = (data) => {
    if (data) {
      setIsScanning(false);
      onScan(data);
    }
  };

  const handleError = (error) => {
    console.error("Error accessing camera:", error);
  };

  const resetScanner = () => {
    setIsScanning(true);
  };
  const closeScanner = () => {
    setIsScanning(false);
  };
  return (
    <div className="relative">
      {isScanning && (
        <QrReader
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
        />
      )}
      {!isScanning && <button onClick={resetScanner}>Scan Again</button>}
    </div>
  );
};

export default QrScanner;
