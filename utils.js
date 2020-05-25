function loadJson(fileName) {
    let xobj = new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open('GET', fileName, false);
    xobj.send();

    return JSON.parse(xobj.responseText);
}
