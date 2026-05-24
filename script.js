let qrImage = document.getElementById("qrImage");
let qrText = document.getElementById("qrText");
let imgBox = document.getElementById("imgBox");

function generateQR() {
    if (qrText.value.length > 0) 
    {
        qrImage.src = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=" + qrText.value;
        imgBox.classList.add('show-img');
    }
    else {
        alert("Please enter text or URL");
    }
}

function downloadQR() {
    if (qrImage.src == "") 
    {
        alert("Generate a QR Code first");
    }
    else 
    {
        let imageLink = document.createElement("a");
        imageLink.href = qrImage.src;
        imageLink.download = "QRCode.png";
        imageLink.click();
    }
}