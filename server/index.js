const path = require('path');
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.static(path.resolve(__dirname, '../client/build', 'index.html')));

app.get("/api", (req, res) => {
    res.json({
        message: "Hello from server ! All is good"
    });
});
app.get('*', (req, res) => {
    res.sendFile(path.relative(__dirname, '../client/build', 'index.html'));
});
app.listen(PORT, () => {
    console.log(`server listening on ${PORT}`);
})