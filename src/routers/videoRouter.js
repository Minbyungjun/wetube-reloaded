import express from "express";
import { see, edit, upload, deleteVideo } from "../controllers/videoController";


const videoRouter = express.Router();


videoRouter.get("/upload", upload);
//변수값(:id)을 숫자로 받아오는거 \\d+ d 는 digit을 뜻한다.
videoRouter.get("/:id(\\d+)", see);
videoRouter.get("/:id(\\d+)/edit", edit);
videoRouter.get("/:id(\\d+)/delete", deleteVideo);

export default videoRouter;