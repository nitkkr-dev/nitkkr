INSERT INTO college_website.deans (id, domain, faculty_id, activity_logs, associate_faculty_id, staff_id)
VALUES
(1, 'Academics', 1, ARRAY['Activity 1'], 2, ARRAY[1]),
(2, 'Research', 2, ARRAY['Activity 2'], 3, ARRAY[2]),
(3, 'Students', 3, ARRAY['Activity 3'], 4, ARRAY[3]),
(4, 'Faculty', 4, ARRAY[]::varchar[], 5, ARRAY[4]),
(5, 'Alumni', 5, ARRAY[]::varchar[], 6, ARRAY[5]),
(6, 'International Relations', 6, ARRAY[]::varchar[], 7, ARRAY[6]),
(7, 'Industry Relations', 7, ARRAY[]::varchar[], 8, ARRAY[7]),
(8, 'Administration', 8, ARRAY[]::varchar[], 9, ARRAY[8]),
(9, 'Finance', 9, ARRAY[]::varchar[], 10, ARRAY[9]),
(10, 'Infrastructure', 10, ARRAY[]::varchar[], 1, ARRAY[10]);
