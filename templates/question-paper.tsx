import React from 'react';

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

const QuestionPaper: React.FC<{ data: QuestionPaperProps }> = ({ data }) => {
  return (
    <div>
      <h1>{data.course.name}</h1>
      <p>Date: {data.date.toLocaleDateString()}</p>
      <p>Exam Type: {ExamType[data.exam]}</p>
      <p>Programme: {data.programme}</p>
      <p>Semester: {data.semester}</p>
      <p>Time Alloted: {data.time_alloted}</p>
      <p>Questions:</p>
      <ul>
        {data.questions.map((section, sectionIndex) => (
          <li key={sectionIndex}>
            <h2>Section {sectionIndex + 1}</h2>
            <ul>
              {section.map((subsection, subIndex) => (
                <li key={subIndex}>
                  <h3>Subsection {subIndex + 1}</h3>
                  <ul>
                    {subsection.map((question, questionIndex) => (
                      <li key={questionIndex}>
                        <p>Question: {question.text}</p>
                        <p>Prompt: {question.prompt}</p>
                        <p>Image: {question.image}</p>
                        <p>Marks: {question.marks}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </div>
  );
};


export default QuestionPaper;
