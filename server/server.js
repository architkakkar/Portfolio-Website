const express = require("express");
const cors = require("cors");
const admin = require("firebase-admin");
const db = require("./firebaseAdmin");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());
app.use(
  cors({
    origin: ["https://architkakkar.vercel.app"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("Backend is up and running.");
});

app.post("/api/v1/contact", async (req, res) => {
  const { email, message } = req.body;

  try {
    const docRef = await db.collection("messages").add({
      email: email,
      message: message,
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    });

    res.status(200).send("Message sent.");
  } catch (error) {
    console.error("Error adding document: ", error);
    res.status(500).send("Error adding document");
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
