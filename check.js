function checkData() {
    const text = document.querySelector(".data").value.split("\n")[0];
    const certificateId = text.split(" ")[0];

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://nodes-testnet.wavesnodes.com/addresses/data/3Mrx2YzY1dtwbNzRc7JTbgYKvzYPSDVLaDB/"+certificateId);
    xhr.onload  = function() {
        const doesExist = JSON.parse(xhr.response).value === text;
        document.querySelector(".result").innerHTML = doesExist ? "<span style='color: green'><strong>Certificate</strong> exist!</span>" : "<span style='color: red'><strong>Certificate</strong> does not exist!</span>";
        return doesExist;
    };
    xhr.send();
}