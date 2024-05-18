import { initServer } from "./app/index";
import * as dotenv from "dotenv";

dotenv.config();

const init = async () => {
  const app = await initServer();
  app.listen(process.env.PORT, () =>
    console.log(`server started on port ${process.env.PORT}`)
  );
};

init();
