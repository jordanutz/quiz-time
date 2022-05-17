type Question = {
    category: string;
    correct_answer: string;
    difficulty: string;
    incorrect_answers: string[];
    qeustion: string;
    type: string;
}

export interface StateProps {
    currentIndex: number;
    error?: string;
    initialized: boolean;
    isCorrect: boolean
    options: string[];
    questions: Question[];
    score: number;
    restart: boolean;
 };