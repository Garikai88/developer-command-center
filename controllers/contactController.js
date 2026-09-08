const { sendContactEmail } = require("../utils/mailer");
const { createContact } = require("../models/Contact");

exports.getContactPage = (req, res) => {
    res.render("contact", {
        title: "Initiate Contact"
    });
};

exports.submitContactForm = async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).render("contact", {
            title: "Initiate Contact",
            error: "All fields are required. Transmission incomplete.",
            values: { name, email, message }
        });
    }

    try {
        await createContact({ name, email, message });
        await sendContactEmail({ name, email, message });

        res.render("contact", {
            title: "Initiate Contact",
            success: "Message transmitted successfully. Standby for response."
        });
    } catch (err) {
        console.error("Contact submission failed:", err);
        res.status(500).render("contact", {
            title: "Initiate Contact",
            error: "Transmission failed. Please try again later.",
            values: { name, email, message }
        });
    }
};
