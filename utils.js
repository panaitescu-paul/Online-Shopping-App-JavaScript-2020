function loadJson(fileName) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', fileName, false); // Replace 'products' with the path to your file
    xobj.send();

    return JSON.parse(xobj.responseText);
}