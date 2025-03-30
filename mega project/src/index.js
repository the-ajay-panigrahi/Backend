// require("dotenv").config({ path: "../env" });
import "dotenv/config";
import connectDB from "./db/index.js";
import { app } from "./app.js";

const port = process.env.PORT || 3000;

connectDB()
  .then(() => {
    app.on("error", () => {
      console.log("Error: ", error);
      throw new error(error);
    });

    app.listen(port, () => {
      console.log(`Server is running at port ${port}`);
    });
  })
  .catch((error) => {
    console.log("MONGODB connection Failed!! ", error);
  });
