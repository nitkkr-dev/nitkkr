'use client';

import { useRouter } from 'next/navigation';
import { useRef, useState } from 'react';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaTrash, FaUpload } from 'react-icons/fa';

import { Button } from '~/components/buttons';
import { Input, Textarea } from '~/components/inputs';
import { notificationCategoryEnum } from '~/server/db/schema/notifications.schema';
import {
  addNotification,
  type NotificationFormData,
  updateNotification,
} from '~/server/actions/notifications';
import { uploadMedia } from '~/server/actions/media-upload';

type Category = (typeof notificationCategoryEnum.enumValues)[number];

interface NotificationFormProps {
  locale: string;
  /** If provided, the form is in edit mode */
  notificationId?: number;
  /** Initial data for editing */
  initialData?: {
    title: string;
    content: string | null;
    categories: string[];
    documents?: string[];
    createdAt?: string;
  };
  text: {
    notificationTitle: string;
    notificationContent: string;
    notificationCategories: string;
    notificationDate: string;
    documents: string;
    uploadDocument: string;
    save: string;
    cancel: string;
    categories: Record<string, string>;
  };
}

export function NotificationForm({
  locale,
  notificationId,
  initialData,
  text,
}: NotificationFormProps) {
  const router = useRouter();
  const isEditing = !!notificationId;
  const fileInputRef = useRef<HTMLInputElement>(null);

  const [title, setTitle] = useState(initialData?.title ?? '');
  const [content, setContent] = useState(initialData?.content ?? '');
  const [categories, setCategories] = useState<Category[]>(
    (initialData?.categories as Category[]) ?? []
  );
  const [notificationDate, setNotificationDate] = useState(() => {
    if (initialData?.createdAt) {
      return initialData.createdAt.split('T')[0]; // Get date part only
    }
    return new Date().toISOString().split('T')[0];
  });
  const [documents, setDocuments] = useState<string[]>(
    initialData?.documents ?? []
  );
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isUploading, setIsUploading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCategoryToggle = (category: Category) => {
    setCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    // Require at least one category before uploading
    if (categories.length === 0) {
      setError(
        'Please select at least one category before uploading documents'
      );
      return;
    }

    setIsUploading(true);
    setError(null);

    try {
      for (const file of Array.from(files)) {
        const formData = new FormData();
        formData.append('file', file);

        // Generate path: notifications/{category}/{date}/{filename}
        // Use first category and current notification date
        const category = categories[0];
        const dateForPath = notificationDate.replace(/-/g, '/'); // Convert YYYY-MM-DD to YYYY/MM/DD
        const sanitizedName = file.name.replace(/[^a-zA-Z0-9.-]/g, '_');
        const timestamp = Date.now();
        const s3Path = `isaac-s3-images/notifications/${dateForPath}/${category}/${timestamp}-${sanitizedName}`;

        const result = await uploadMedia(formData, s3Path);

        if (result.success && result.url) {
          setDocuments((prev) => [...prev, result.url]);
        } else {
          setError(result.message);
        }
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
    setDocuments((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setIsSubmitting(true);

    const data: NotificationFormData = {
      title: title.trim(),
      content: content.trim() || undefined,
      categories,
      notificationDate,
      documents,
    };

    try {
      const result = isEditing
        ? await updateNotification(notificationId, data)
        : await addNotification(data);

      if (result.success) {
        router.back();
        router.refresh();
      } else {
        setError(result.message);
      }
    } catch (err) {
      console.error('Failed to save notification:', err);
      setError('An unexpected error occurred');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    router.back();
  };

  // Get all available categories
  const allCategories = notificationCategoryEnum.enumValues;

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
          htmlFor="notification-title"
          className="block text-sm font-medium text-neutral-700"
        >
          {text.notificationTitle} <span className="text-red-500">*</span>
        </label>
        <Input
          id="notification-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          maxLength={256}
          placeholder="Enter notification title"
          className="w-full"
        />
      </div>

      {/* Date */}
      <div className="space-y-2">
        <label
          htmlFor="notification-date"
          className="block text-sm font-medium text-neutral-700"
        >
          {text.notificationDate} <span className="text-red-500">*</span>
        </label>
        <Input
          id="notification-date"
          type="date"
          value={notificationDate}
          onChange={(e) => setNotificationDate(e.target.value)}
          required
          className="w-full"
        />
      </div>

      {/* Content */}
      <div className="space-y-2">
        <label
          htmlFor="notification-content"
          className="block text-sm font-medium text-neutral-700"
        >
          {text.notificationContent}
        </label>
        <Textarea
          id="notification-content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          rows={5}
          placeholder="Enter notification content (optional)"
          className="w-full"
        />
      </div>

      {/* Categories */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">
          {text.notificationCategories} <span className="text-red-500">*</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {allCategories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => handleCategoryToggle(category)}
              className={`rounded-full px-3 py-1 text-sm transition-colors ${
                categories.includes(category)
                  ? 'text-white bg-primary-700'
                  : 'bg-neutral-100 text-neutral-700 hover:bg-neutral-200'
              }`}
            >
              {text.categories[category] ?? category}
            </button>
          ))}
        </div>
        {categories.length === 0 && (
          <p className="text-red-500 text-xs">
            Please select at least one category
          </p>
        )}
      </div>

      {/* Documents */}
      <div className="space-y-2">
        <label className="block text-sm font-medium text-neutral-700">
          {text.documents}
        </label>

        {/* Upload button */}
        <div className="flex items-center gap-2">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            accept=".pdf,.doc,.docx,.xls,.xlsx,.jpg,.jpeg,.png,.webp"
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
                {text.uploadDocument}
              </>
            )}
          </Button>
        </div>

        {/* Document list */}
        {documents.length > 0 && (
          <ul className="mt-2 space-y-2">
            {documents.map((doc, index) => {
              const fileName = doc.split('/').pop() ?? doc;
              return (
                <li
                  key={index}
                  className="flex items-center justify-between rounded bg-neutral-100 px-3 py-2"
                >
                  <a
                    href={doc}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary-600 truncate text-sm hover:underline"
                  >
                    {fileName}
                  </a>
                  <button
                    type="button"
                    onClick={() => handleRemoveDocument(index)}
                    className="text-red-600 hover:bg-red-100 ml-2 rounded p-1"
                    title="Remove document"
                  >
                    <FaTrash className="size-3" />
                  </button>
                </li>
              );
            })}
          </ul>
        )}
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
        <Button
          type="submit"
          disabled={isSubmitting || categories.length === 0}
          className="px-4 py-2"
        >
          {isSubmitting ? '...' : text.save}
        </Button>
      </div>
    </form>
  );
}
