const express = require("express");
const cors = require("cors");
const sendEmail = require("./mailer");

const app = express();

const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Middleware to handle CORS
app.use(cors());

// Route to handle form submissions
app.post("/submit-form", async (req, res) => {
  const { email, message } = req.body;

  try {
    // Send confirmation email
    await sendEmail(
      "business.architkakkar@gmail.com", // to
      "Contact Form - From Personal Website", // subject
      `[${email}] has submitted the contact form.
      \n\nMessage: "${message}".
      \n\nPlease check and revert.
      \n\nRegards,
      \nBot` // message
    );

    res.send("Form data received and email sent.");
  } catch (error) {
    console.error("Error processing form submission:", error);
    res.status(500).send("Error processing form submission.");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
