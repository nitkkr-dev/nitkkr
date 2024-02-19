export enum ExamType {
  MidTerm1,
  MidTerm2,
  MidTerm3,
  EndTerm,
}

export interface QuestionPaperProps {
  attempt_any: number;
  course: { code: string; name: string };
  date: Date;
  exam: ExamType;
  programme: string;
  questions: {
    text: string;
    prompt: string;
    image: string;
    marks: number | string;
  }[][][];
  semester: number;
  time_alloted: string;
}

export function QuestionPaper({ data }: { data: QuestionPaperProps }) {
  return <h1>Hello, world!</h1>;
}

export default QuestionPaper;
