import React from "react";
import QRCode from "qrcode.react";

const QrCodeComponent = ({ phrase }) => {
  return <QRCode value={phrase} />;
};

export default QrCodeComponent;
