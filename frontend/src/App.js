import React, { useState } from "react";
import axios from "axios";

function App() {
  const [story, setStory] = useState("");
  const [completion, setCompletion] = useState("");

  const handleGenerateStory = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/complete-story",
        { story }
      );
      const { completion } = response.data;
      setCompletion(completion);
    } catch (error) {
      console.error("Error generating the story:", error);
    }
  };

  return (
    <div className="App">
      <h1>Story Generator</h1>
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
    </div>
  );
}

export default App;
