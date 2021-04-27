const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());

app.use("/getDatas", async (req, res) => {


    console.log("api: getDatas",  new Date().toLocaleTimeString());

    const startTime  = new Date();
    await sleep(3000);
    const endTime = new Date();
    res.json({
        errCode:0,
        data: {
            startTime: startTime.toLocaleString(),
            endTIme: endTime.toLocaleString(),
            cost: `${endTime - startTime}ms`  
        }
    })
});

app.listen(9001, () => {
    console.log("listen 9001");
});

function sleep(duration = 1000) {
    return new Promise(resolve => {
        setTimeout(resolve, duration)
    });
}