const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// The View Engine
app.set("view engine", "ejs");

// The Views Folder
app.set("views", path.join(__dirname, "views"));

// The Static Files
app.use(express.static(path.join(__dirname, "public")));

// The Home Route
app.get("/", (req, res) => {
    res.render("index", {
        title: "Developer Command Center"
    });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`); 
});