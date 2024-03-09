'use client';

import { useContext } from 'react';

import { DragDropContext } from '../context/DragDropContext';

export default function useDragDrop() {
  const context = useContext(DragDropContext);

  if (!context) {
    throw new Error('useDragDrop must be used within a DragDropContext');
  }

  return context;
}
