INSERT INTO college_website.forms (id, title, description, visible_to, questions, is_editing_allowed, expiry_date, persistent_url, old_persistent_urls, is_published)
VALUES
(1, 'Registration Form', 'This form is used to register students for the college', ARRAY['Students'], ARRAY[1,2,3,4], true, '2024-03-10', 'form-url.com', ARRAY[]::varchar[], false),
(2, 'Feedback Form', 'This form is used to collect feedback from students', ARRAY['Students', 'HODs'], ARRAY[1,2,3], true, '2024-03-10', 'form-url.com', ARRAY[]::varchar[], false),
(3, 'Complaint Form', 'This form is used to collect complaints from students', ARRAY['Students', 'Director'], ARRAY[1,2], true, '2024-03-15', 'form-url.com', ARRAY[]::varchar[], false),
(4, 'Application Form', 'This form is used to collect applications from students', ARRAY['Students'], ARRAY[1,2,3,4], true, '2024-03-15', 'form-url.com', ARRAY[]::varchar[], false),
(5, 'Club Registration Form', 'This form is used to register students for the clubs', ARRAY['Students', 'Club Presidents'], ARRAY[1,2], true, '2024-03-15', 'form-url.com', ARRAY[]::varchar[], false),
(6, 'Event Registration Form', 'This form is used to register students for the events', ARRAY['Students'], ARRAY[1,2,3,4], true, '2024-03-15', 'form-url.com', ARRAY['old-form-url.com'], false),
(7, 'Hostel Registration Form', 'This form is used to register students for the hostel', ARRAY['Students'], ARRAY[1,2,3,4], true, '2024-03-15', 'form-url.com', ARRAY[]::varchar[], false),
(8, 'Library Registration Form', 'This form is used to register students for the library', ARRAY['Students', 'Faculty'], ARRAY[1,2,3,4], true, '2024-03-15', 'form-url.com', ARRAY[]::varchar[], false),
(9, 'Placement Registration Form', 'This form is used to register students for the placement', ARRAY['Students', 'Training and Placement Officer'], ARRAY[1,2,3,4], true, '2024-03-15', 'form-url.com', ARRAY[]::varchar[], false),
(10, 'Alumni Registration Form', 'This form is used to register students for the alumni', ARRAY['Students', 'Director'], ARRAY[1,2,3,4], true, '2024-03-15', 'form-url.com', ARRAY[]::varchar[], false);
