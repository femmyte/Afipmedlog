import React from "react";
import QRCode from "qrcode.react";

const QrCodeComponent = ({ phrase }) => {
  return (
    <div className="w-full">
      <QRCode value={phrase} />
    </div>
  );
};

export default QrCodeComponent;
