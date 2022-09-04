function qrCode(){
    const url = document.querySelector("#url").value
    let link = `https://chart.googleapis.com/chart?cht=qr&chl=${url}&chs=320x320`
    location.href = link
    // const form = document.querySelector("#form")
    // let qrImage = document.createElement("img")
    // qrImage.src = link
    // form.appendChild(qrImage)
}