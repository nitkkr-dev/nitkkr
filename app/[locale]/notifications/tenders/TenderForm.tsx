'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaFilePdf, FaTrash, FaUpload } from 'react-icons/fa';

import { Button } from '~/components/buttons';
import { Input, Textarea } from '~/components/inputs';
import {
  createTenderAction,
  type TenderFormData,
  type TenderWithStatus,
  updateTenderAction,
  uploadTenderDocument,
} from '~/server/actions/tenders';
import type { TendersTranslations } from '~/i18n/translate/tenders';
import type { TenderDocument } from '~/server/db/schema/tenders.schema';

interface TenderFormProps {
  locale: string;
  /** If provided, the form is in edit mode */
  tender?: TenderWithStatus;
  text: TendersTranslations;
}

export function TenderForm({ locale, tender, text }: TenderFormProps) {
  const router = useRouter();
  const isEditing = !!tender;
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Form state
  const [title, setTitle] = useState(tender?.title ?? '');
  const [description, setDescription] = useState(tender?.description ?? '');
  const [startDate, setStartDate] = useState(() => {
    if (tender?.startDate) {
      return new Date(tender.startDate).toISOString().split('T')[0];
    }
    return new Date().toISOString().split('T')[0];
  });
  const [endDate, setEndDate] = useState(() => {
    if (tender?.endDate) {
      return new Date(tender.endDate).toISOString().split('T')[0];
    }
    return '';
  });
  const [extendedDate, setExtendedDate] = useState(() => {
    if (tender?.extendedDate) {
      return new Date(tender.extendedDate).toISOString().split('T')[0];
    }
    return '';
  });
  const [documents, setDocuments] = useState<TenderDocument[]>(
    tender?.documents ?? []
  );
  const [editingDocIndex, setEditingDocIndex] = useState<number | null>(null);
  const [editingDocName, setEditingDocName] = useState<string>('');

  // UI state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setIsUploading(true);
    setError(null);

    try {
      const file = files[0];
      const formData = new FormData();
      formData.append('file', file);

      const result = await uploadTenderDocument(formData);

      if (result.success && result.url) {
        const fileName = file.name.replace(/\.[^/.]+$/, ''); // Remove extension
        const newDocument: TenderDocument = {
          url: result.url,
          name: fileName,
        };
        setDocuments([...documents, newDocument]);
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Failed to upload file:', err);
      setError('Failed to upload file');
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  const handleRemoveDocument = (index: number) => {
    setDocuments(documents.filter((_, i) => i !== index));
    setEditingDocIndex(null);
  };

  const startEditingDocument = (index: number) => {
    setEditingDocIndex(index);
    setEditingDocName(documents[index].name);
  };

  const saveDocumentName = (index: number) => {
    const updatedDocuments = [...documents];
    updatedDocuments[index].name = editingDocName;
    setDocuments(updatedDocuments);
    setEditingDocIndex(null);
  };

  const validateForm = (): string | null => {
    if (!title.trim()) {
      return text.validation.titleRequired;
    }
    if (!startDate) {
      return text.validation.startDateRequired;
    }
    if (!endDate) {
      return text.validation.endDateRequired;
    }
    if (new Date(endDate) <= new Date(startDate)) {
      return text.validation.endDateAfterStart;
    }
    if (extendedDate && new Date(extendedDate) <= new Date(endDate)) {
      return text.validation.extendedDateAfterEnd;
    }
    return null;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const validationError = validateForm();
    if (validationError) {
      setError(validationError);
      return;
    }

    setIsSubmitting(true);

    const data: TenderFormData = {
      title: title.trim(),
      description: description.trim() || undefined,
      documents,
      startDate,
      endDate,
      extendedDate: extendedDate || null,
    };

    try {
      const result = isEditing
        ? await updateTenderAction(tender.id, data)
        : await createTenderAction(data);

      if (result.success) {
        router.push(`/${locale}/notifications/tenders`);
        router.refresh();
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Failed to save tender:', err);
      setError('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {error && (
        <div className="bg-red-50 text-red-700 rounded-md p-3 text-sm">
          {error}
        </div>
      )}

      {/* Title */}
      <div className="space-y-2">
        <label
          htmlFor="tender-title"
          className="block text-sm font-medium text-neutral-700"
        >
          {text.form.title} <span className="text-red-500">*</span>
        </label>
        <Input
          id="tender-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          maxLength={256}
          placeholder={text.form.titlePlaceholder}
          className="w-full"
        />
      </div>

      {/* Description */}
      <div className="space-y-2">
        <label
          htmlFor="tender-description"
          className="block text-sm font-medium text-neutral-700"
        >
          {text.form.description}
        </label>
        <Textarea
          id="tender-description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          rows={4}
          placeholder={text.form.descriptionPlaceholder}
          className="w-full"
        />
      </div>

      {/* Date Fields */}
      <div className="grid gap-4 sm:grid-cols-3">
        {/* Start Date */}
        <div className="space-y-2">
          <label
            htmlFor="tender-start-date"
            className="block text-sm font-medium text-neutral-700"
          >
            {text.form.startDate} <span className="text-red-500">*</span>
          </label>
          <Input
            id="tender-start-date"
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            required
            className="w-full"
          />
        </div>

        {/* End Date */}
        <div className="space-y-2">
          <label
            htmlFor="tender-end-date"
            className="block text-sm font-medium text-neutral-700"
          >
            {text.form.endDate} <span className="text-red-500">*</span>
          </label>
          <Input
            id="tender-end-date"
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            required
            min={startDate}
            className="w-full"
          />
        </div>

        {/* Extended Date */}
        <div className="space-y-2">
          <label
            htmlFor="tender-extended-date"
            className="block text-sm font-medium text-neutral-700"
          >
            {text.form.extendedDate}
          </label>
          <Input
            id="tender-extended-date"
            type="date"
            value={extendedDate}
            onChange={(e) => setExtendedDate(e.target.value)}
            min={endDate}
            className="w-full"
          />
        </div>
      </div>

      {/* Documents Upload */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">
          {text.form.document}
        </label>

        {/* Documents List */}
        {documents.length > 0 && (
          <div className="space-y-2">
            {documents.map((doc, index) => (
              <div
                key={`${doc.url}-${index}`}
                className="flex items-center gap-3 rounded-md border border-neutral-200 bg-neutral-50 p-3"
              >
                <FaFilePdf className="text-red-500 h-8 w-8 flex-shrink-0" />
                <div className="min-w-0 flex-1">
                  {editingDocIndex === index ? (
                    <div className="flex gap-2">
                      <Input
                        type="text"
                        value={editingDocName}
                        onChange={(e) => setEditingDocName(e.target.value)}
                        maxLength={256}
                        className="flex-1"
                        id={''}
                      />
                      <Button
                        type="button"
                        variant="secondary"
                        onClick={() => saveDocumentName(index)}
                        className="px-3 py-1 text-sm"
                      >
                        Save
                      </Button>
                    </div>
                  ) : (
                    <>
                      <a
                        href={doc.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary-600 block truncate font-medium hover:underline"
                      >
                        {doc.name || 'Document'}
                      </a>
                      <p className="truncate text-xs text-neutral-500">
                        {doc.url}
                      </p>
                      <button
                        type="button"
                        onClick={() => startEditingDocument(index)}
                        className="text-primary-600 mt-1 text-sm hover:underline"
                      >
                        {text.form.editDocument || 'Edit name'}
                      </button>
                    </>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => handleRemoveDocument(index)}
                  className="text-red-600 hover:bg-red-100 flex-shrink-0 rounded p-1.5 transition-colors"
                  title={text.form.removeDocument}
                >
                  <FaTrash className="h-4 w-4" />
                </button>
              </div>
            ))}
          </div>
        )}

        {/* Upload Button */}
        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            accept=".pdf"
            onChange={handleFileUpload}
            className="hidden"
            id="document-upload"
            disabled={isUploading}
          />
          <Button
            type="button"
            variant="secondary"
            onClick={() => fileInputRef.current?.click()}
            disabled={isUploading}
            className="flex items-center gap-2 px-4 py-2"
          >
            {isUploading ? (
              <>
                <AiOutlineLoading3Quarters className="h-4 w-4 animate-spin" />
                Uploading...
              </>
            ) : (
              <>
                <FaUpload className="h-4 w-4" />
                {text.form.uploadDocument}
              </>
            )}
          </Button>
          <span className="text-sm text-neutral-500">PDF only, max 10MB</span>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-end gap-3 border-t pt-4">
        <Button
          type="button"
          variant="outline"
          onClick={handleCancel}
          disabled={isSubmitting}
          className="px-4 py-2"
        >
          {text.cancel}
        </Button>
        <Button type="submit" disabled={isSubmitting} className="px-4 py-2">
          {isSubmitting ? (
            <AiOutlineLoading3Quarters className="h-4 w-4 animate-spin" />
          ) : (
            text.save
          )}
        </Button>
      </div>
    </form>
  );
}
