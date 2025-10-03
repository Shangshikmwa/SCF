import express from "express";
import Form from "../model/schema.js";

const router = express.Router();

router.post("/", async (req, res) => {
  try {
    const { firstName, lastName, email, message } = req.body;

    if (!firstName || !lastName || !email) {
      return res.status(400).json({ error: "First name, last name, and email are required." });
    }

    const newForm = new Form({
      firstName,
      lastName,
      email,
      message,
    });

    await newForm.save();

    res.status(201).json({ message: "Form submitted successfully!", data: newForm });
  } catch (error) {
    console.error("Error saving form:", error);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});

export default router;
