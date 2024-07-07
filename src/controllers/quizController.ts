// src/controllers/quizController.ts
import { Request, Response } from "express";
import Quiz from "../models/Quiz";

export const createQuiz = async (req: Request, res: Response) => {
  const { title, questions } = req.body;
  try {
    const newQuiz = new Quiz({ title, questions });
    await newQuiz.save();
    res.status(201).json(newQuiz);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const getQuizzes = async (req: Request, res: Response) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

export const saveResult = async (req: Request, res: Response) => {
  try {
    const quizzes = await Quiz.find();
    res.status(200).json(quizzes);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server error");
  }
};

// update Quiz
export const updateQuiz = async (req: Request, res: Response) => {
  try {
    const quiz=await Quiz.findByIdAndUpdate(req.params.id, req.body);

    res.status(200).json({
      message: "Quiz updated successfully",
      data:quiz,
    });
  } catch (err: any) {
    res.status(400).json({
      message: err.message,
    });
  }
};

// delete Quiz
export const deleteQuiz = async (req: Request, res: Response) => {
  try {
    await Quiz.findByIdAndDelete(req.params.id);

    res.status(200).json({
      message: "Quiz Deleted Successfully",
    });
  } catch (err: any) {
    res.status(400).json({
      message: err.message,
    });
  }
};
