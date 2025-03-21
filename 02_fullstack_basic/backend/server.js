import express from "express";

const app = express();

const port = process.env.PORT || 3000;

app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "Joke 1",
      content: "First joke",
    },
    {
      id: 2,
      title: "Joke 2",
      content: "Second joke",
    },
    {
      id: 3,
      title: "Joke 3",
      content: "Third joke",
    },
    {
      id: 4,
      title: "Joke 4",
      content: "Fourth joke",
    },
    {
      id: 5,
      title: "Joke 5",
      content: "Fifth joke",
    },
  ];
  res.send(jokes);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
