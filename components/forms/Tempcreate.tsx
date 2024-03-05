'use client';

import { CreateForm, PublishForm } from '~/actions/form.actions';
import { Button } from '~/components/ui/button';

import type { ElementsType } from './interfaces/FormElements';
const formData = {
  title: 'New form',
  description: 'this is a from',
  on_submit_message: 'Your response has been recorded.',
  is_editing_allowed: true,
  is_single_response: true,
  is_view_analytics_allowed: false,
  is_shuffled: false,
  is_copy_sent: false,
  is_anonymous: false,
  is_quiz: false,
};
const questions = [
  {
    Id: '6115',
    question: 'Multi Select Field',
    input_type: 'MultiSelectField' as ElementsType,
    is_required: false,
    page_number: 0,
    marks: 0,
    description: '',
    choices: ['first choice', 'second choice', 'third great choice'],
  },
  {
    Id: '7224',
    question: 'Number Field',
    input_type: 'NumberField' as ElementsType,
    is_required: false,
    page_number: 0,
    marks: 0,
  },
  {
    Id: '2724',
    question: 'Date Field',
    input_type: 'DateField' as ElementsType,
    is_required: false,
    page_number: 0,
    marks: 0,
    description: '',
    formatMaximum: '2024-02-03',
    formatMinimum: '2002-12-01',
  },
  {
    Id: '1140',
    question: 'Date-Time Field',
    input_type: 'DateTimeField' as ElementsType,
    is_required: false,
    page_number: 1,
    marks: 0,
    description: '',
    formatMaximum: '2025-02-02T03:03:00Z',
    formatMinimum: '2024-01-01T02:02:00Z',
  },
];

const Tempcreate = () => {
  const makeForm = async () => {
    const formId = await CreateForm({
      title: 'New form',
      description: 'this is a from',
      isEditable: true,
    });
    console.log(formId);
    await PublishForm({ ...formData }, formId, questions);
  };
  return <Button onClick={makeForm}>Create form</Button>;
};
export default Tempcreate;
