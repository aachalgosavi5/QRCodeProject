function generateQRCode() {
    // Get the input text
    var text = document.getElementById("text").value;

    // Clear the previous QR code
    document.getElementById("qrcode").innerHTML = "";

    // Generate the new QR code
    new QRCode(document.getElementById("qrcode"), text);
}
