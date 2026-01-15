'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { FaCamera, FaUpload, FaUser } from 'react-icons/fa';

import { Button } from '~/components/buttons';
import { env } from '~/lib/env/client';
import { toast } from '~/lib/hooks';
import { uploadMedia } from '~/server/actions/media-upload';

interface FacultyPhotoUploadProps {
  facultyName: string;
  employeeId: string;
  facultyId: number;
  onPhotoUploaded?: (url: string) => void;
}

const ALLOWED_IMAGE_TYPES = ['image/jpeg', 'image/png', 'image/webp'];
const MAX_FILE_SIZE = 5 * 1024 * 1024; // 5MB
const PHOTO_EXTENSIONS = ['jpg', 'png', 'webp'] as const;

// Helper to construct potential photo URLs
function getPhotoUrls(employeeId: string, facultyId: number): string[] {
  return PHOTO_EXTENSIONS.map(
    (ext) =>
      `${env.NEXT_PUBLIC_AWS_S3_URL}/faculty-and-staff/${employeeId}/${facultyId}.${ext}`
  );
}

export function FacultyPhotoUpload({
  facultyName,
  employeeId,
  facultyId,
  onPhotoUploaded,
}: FacultyPhotoUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);
  const [isCheckingPhoto, setIsCheckingPhoto] = useState(true);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Check for existing photo on mount by trying different extensions
  useEffect(() => {
    const checkExistingPhoto = async () => {
      const photoUrls = getPhotoUrls(employeeId, facultyId);

      for (const url of photoUrls) {
        try {
          const response = await fetch(url, { method: 'HEAD' });
          if (response.ok) {
            setPreviewUrl(url);
            break;
          }
        } catch {
          // Continue to next extension
        }
      }
      setIsCheckingPhoto(false);
    };

    void checkExistingPhoto();
  }, [employeeId, facultyId]);

  const handleClick = () => {
    fileInputRef.current?.click();
  };

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Validate file type
    if (!ALLOWED_IMAGE_TYPES.includes(file.type)) {
      toast({
        title: 'Invalid file type',
        description: 'Please upload a JPEG, PNG, or WebP image.',
        variant: 'error',
      });
      return;
    }

    // Show preview
    const objectUrl = URL.createObjectURL(file);
    setPreviewUrl(objectUrl);

    // Determine file extension
    const extension =
      file.type === 'image/jpg'
        ? 'jpg'
        : file.type === 'image/webp'
          ? 'webp'
          : 'png';

    // Construct S3 path: isaac-s3-images/faculty-and-staff/{employee_id}/{faculty_id}.{ext}
    const s3Path = `isaac-s3-images/faculty-and-staff/${employeeId}/${facultyId}.${extension}`;

    // Upload file
    setIsUploading(true);
    try {
      const formData = new FormData();
      formData.append('file', file);

      const result = await uploadMedia(formData, s3Path, {
        allowedTypes: ALLOWED_IMAGE_TYPES,
        maxFileSize: MAX_FILE_SIZE,
      });

      if (result.success && result.url) {
        toast({
          title: 'Success',
          description: 'Profile photo updated successfully.',
          variant: 'success',
        });
        setPreviewUrl(result.url);
        onPhotoUploaded?.(result.url);
      } else {
        toast({
          title: 'Error',
          description: result.message,
          variant: 'error',
        });
        // Revert preview on error
        URL.revokeObjectURL(objectUrl);
        setPreviewUrl(null);
      }
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to upload photo. Please try again.',
        variant: 'error',
      });
      // Revert preview on error
      URL.revokeObjectURL(objectUrl);
      setPreviewUrl(null);
    } finally {
      setIsUploading(false);
      // Reset file input
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }

    // Clean up object URL
    return () => URL.revokeObjectURL(objectUrl);
  };

  return (
    <div className="flex flex-col items-center gap-4">
      {/* Hidden file input */}
      <input
        ref={fileInputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp"
        onChange={handleFileChange}
        className="hidden"
        disabled={isUploading}
      />

      {/* Clickable photo container */}
      <div
        onClick={handleClick}
        className="group relative cursor-pointer overflow-hidden rounded-full transition-all hover:ring-4 hover:ring-primary-700/50"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
          }
        }}
        aria-label="Click to upload profile photo"
      >
        {/* Photo or fallback */}
        <div className="relative h-32 w-32 overflow-hidden rounded-full bg-neutral-200">
          {isCheckingPhoto ? (
            <div className="flex h-full w-full items-center justify-center bg-neutral-200">
              <AiOutlineLoading3Quarters className="h-8 w-8 animate-spin text-neutral-400" />
            </div>
          ) : previewUrl ? (
            <Image
              src={previewUrl}
              alt={facultyName}
              fill
              className="object-cover"
              sizes="128px"
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center bg-neutral-200">
              <FaUser className="h-16 w-16 text-neutral-500" />
            </div>
          )}

          {/* Overlay on hover */}
          <div className="bg-black/50 absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
            {isUploading ? (
              <AiOutlineLoading3Quarters className="text-white h-8 w-8 animate-spin" />
            ) : (
              <FaCamera className="text-white h-8 w-8" />
            )}
          </div>
        </div>
      </div>

      {/* Upload hint text */}
      <p className="text-center text-sm text-neutral-600">
        {isUploading ? 'Uploading...' : 'Click to upload a new photo'}
      </p>

      {/* Alternative upload button */}
      <Button
        type="button"
        variant="secondary"
        onClick={handleClick}
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
            Upload Photo
          </>
        )}
      </Button>
    </div>
  );
}
