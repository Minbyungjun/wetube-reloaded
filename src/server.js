//express 및 morgan middleWare 부르는곳
import express from "express";
import morgan from "morgan";

//port 설정
const PORT = 4000;

const app = express();
//만들어진 middleWare morgan
const logger = morgan("dev");
app.use(logger); 

// 라우터 만드는 곳
const globalRouter = express.Router();

const handleHome = (req, res) => res.send("Home");

globalRouter.get("/", handleHome);

const userRouter = express.Router();

const handleEditUser = (req, res) => res.send("Edit User");

userRouter.get("/edit", handleEditUser);

const videoRouter = express.Router();

const handleWatchVideo = (req,res) => res.send("Watch Video");

videoRouter.get("/watch", handleWatchVideo);

app.use("/", globalRouter);
app.use("/users", userRouter);
app.use("/videos", videoRouter);

const handleListening = () => console.log(`Server listening on port http://localhost:${PORT}`);

app.listen(PORT, handleListening)

