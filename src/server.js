//express 및 morgan middleWare 부르는곳
import express from "express";
import morgan from "morgan";
import globalRouter from "./routers/globalRouter";
import userRouter from "./routers/userRouter";
import videoRouter from "./routers/videoRouter";


//port 설정
const PORT = 4000;

const app = express();
//만들어진 middleWare morgan
const logger = morgan("dev");

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use(logger); 
app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening)

