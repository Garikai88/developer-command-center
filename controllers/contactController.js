exports.getContactPage = (req, res) => {
    res.render("contact", {
        title: "Initiate Contact"
    });
};

exports.submitContactForm = (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).render("contact", {
            title:"Initiate Contact",
            error: "All fields are required. Transmission incomplete.",
            values: { name, email, message }
        });
    }

    // TODO : send email (nodemailer) or save to DB via model
    console.log("New transmission recieved:", { name, email, message});

    res.render("contact", {
        title: "Initiate Contact",
        success: "Message transmitted successfully. Standby for response."
    });
};
