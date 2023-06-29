const express = require("express");
const axios = require("axios");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Handle POST request to generate story completion
app.post("/complete-story", async (req, res) => {
  const { story } = req.body;

  try {
    const response = await axios.post(
      "https://api.openai.com/v1/engines/davinci-codex/completions",
      {
        prompt: story,
        max_tokens: 100,
        temperature: 0.6,
      },
      {
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer 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", // Replace with your OpenAI API key
        },
      }
    );

    const completion = response.data.choices[0].text.trim();
    res.json({ completion });
  } catch (error) {
    console.error("Error completing the story:", error);
    res
      .status(500)
      .json({ error: "An error occurred while completing the story." });
  }
});

// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
