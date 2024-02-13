-- DropForeignKey
ALTER TABLE "courses" DROP CONSTRAINT "fk_courses_majors";

-- AlterTable
ALTER TABLE "majors" ADD COLUMN     "coursesId" INTEGER;

-- AddForeignKey
ALTER TABLE "majors" ADD CONSTRAINT "majors_coursesId_fkey" FOREIGN KEY ("coursesId") REFERENCES "courses"("id") ON DELETE SET NULL ON UPDATE CASCADE;
