'use client';

import {
  createContext,
  type Dispatch,
  type ReactNode,
  type SetStateAction,
  useState,
} from 'react';

import { type FormElementInstance } from '~/components/forms/interfaces/FormElements';

interface DragDropContextType {
  setElements: Dispatch<SetStateAction<FormElementInstance[][]>>;
  elements: FormElementInstance[][];
  is_quiz: boolean;
  setIsQuiz: Dispatch<SetStateAction<boolean>>;
  addElement: (
    index: number,
    page: number,
    element: FormElementInstance
  ) => void;
  removeElement: (Id: string, page: number) => void;
  pages: number;
  setPages: Dispatch<SetStateAction<number>>;
  addPage: () => void;
  removePage: () => void;

  selectedElement: FormElementInstance | null;
  setSelectedElement: Dispatch<SetStateAction<FormElementInstance | null>>;

  updateElement: (
    Id: string,
    page: number,
    element: FormElementInstance
  ) => void;
}

export const DragDropContext = createContext<DragDropContextType | null>(null);

export default function DragDropContextProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [is_quiz, setIsQuiz] = useState<boolean>(false);
  const [elements, setElements] = useState<FormElementInstance[][]>([[]]);
  const [pages, setPages] = useState<number>(1);
  const [selectedElement, setSelectedElement] =
    useState<FormElementInstance | null>(null);

  const addElement = (
    index: number,
    page: number,
    element: FormElementInstance
  ) => {
    setElements((prev) => {
      const newElements = [...prev];
      newElements[page] = [...prev[page]];
      newElements[page].splice(index, 0, element);
      return newElements;
    });
  };
  const removeElement = (Id: string, page: number) => {
    console.log('removing', Id, 'from', page);
    setElements((prev) => {
      const newElements = [...prev];
      newElements[page] = prev[page].filter((element) => element.Id !== Id);
      return newElements;
    });
  };

  const addPage = () => {
    setPages((prev) => prev + 1);
    setElements((prev) => {
      return [...prev, []];
    });
  };
  const removePage = () => {
    setPages((prev) => prev - 1);
    setElements((prev) => {
      const newElements = [...prev];
      newElements.pop();
      return newElements;
    });
  };

  const updateElement = (
    Id: string,
    page: number,
    element: FormElementInstance
  ) => {
    setElements((prev) => {
      const newElements = [...prev];
      const index = newElements[page].findIndex((el) => el.Id === Id);
      newElements[page][index] = element;
      return newElements;
    });
  };

  return (
    <DragDropContext.Provider
      value={{
        setElements,
        elements,
        is_quiz,
        setIsQuiz,
        addElement,
        removeElement,
        pages,
        setPages,
        addPage,
        removePage,
        selectedElement,
        setSelectedElement,
        updateElement,
      }}
    >
      {children}
    </DragDropContext.Provider>
  );
}
