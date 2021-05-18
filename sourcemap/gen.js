const path = require("path");
const sp = require("source-map");

var map = new sp.SourceMapGenerator({
    file: path.join(__dirname, "./index.js")
});


console.log(map.toString());