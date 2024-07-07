import { Router } from "express";
import {
  createQuiz,
  getQuizzes,
  saveResult
} from "../controllers/quizController";
import { auth } from "../middleware/auth";

const router = Router();

router.post("/", auth, createQuiz);
router.get("/", getQuizzes);
router.post("/", auth,saveResult);

export default router;
