'use client';

import { createForm, publishForm } from '~/actions/form.actions';
import { Button } from '~/components/ui/button';

import type { ElementsType } from './interfaces/FormElements';

const Tempcreate = () => {
  const makeForm = async () => {
    const formData = {
      title: 'New form',
      description: 'this is a from',
      onSubmitMessage: 'Your response has been recorded.',
      isEditingAllowed: true,
      isSingleResponse: true,
      isViewAnalyticsAllowed: false,
      isShuffled: false,
      isCopySent: false,
      isAnonymous: false,
      isQuiz: false,
    };
    const questions = [
      {
        Id: '6115',
        question: 'Multi Select Field',
        inputType: 'MultiSelectField' as ElementsType,
        isRequired: false,
        pageNumber: 0,
        marks: 0,
        description: '',
        choices: ['first choice', 'second choice', 'third great choice'],
      },
      {
        Id: '7224',
        question: 'Number Field',
        inputType: 'NumberField' as ElementsType,
        isRequired: false,
        pageNumber: 0,
        marks: 0,
      },
      {
        Id: '2724',
        question: 'Date Field',
        inputType: 'DateField' as ElementsType,
        isRequired: false,
        pageNumber: 0,
        marks: 0,
        description: '',
        formatMaximum: '2024-02-03',
        formatMinimum: '2002-12-01',
      },
      {
        Id: '1140',
        question: 'Date-Time Field',
        inputType: 'DateTimeField' as ElementsType,
        isRequired: false,
        pageNumber: 1,
        marks: 0,
        description: '',
        formatMaximum: '2025-02-02T03:03:00Z',
        formatMinimum: '2024-01-01T02:02:00Z',
      },
    ];
    const formId = await createForm({
      title: 'New form',
      description: 'this is a from',
      isEditable: true,
    });
    console.log('sdfdsf');
    await publishForm({ ...formData }, formId, questions);
  };
  return <Button onClick={makeForm}>Create form</Button>;
};
export default Tempcreate;
