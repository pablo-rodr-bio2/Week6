function rgbToHex(r, g, b) {
    let hex = r.toString(16) + g.toString(16) + b.toString(16);
    let result = "#"
    return result + hex.toUpperCase()
}


function hexToRgb(h) {
    let r = 0, g = 0, b = 0;


    r = "0x" + h[1] + h[2];
    g = "0x" + h[3] + h[4];
    b = "0x" + h[5] + h[6];


    return "rgb(" + +r + "," + +g + "," + +b + ")";

}

exports.rgbToHex = rgbToHex;
exports.hexToRgb = hexToRgb;