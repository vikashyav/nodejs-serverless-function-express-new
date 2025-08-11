import express from "express";
import serverless from "serverless-http";

const app = express();
app.use(express.json());

let items = [];

// Routes ...
app.get("/", ((req, res) => {
	const data = "This is base {/index} API. Use the respective routing-API to begin.";
	return res.status(200).send(data);
}));
app.get("/api/items", (req, res) => {
  res.json({ items });
});

app.post("/api/items", (req, res) => {
  const item = req.body;
  items.push(item);
  res.status(201).json({ message: "Item added", item });
});

app.get("/api/items/:id", (req, res) => {
  const item = items[parseInt(req.params.id)];
  if (!item) return res.status(404).json({ message: "Item not found" });
  res.json(item);
});

app.delete("/api/items/:id", (req, res) => {
  items = items.filter((_, i) => i !== parseInt(req.params.id));
  res.json({ message: "Item deleted" });
});

// Export handler for Vercel
export default serverless(app);
