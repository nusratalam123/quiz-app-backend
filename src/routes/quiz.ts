import { Router } from "express";
import {
  createQuiz,
  getQuizzes,
  saveResult,
  updateQuiz,
  deleteQuiz
} from "../controllers/quizController";
import { auth } from "../middleware/auth";

const router = Router();

router.post("/", auth, createQuiz);
router.get("/", getQuizzes);
router.post("/", auth, saveResult);
// update Quiz
router.patch("/update/:id",auth, updateQuiz);

//delete Quiz
router.delete("/delete/:id",auth, deleteQuiz);

export default router;
