import { MongoClient } from "mongodb";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { name, email, message } = req.body;

    if (!process.env.MONGODB_URI) {
      console.error("MONGODB_URI is not defined in the environment variables");
      return res.status(500).json({ message: "Server configuration error" });
    }

    try {
      // Connect to MongoDB
      const client = await MongoClient.connect(process.env.MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      });
      const db = client.db("Profici");
      const collection = db.collection("Websites");

      // Insert form data into MongoDB
      await collection.insertOne({ name, email, message });

      // Close MongoDB connection
      await client.close();

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
