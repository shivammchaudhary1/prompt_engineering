import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [story, setStory] = useState("");
  const [completion, setCompletion] = useState("");
  const [error, setError] = useState("");

  const handleGenerateStory = async () => {
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
      setCompletion(completion);
      setError("");
    } catch (error) {
      console.error("Error generating the story:", error);
      setCompletion("");
      setError("An error occurred while generating the story.");
    }
  };

  return (
    <div className="App">
      <h1>Story Generator</h1>
      <h2>I can Complete Your Story</h2>
      <div>
        <textarea
          placeholder="Enter the initial story..."
          value={story}
          onChange={(e) => setStory(e.target.value)}
        ></textarea>
      </div>
      <button onClick={handleGenerateStory}>Generate</button>
      {completion && (
        <div>
          <h2>Completed Story:</h2>
          <p>{completion}</p>
        </div>
      )}
      {error && (
        <div>
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
}

export default App;
