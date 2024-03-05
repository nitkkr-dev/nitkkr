'use client';

import {
  DndContext,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
} from '@dnd-kit/core';
import { useEffect } from 'react';

import { type forms } from '~/prisma/generated/client';
import { Switch } from '~/components/ui/switch';
import { Label } from '~/components/ui/label';
import type { FormElementInstance } from '~/components/forms/interfaces/FormElements';

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
  questions: FormElementInstance[][];
}) {
  const { setIsQuiz, is_quiz, setElements, setPages } = useDragDrop();
  useEffect(() => {
    setIsQuiz(form.is_quiz);
    if (questions.length === 0) return;
    setPages(questions.length);
    setElements(questions);
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
