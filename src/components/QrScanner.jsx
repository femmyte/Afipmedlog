"use client";
import React, { useState, useRef, useEffect } from "react";
import { QrReader } from "react-qr-reader";

const QrScanner = ({ onScan }) => {
  const [isScanning, setIsScanning] = useState(true);
  const [facingMode, setFacingMode] = useState("user"); // 'user' for front camera, 'environment' for back camera

  const qrReaderRef = useRef(null);

  useEffect(() => {
    // Reset scanning when facingMode changes
    setIsScanning(true);
  }, [facingMode]);

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

  const toggleFacingMode = () => {
    setFacingMode((prevMode) => (prevMode === "user" ? "environment" : "user"));
  };

  return (
    <div className="relative">
      {isScanning && (
        <QrReader
          ref={qrReaderRef}
          key={facingMode} // Force remount when facingMode changes
          delay={300}
          onError={handleError}
          onScan={handleScan}
          style={{ width: "100%" }}
          facingMode={facingMode}
        />
      )}
      {!isScanning && (
        <button
          onClick={resetScanner}
          className="absolute top-2 right-2 bg-blue-500 text-white py-2 px-4 rounded"
        >
          Scan Again
        </button>
      )}
      <button
        onClick={toggleFacingMode}
        className="mt-4 bg-blue-500 text-white py-2 px-4 rounded"
      >
        Toggle Camera
      </button>
    </div>
  );
};

export default QrScanner;
