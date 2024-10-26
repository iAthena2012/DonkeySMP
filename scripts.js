function copyIP() {
    const ipAddress = "iAthenazr.aternos.me:34688";
    navigator.clipboard.writeText(ipAddress).then(() => {
        alert("Server IP copied to clipboard!");
    }, (err) => {
        console.error("Could not copy text: ", err);
    });
}
