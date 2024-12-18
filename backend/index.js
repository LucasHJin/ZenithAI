const express = require("express");
const { MongoClient } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 4000;

const cors = require("cors");

app.use(cors({
    origin: "http://localhost:5173" // CHANGE LATER ON TO ACTUAL URL
}));

app.use(express.json());

const client = new MongoClient(process.env.MONGO_URI);

// Connect to MongoDB
client.connect()
  .then(() => {
    console.log("MongoDB connected successfully!");
  })
  .catch((err) => {
    console.error("MongoDB connection failed:", err);
  });

const db = client.db("studies_db");
const studiesCollection = db.collection("studies");

// Write study route
app.post("/api/studies", async (req, res) => {
    const { title, authors, abstract, publishDate, source, volume, issue, doi, 
        sections, references, tags } = req.body;

  if (!title) {
    return res.status(400).json({ error: "'title' is required" });
  }

  const date = new Date().toISOString().split("T")[0];
  const sanitizedTitle = title.replace(/[^a-zA-Z0-9-_']/g, "_").replace(/'/g, "");
  const id = `${date}_${sanitizedTitle}`;

  try {
    const result = await studiesCollection.insertOne({
        id,
        title,
        authors,
        abstract,
        publishDate,
        source,
        volume,
        issue,
        doi,
        sections,
        references,
        tags,
        createdAt: new Date(),
      });
    res.status(201).json({ message: "Study added successfully", id });
  } catch (error) {
    console.error("Error adding study:", error);
    res.status(500).json({ error: "Error adding study" });
  }
});

// Pageination Route (TO REDO, DOES NOT WORK RIGHT NOW)
app.get("/api/studies", async (req, res) => {
  const batchSize = parseInt(req.query.batchSize) || 20;
  const pageNumber = parseInt(req.query.page) || 1;
  const offset = (pageNumber - 1) * batchSize;

  try {
    const studies = await studiesCollection
      .find()
      .sort({ createdAt: -1 })
      .skip(offset)
      .limit(batchSize)
      .toArray();

    res.json({ studies });
  } catch (error) {
    console.error("Error fetching studies:", error);
    res.status(500).json({ error: "Error fetching studies" });
  }
});

// Total studies route
app.get("/api/studies/count", async (req, res) => {
  try {
    const count = await studiesCollection.countDocuments();
    res.json({ total: count });
  } catch (error) {
    console.error("Error fetching study count:", error);
    res.status(500).json({ error: "Error fetching study count" });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
