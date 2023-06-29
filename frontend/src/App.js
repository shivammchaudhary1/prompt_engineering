import React, { useState } from "react";
import "./App.css";

function App() {
  const [story, setStory] = useState("");
  const [completion, setCompletion] = useState("");
  const [error, setError] = useState("");

  const handleGenerateStory = async () => {
    console.log(
      `I Wanna Create a story of about 400-700 words for a 5 year to 12 years children .The Initial Story lines are "${story}" , Please Complete my Story as per your understanding.`
    );
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
