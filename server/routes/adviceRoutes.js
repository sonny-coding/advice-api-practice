import express from "express";
import fetch from "node-fetch";
// Since fetch is a web API, you will not be able to use it on server code. Although there is an npm package that can help to utilize the capabilities of fetch while writing Express code. It’s called node-fetch.

const router = express.Router();

router.route("/").get(async (_, res) => {
  try {
    const url = "https://api.adviceslip.com/advice";
    const options = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };
    const data = await fetch(url, options);
    const jsonData = await data.json();
    // console.log(jsonData);
    res.status(200).json(jsonData);
  } catch (error) {
    console.log(error);
    res.status(500).send(error || "Something went wrong");
  }
});

export default router;
