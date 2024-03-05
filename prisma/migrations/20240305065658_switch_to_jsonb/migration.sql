/*
  Warnings:

  - Changed the type of `answer` on the `form_answers` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "form_answers" DROP COLUMN "answer",
ADD COLUMN     "answer" JSONB NOT NULL;

-- AlterTable
ALTER TABLE "forms" ALTER COLUMN "question_validations" SET DATA TYPE JSON;
