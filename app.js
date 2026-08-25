const express = require("express");
const path = require("path");
const homeRoutes = require("./routes/homeRoutes");
const projectRoutes = require("./routes/projectRoutes");
const contactRoutes = require("./routes/contactRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing request bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// The View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// The Static Files
app.use(express.static(path.join(__dirname, "public")));

// Routes
app.use("/", homeRoutes);
app.use("/projects", projectRoutes);
app.use("/contact", contactRoutes);

app.listen(PORT, () => {
    console.log(`Command Center live at http://localhost:${PORT}`);
});
