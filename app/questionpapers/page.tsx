'use client';
import React, { useState } from 'react';

type QPaper = {
  Exam: string;
  Code: string;
  Subject: string;
  Duration: number;
  maxMarks: number;
  reAppear: boolean;
  Semester: number;
  Course: string;
};

const QuestionPaperForm: React.FC = () => {
  const [questionPaper, setQuestionPaper] = useState<QPaper>({
    Exam: '',
    Code: '',
    Subject: '',
    Duration: 0,
    maxMarks: 0,
    reAppear: false,
    Semester: 1,
    Course: '',
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = event.target;

    setQuestionPaper((prevQuestionPaper) => {
      if (type === 'checkbox') {
        return {
          ...prevQuestionPaper,
          [name]: (event.target as HTMLInputElement).checked,
        };
      }

      return {
        ...prevQuestionPaper,
        [name]: value,
      };
    });
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    // work with the submitted questionPaper object
    console.log('Submitted Question Paper:', questionPaper);

    // send the data to the server
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="grid grid-cols-1 gap-4 max-w-md mx-auto"
    >
      <div>
        <label className="flex flex-col space-y-2">
          <span>Exam:</span>
          <input
            type="text"
            name="Exam"
            placeholder="Enter Exam"
            value={questionPaper.Exam}
            onChange={handleInputChange}
            className="p-2 border rounded text-black"
          />
        </label>

        <label className="flex flex-col space-y-2">
          <span>Code:</span>
          <input
            type="text"
            name="Code"
            placeholder="Enter Code"
            value={questionPaper.Code}
            onChange={handleInputChange}
            className="p-2 border rounded text-black"
          />
        </label>

        <label className="flex flex-col space-y-2">
          <span>Subject:</span>
          <input
            type="text"
            name="Subject"
            placeholder="Enter Subject"
            value={questionPaper.Subject}
            onChange={handleInputChange}
            className="p-2 border rounded text-black"
          />
        </label>

        <label className="flex flex-col space-y-2">
          <span>Duration (hours):</span>
          <input
            type="number"
            name="Duration"
            placeholder="Enter Duration"
            value={questionPaper.Duration}
            onChange={handleInputChange}
            className="p-2 border rounded text-black"
            min="0"
          />
        </label>

        <label className="flex flex-col space-y-2">
          <span>Max Marks:</span>
          <input
            type="number"
            name="maxMarks"
            placeholder="Enter Max Marks"
            value={questionPaper.maxMarks}
            onChange={handleInputChange}
            className="p-2 border rounded text-black"
            min="0"
          />
        </label>

        <label className="flex items-center space-x-2">
          <span>Reappear:</span>
          <input
            type="checkbox"
            name="reAppear"
            checked={questionPaper.reAppear}
            onChange={handleInputChange}
            className="form-checkbox h-5 w-5 text-blue-600 focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 rounded-md"
          />
        </label>

        <label className="flex flex-col space-y-2">
          <span>Semester:</span>
          <input
            type="number"
            name="Semester"
            placeholder="Enter Semester"
            value={questionPaper.Semester}
            onChange={handleInputChange}
            className="p-2 border rounded text-black"
            min="1"
          />
        </label>

        <label className="flex flex-col space-y-2">
          <span>Course:</span>
          <input
            type="text"
            name="Course"
            placeholder="Enter Course"
            value={questionPaper.Course}
            onChange={handleInputChange}
            className="p-2 border rounded text-black"
          />
        </label>

        <label className="flex flex-col space-y-2">
          <span>Upload File:</span>
          <input
            type="file"
            name="file"
            onChange={(e) => console.log(e.target.files)}
            className="p-2 border rounded text-black"
          />
        </label>
      </div>

      <button
        type="submit"
        className="grid grid-cols-1 gap-4 max-w-md mx-auto mb-4"
        onClick={handleSubmit}
      >
        Submit
      </button>
    </form>
  );
};

export default QuestionPaperForm;
