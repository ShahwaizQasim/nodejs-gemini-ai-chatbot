import app from "./src/app.js";
import { ENV } from "./src/config/constant.js";

const PORT = ENV.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log(`Server running on port ${ENV.PORT}`);
});
