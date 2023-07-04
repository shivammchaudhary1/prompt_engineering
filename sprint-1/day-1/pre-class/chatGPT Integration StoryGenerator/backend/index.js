const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());
const { Configuration, OpenAIApi } = require("openai");
require("dotenv").config();
const configuration = new Configuration({
  apiKey: process.env.MY_OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

app.post("/generate", async (req, res) => {
  const type = req.query.type;
  const keyword = req.body.keyword;
  let completion_text = `Act as an expert Story generator. The user will provide you a keyword as an input, and you have to generate a Story in English.`;

  const messages = [
    { role: "user", content: keyword },
    { role: "assistant", content: completion_text },
  ];

  try {
    if (!keyword) throw new Error("No input is provided");

    const completion = await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: messages,
    });

    const generatedStory = completion.data.choices[0].message.content.trim();
    res.send(JSON.stringify(generatedStory));
  } catch (error) {
    console.log(error);
    res.send("Something went wrong!!!");
  }
});

app.listen(8080, () => {
  console.log("Running on port 8080");
});
