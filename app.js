const express = require("express");
const path = require("path");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// The View Engine
app.set("view engine", "ejs");

// The Views Folder
app.set("view engine", "ejs");
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
    console.log(`Command Center live at http://localhost:${PORT}`); 
});