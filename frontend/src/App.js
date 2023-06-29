import React, { useState } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [story, setStory] = useState("");
  const [completion, setCompletion] = useState("");
  const [error, setError] = useState("");

  const handleGenerateStory = async () => {
    try {
      const response = await axios.post("http://localhost:4500/", {
        prompt: story,
      });

      const generatedStory = response.data.completion;
      setCompletion(generatedStory);
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
