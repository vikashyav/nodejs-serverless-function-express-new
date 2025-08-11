import express from "express";

// Create the express app
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("This is base {/index} API. Use the respective routing-API to begin.");
});

app.get("/test", (req, res) => {
  res.status(200).send("This is base {/test} API. Use the respective routing-API to begin.");
});

let items = [{
  message:"testing"
}];

// Routes
app.get("/api/items", (req, res) => {
  res.json({ items });
});
// ✅ Export the express instance as a function for Vercel
export default (req, res) => {
  return app(req, res);
};
