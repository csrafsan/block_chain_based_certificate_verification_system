function sendData() {
    const text = document.querySelector(".data").value;
    let data = text.split("\n");
    data = data.map(function(x) { return {"key": x.split(" ")[0], "value": x, "type": "string"}} );
    const tx = {
        type: 12, // data transaction
        data: {
            data: data,
            fee: {
                "tokens": "0.001",
                "assetId": "WAVES"
            }
        }
    };
    WavesKeeper.signAndPublishTransaction(tx);
    return text;
}