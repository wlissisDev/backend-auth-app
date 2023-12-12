import express from "express";
import { routes } from "./routers/UserRoute";

const app = express();
app.use(express.json());
app.use(routes)

app.listen(process.env.PORT || 8000,()=> console.log(`server is running`));