/*
  Warnings:

  - Added the required column `question_validations` to the `forms` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "forms" ADD COLUMN     "question_validations" JSONB NOT NULL,
ADD COLUMN     "required_questions" VARCHAR[];
