INSERT INTO college_website.non_teaching_staff (id, name, telephone, email, working_section_id, designation, image, working_department_id, role_ids)
VALUES
(1, 'John Doe', ARRAY['1234567890', '1234567891'], 'example@gmail.com', 1, 'Clerk', 'image-url.com', 1, ARRAY[1]),
(2, 'Jane Doe', ARRAY['1234567890', '1234567891'], 'sample@gmail.com', 2, 'Clerk', 'image-url.com', 2, ARRAY[1, 2]),
(3, 'Alice Smith', ARRAY['1234567890', '1234567891'], 'alice.smith@example.com', 3, 'Manager', 'image-url.com', 3, ARRAY[2]),
(4, 'Bob Johnson', ARRAY['1234567890', '1234567891'], 'bob.johnson@example.com', 4, 'Manager', 'image-url.com', 4, ARRAY[2, 3]),
(5, 'Emma Brown', ARRAY['1234567890', '1234567891'], 'emma.brown@example.com', 5, 'Assistant', 'image-url.com', 5, ARRAY[3]),
(6, 'William Davis', ARRAY['1234567890', '1234567891'], 'william.davis@example.com', 6, 'Assistant', 'image-url.com', 6, ARRAY[3, 4]),
(7, 'Olivia Wilson', ARRAY['1234567890', '1234567891'], 'olivia.wilson@example.com', 7, 'Supervisor', 'image-url.com', 7, ARRAY[4]),
(8, 'James Taylor', ARRAY['1234567890', '1234567891'], 'james.taylor@example.com', 8, 'Supervisor', 'image-url.com', 8, ARRAY[4]),
(9, 'Sophia Martinez', ARRAY['1234567890', '1234567891'], 'sophia.martinez@example.com', 9, 'Clerk', 'image-url.com', 9, ARRAY[5]),
(10, 'Ethan Anderson', ARRAY['1234567890', '1234567891'], 'ethan.anderson@example.com', 10, 'Clerk', 'image-url.com', 10, ARRAY[5]);
