'use client';

import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useEffect } from 'react';

import { form_questions, forms } from '@/prisma/generated/client';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { idGenerator } from '@/lib/idGenerator';
import {
  ElementsType,
  FormElementInstance,
} from '@/components/forms/interfaces/FormElements';

import PreviewDialogBtn from './buttons/PreviewDialogBtn';
import SaveFormBtn from './buttons/SaveFormBtn';
import PublishFormBtn from './buttons/PublishFormBtn';
import FormEditArea from './FormEditArea';
import DragOverlayWrapper from './DragOverlayWrapper';
import useDragDrop from '../hooks/useDragDrop';

function FormBuilder({
  form,
  questions,
}: {
  form: forms;
  questions: form_questions[];
}) {
  const { setIsQuiz, is_quiz, setElements, setPages } = useDragDrop();
  useEffect(() => {
    setIsQuiz(form.is_quiz);
    if (questions.length === 0) return;
    const groupedQuestions: FormElementInstance[][] = [];
    questions.sort((a, b) => a.page_number - b.page_number);

    for (let i = 0; i < questions.length; i++) {
      const question = questions[i];
      const page = ~~question.page_number;

      if (!groupedQuestions[page]) {
        groupedQuestions[page] = [];
      }

      const questionWithId = {
        ...question,
        Id: idGenerator(),
        description: question.description || undefined,
        input_type: question.input_type as ElementsType,
        page_number: page,
      };
      groupedQuestions[page].push(questionWithId);
    }
    setPages(groupedQuestions.length);
    setElements(groupedQuestions);
  }, []);
  const mouseSensor = useSensor(MouseSensor, {
    activationConstraint: {
      distance: 10, // 10px
    },
  });

  const touchSensor = useSensor(TouchSensor, {
    activationConstraint: {
      delay: 300,
      tolerance: 5,
    },
  });
  const sensors = useSensors(mouseSensor, touchSensor);
  return (
    <DndContext id={'unique-dnd-id'} sensors={sensors}>
      <main className="flex h-[100vh] w-full flex-col ">
        <div className="flex flex-col items-center justify-between gap-3 border-b-2 p-4 md:flex-row">
          <h2 className="truncate font-medium">
            <span className="text-muted-foreground mr-2">Form:</span>
            {form.title}
          </h2>
          <div className="flex flex-wrap items-center gap-2 ">
            <div>
              <Switch
                id={'switch'}
                checked={is_quiz}
                onCheckedChange={(checked) => {
                  setIsQuiz(checked);
                }}
              />
              <Label htmlFor="switch">Quiz</Label>
            </div>
            <PreviewDialogBtn />
            {!form.is_published && (
              <>
                <SaveFormBtn id={form.id} />
                <PublishFormBtn form={form} />
              </>
            )}
          </div>
        </div>
        <div className="bg-muted relative flex h-[200px] w-full grow items-center justify-center overflow-y-auto">
          <FormEditArea />
        </div>
      </main>
      <DragOverlayWrapper />
    </DndContext>
  );
}
export default FormBuilder;