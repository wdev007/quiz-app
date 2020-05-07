export interface Question {
  category: string,
  type: "Multiple choice" | "True / False",
  difficulty: "Easy" | "Medium" | "Hard",
  question: string,
  correct_answer: string,
  incorrect_answers: string[];
}