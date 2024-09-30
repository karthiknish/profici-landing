import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message, phone, companyOrWebsite, packages } =
      req.body;

    let client;
    try {
      console.log("MONGODB_URI:", process.env.MONGODB_URI);
      // Connect to MongoDB
      client = new MongoClient(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      await client.connect();

      const db = client.db("Profici");
      const collection = db.collection("Websites");

      // Insert form data into MongoDB
      await collection.insertOne({
        name,
        email,
        message,
        phone,
        companyOrWebsite,
        packages,
        createdAt: new Date(),
      });

      res.status(200).json({ message: "Form submitted successfully" });
    } catch (error) {
      console.error("Error submitting form:", error);

      res.status(500).json({
        message:
          "An error occurred while submitting the form. Please try again later.",
      });
    } finally {
      // Close MongoDB connection
      if (client) {
        await client.close();
      }
    }
  } else {
    res.setHeader("Allow", ["POST"]);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
