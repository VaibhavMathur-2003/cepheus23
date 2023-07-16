import React from "react";
import "./qrcode.css"
import QRCode from "react-qr-code";

export default function QrCode({userdata, setShowQr}) {
    console.log(userdata);
    let qrPath = userdata.id.toString();
    console.log(qrPath);
    return (
        <div className="qrcode">
            <i onClick={() => setShowQr(false)} class="fa-solid fa-xmark"></i>
            <h3>Offline Registrations QR</h3>
            <QRCode value={qrPath} style={{ height: "auto", maxWidth: "80%", width: "80%" }}/>
        </div>
    )
}