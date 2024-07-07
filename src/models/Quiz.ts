
import mongoose, { Document, Schema } from "mongoose";

export interface IQuiz extends Document {
  title: string;
  questions: { question: string; options: string[]; answer: string }[];
}

const QuizSchema: Schema = new Schema({
  title: { type: String, required: true },
  questions: [
    {
      question: { type: String, required: true },
      options: [{ type: String, required: true }],
      answer: { type: String, required: true },
    },
  ],
});

export default mongoose.model<IQuiz>("Quiz", QuizSchema);
