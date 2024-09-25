import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    try {
      // Connect to MongoDB
      const client = await MongoClient.connect(process.env.MONGODB_URI);
      const db = client.db("your_database_name");
      const collection = db.collection("form_submissions");

      // Insert form data into MongoDB
      await collection.insertOne({ name, email, message });

      // Close MongoDB connection
      await client.close();

      // Send email notification
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: process.env.EMAIL_USER,
        to: "karthik@profici.co.uk",
        subject: "New Form Submission",
        text: `
          New form submission:
          Name: ${name}
          Email: ${email}
          Message: ${message}
        `,
      });

      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error submitting form:", error);
      res
        .status(500)
        .json({ message: "An error occurred while submitting the form" });
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
