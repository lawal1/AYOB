// app.js
const express = require('express');
const path = require('path');
const { GoogleGenerativeAI } = require("@google/generative-ai");
const port = process.env.PORT || 3000;
const APIKey = "AIzaSyCT0MXrGRyFXKHQbq0GrSA1fLYbnSNMzJ8";
const genAI = new GoogleGenerativeAI(APIKey);
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

const app = express();
app.use(express.json()); // Middleware to parse JSON body
app.use(express.urlencoded({ extended: true }));

const universityData = `General Overview
Established: 2005 (converted from Ogun State College of Education, founded in 1978).

Type: Public university focused on teacher education and applied disciplines.

Location: Ijebu-Ode, Ogun State, Nigeria.

Motto: “Education for Service.”

Accreditation: Recognized by the National Universities Commission (NUC) and affiliated with the National Commission for Colleges of Education (NCCE).

Academic Structure
Faculties and Departments
Faculty of Education:

Educational Management

Counselling Psychology

Human Kinetics & Health Education

Science & Technology Education

Language & Communication Arts Education

Faculty of Arts & Social Sciences:

History & Diplomatic Studies

Religious Studies

Music

Economics

Geography & Environmental Studies

Faculty of Science:

Computer Science

Microbiology

Physics & Electronics

Mathematics

Chemistry

Faculty of Management Sciences:

Accounting

Business Administration

Public Administration

Faculty of Vocational & Technical Education:

Agricultural Education

Home Economics & Hospitality Management

Technology Education

Courses Offered
Undergraduate: B.Ed., B.A., B.Sc., B.Tech., B.A. (Ed), B.Sc. (Ed).

Postgraduate: PGDE, M.Ed., M.Sc., MBA, Ph.D. (in select fields).

Admission Requirements
Undergraduate (UTME):
O'Level: 5 credits in SSCE/NECO (including English & Math; subject-specific requirements vary by course).

UTME Score: Meet JAMB cutoff (varies yearly; check TASUED’s cutoff for your course).

Post-UTME Screening: Mandatory for eligible candidates.

Direct Entry:
NCE, ND, HND, or equivalent in relevant fields (e.g., NCE for Education programs).

Postgraduate:
Bachelor’s degree (minimum Second Class Lower) in a related field.

NYSC discharge certificate (for Nigerian graduates).

Key University Members (Subject to Change)
Vice-Chancellor: Prof. Oluwole Banjo (as of 2023; confirm via the website).

Registrar: Mr. Dapo Oke (administrative head).

Deans of Faculties: Listed on the official website.

University Librarian: Oversees the Olabisi Onabanjo Library.

Facilities & Student Life
Library: Central library with digital resources.

ICT: Computer labs and Wi-Fi access.

Hostels: On-campus accommodation (limited; apply early).

Sports: Facilities for football, athletics, etc.

Clubs/Societies: Student unions, religious groups, and academic clubs.

Contact Information
Address: PMB 2118, Ijebu-Ode, Ogun State, Nigeria.

Website: https://tasued.edu.ng

Phone: +234 803 478 5077 (Admissions Office).

Additional Notes
Part-Time/Distance Learning: Available for select programs.

Scholarships: Check the website for state-sponsored or merit-based opportunities.

Admission Updates: Always verify deadlines and requirements on TASUED’s portal or JAMB CAPS.
Academic Policies & Procedures
Grading System:

Uses a 4-point scale (e.g., A = 4.0, B = 3.0).

Minimum CGPA of 1.50 to avoid probation.

Teaching Practice (TP):

Mandatory for Education students in their penultimate year.

Conducted in partner schools across Ogun State.

Course Registration:

Done online via the TASUED portal during specified periods.

Late registration attracts penalties.

Tuition and Fees (Approximate)
Undergraduate:

₦50,000 – ₦150,000 per session (varies by course and student status).

Additional fees: Acceptance fee (₦30,000–₦50,000), hostel fee (₦20,000–₦50,000).

Postgraduate:

₦100,000 – ₦300,000 per session (depends on program).

Admission Process (Step-by-Step)
UTME Candidates:

Choose TASUED as your first choice in JAMB.

Participate in TASUED’s post-UTME screening (includes document verification and aptitude test).

Check admission status via JAMB CAPS or TASUED portal.

Direct Entry:

Submit academic transcripts and NCE/ND/HND certificates to the admissions office.

Clearance & Registration:

Submit original documents (O’Level results, birth certificate, etc.).

Pay acceptance and tuition fees.

Student Support Services
Career Development:

Internship partnerships with schools, government agencies, and NGOs.

Annual job fairs and CV workshops.

Health Services:

On-campus clinic for basic medical care.

Counseling Unit:

Provides academic and emotional support.

Campus Life & Extracurriculars
Student Organizations:

Student Union Government (SUG).

Clubs: Debate Society, Tech Hub, Drama Club, etc.

Events:

Annual TASUED Cultural Day.

Inter-faculty sports competitions.

Religious Activities:

Central mosque and chapel on campus.

Research & Partnerships
Collaborates with institutions like UNESCO and NUC for teacher-training projects.

Research Centers:

Center for Educational Media and Technology.

Institute for Entrepreneurship Development.

Key Contacts
Admissions Office: admissions@tasued.edu.ng / +234 803 478 5077.

Bursary Department: For fee-related queries.

ICT Unit: Support for portal issues (ictsupport@tasued.edu.ng).

Important Tips for Students
Accommodation: Apply early for on-campus hostels or rent off-campus (areas like Folagbade or Ajegunle).

E-Learning: Access course materials via Moodle or the TASUED e-library.

Beware of Fraud: Only use official TASUED portals for payments and updates.

Website Navigation Tips
Admission lists: Check under “News & Announcements”.

Course handbooks: Visit “Academic Resources” section.

The Tai Solarin University of Education (TASUED) outlines specific admission requirements for its undergraduate programs, applicable to both UTME and Direct Entry candidates.
UTME 4-Year Programme Requirements:
Candidates must possess a WAEC/NECO Senior School Certificate (SSC), General Certificate of Education Ordinary Level (GCE O’Level), or their equivalents, with credits in five (5) subjects obtained at one sitting or six (6) credits at not more than two sittings.
National Technical Certificate (NTC) or National Business Certificate (NBC) is acceptable for Vocational courses only.
Direct Entry 3-Year Programme Requirements:
Nigeria Certificate in Education (N.C.E.) with at least Merit in two core subjects.
GCE A’Level, HND (for some courses) in relevant areas with at least Upper Credit.
Cambridge (A level) Certificate.
Academic Diploma from recognized universities (for some courses) in relevant areas.
Advanced National Technical/Business Certificate (ANTC, ANBC) is acceptable for Vocational courses only.
Additional Requirements:
A credit in O’Level English Language is mandatory for all courses.
A credit in O’Level Mathematics is required for all Science, Vocational and Technical, and Social Science-based courses.
A credit in Literature in English is necessary for English Language courses.
For Mathematics, a credit in at least one science subject is required.
For detailed information on specific course requirements and other admission-related inquiries, prospective students are encouraged to visit the official TASUED website or contact the admissions office directly.




Tai Solarin University of Education (TASUED), established on January 29, 2005, is Nigeria's premier university of education, located in Ijagun, Ogun State. The university is dedicated to producing highly qualified educators equipped with modern teaching methodologies and technologies to meet both national and global educational needs. citeturn0search11
Mission and Vision
Vision: To be the preferred education university, excelling in preparing educators who will be leaders in their respective fields.
Mission: To enhance the quality of teaching and learning by continuously updating the methods and skills of knowledge providers, equipping them with modern technology services delivered by skilled and motivated staff to meet contemporary and future needs of Nigeria, with the capability to compete globally. citeturn0search0
Academic Structure
TASUED's academic framework is organized into five colleges, each comprising various departments:
College of Specialized and Professional Education (COSPED):
Educational Management
Library and Information Science
Childhood Education
Educational Technology
Adult Education
Counselling Psychology and Educational Foundation
College of Science and Information Technology (COSIT):
Human Kinetics and Health Education
Physics
Computer and Information Sciences
Biological Sciences
Chemical Sciences
Mathematics
College of Humanities (COHUM):
Creative Arts
French
Religious Studies
English
History and Diplomatic Studies
Yoruba
College of Management and Social Sciences (COSMAS):
Sociological Studies
Political Science
Geography and Environmental Management
Economics
College of Vocational and Technical Education (COVTED):
Business Education
Agricultural Science
Home Economics and Hotel Management
Technical Education
Each department offers specialized programs designed to equip students with both theoretical knowledge and practical skills. citeturn0search4
Directorates and Centres
To support its academic mission, TASUED has established several directorates and centers:
Directorate of Academic Planning, Quality Assurance and Research (DAPQAR): Oversees academic planning and ensures quality assurance in teaching and research activities.
Directorate of Research and External Relations (DRER): Manages research initiatives and fosters external collaborations.
Centre for Information Technology and Educational Media (CITEL): Focuses on integrating technology into education and developing educational media resources.
Centre for Human Rights and Gender Education (CHURGE): Promotes human rights and gender education through various programs and initiatives.
Centre for Vocational Skills, Entrepreneurship and Sustainable Development (CENVOS): Provides vocational training and promotes entrepreneurship among students.
Admission Requirements
TASUED offers various admission pathways for prospective students:
Undergraduate Admission:
UTME Candidates: Must have five credits at one sitting or six credits at not more than two sittings in relevant subjects, including English Language.
Direct Entry Candidates: Should possess NCE with at least merit in two core subjects, GCE A’Level, HND (for some courses) in relevant areas with at least Upper Credit, or equivalent qualifications. citeturn0search5
Postgraduate Admission:
TASUED offers postgraduate programs in various fields of education, with specific admission requirements detailed on the university's website. citeturn0search1
Student Support Services
The university provides a range of support services to enhance student experience:
Health Center: Offers medical services to students and staff.
ICT Center: Provides technological support and resources for academic activities.
Sports Council: Encourages student participation in various sports and recreational activities.
Students’ Affairs Office: Addresses student welfare issues and facilitates extracurricular activities.
Exams and Records: Manages examination schedules, grading, and academic records.
Research and Publications
TASUED is committed to advancing research and scholarly activities:
Inaugural Lectures: Regularly held to showcase research findings and academic contributions of faculty members.
Academic Journals: Publishes research articles in various fields of education and related disciplines.
Conference Proceedings: Documents and disseminates knowledge shared during academic conferences hosted by the university.
Additional Resources
For more detailed information, prospective and current students are encouraged to explore the following resources:
TASUED Open Educational Resources (OER): A repository of educational materials accessible to students and educators.
MyTASUED Portal: A platform for


Tai Solarin University of Education (TASUED) offers a variety of undergraduate programs across multiple colleges. Each program has specific admission requirements, including O'Level subject combinations, UTME subjects, and Direct Entry criteria. Below is a comprehensive overview of these requirements, along with any special considerations or waivers:
1. College of Specialized and Professional Education (COSPED)
Educational Management
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Economics, and other relevant subjects.
UTME Subjects: English Language, Economics, and any two other subjects.
Direct Entry: NCE with Merit in two core subjects, including Economics; or GCE A'Level passes in relevant subjects.
Special Considerations: None specified.
Library and Information Science
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, and three other relevant subjects.
UTME Subjects: Any three subjects.
Direct Entry: NCE with Merit in Library Science and one other subject; or GCE A'Level passes in relevant subjects.
Special Considerations: Credit in Mathematics is compulsory for those with teaching subject options in Science and Social Sciences.
Early Childhood Education
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, and other subjects from Arts, Social Sciences, or Sciences.
UTME Subjects: Any three subjects.
Direct Entry: NCE Merit in Primary Education Studies plus one approved teaching subject; or GCE A'Level passes in relevant subjects.
Special Considerations: OND/HND with Lower Credit is acceptable.
2. College of Science and Information Technology (COSIT)
Computer Science
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Physics, and two other Science subjects.
UTME Subjects: Mathematics, Physics, and one of Biology, Chemistry, Agric Science, Economics, or Geography.
Direct Entry: NCE with Merit in Computer Science and one other Science subject; or GCE A'Level passes in Mathematics and one other Science subject.
Special Considerations: None specified.
Biological Sciences
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Biology, Chemistry, Mathematics, and one other Science subject.
UTME Subjects: Biology, Chemistry, and one of Physics or Mathematics.
Direct Entry: NCE with Merit in Biology and one other Science subject; or GCE A'Level passes in Biology and one other Science subject.
Special Considerations: None specified.
3. College of Humanities (COHUM)
English
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Literature in English, and three other Arts or Social Science subjects.
UTME Subjects: Literature in English, one other Arts subject, and any other subject.
Direct Entry: NCE with Merit in English and one other Arts subject; or GCE A'Level passes in English and one other Arts subject.
Special Considerations: None specified.
History and Diplomatic Studies
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, History or Government, and three other Arts or Social Science subjects.
UTME Subjects: History or Government and any two other Arts or Social Science subjects.
Direct Entry: NCE with Merit in History and one other Arts subject; or GCE A'Level passes in History and one other Arts subject.
Special Considerations: None specified.
4. College of Management and Social Sciences (COSMAS)
Economics
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Economics, and two other Social Science or Arts subjects.
UTME Subjects: Economics, Mathematics, and one other Social Science or Arts subject.
Direct Entry: NCE with Merit in Economics and one other Social Science subject; or GCE A'Level passes in Economics and one other Social Science subject.
Special Considerations: None specified.
Political Science
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Government or History, and three other Social Science or Arts subjects.
UTME Subjects: Government or History and any two other Social Science or Arts subjects.
Direct Entry: NCE with Merit in Political Science and one other Social Science subject; or GCE A'Level passes in Government or History and one other Social Science subject.
Special Considerations: None specified.
5. College of Vocational and Technical Education (COVTED)
Business Education 
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics,



Tai Solarin University of Education (TASUED) offers a variety of undergraduate programs across its colleges, each with specific admission requirements. Below is a comprehensive overview of these requirements, including O'Level subject combinations, UTME subjects, Direct Entry criteria, and any special considerations or waivers.
1. College of Specialized and Professional Education (COSPED)
Adult Education
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language and other subjects from Arts, Social Sciences, or Sciences.
UTME Subjects: Any three subjects.
Direct Entry: 
At least two 'A' level passes, JUPEB, IJMB, or NCE with Merit.
OND/HND with Lower Credit.
Diploma in Adult Education, Social Work, or Social Development from recognized institutions with at least Lower Credit.
Special Considerations: None specified.
Library and Information Science and Education
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, and three other relevant Arts, Science, or Social Science subjects.
UTME Subjects: Any three subjects.
Direct Entry: 
Diploma in Library and Information Science or Librarianship from recognized universities.
At least two 'A' level passes, JUPEB, IJMB, or NCE with Merit.
HND with Merit in Library and Information Science, Computer Science, Information Technology, or related areas.
Special Considerations: Credit in Mathematics is compulsory for those with teaching subject options in Science and Social Sciences.
2. College of Vocational and Technical Education (COVTED)
Agricultural Sciences and Education
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Biology/Agricultural Science, Chemistry, Mathematics, and one or two of Geography, Physics, or Economics.
UTME Subjects: Chemistry, Biology/Agricultural Science, and one of Physics or Mathematics.
Direct Entry: 
At least two 'A' level passes, JUPEB, IJMB, or NCE with Merit in Chemistry and one from Biology/Botany/Agricultural Science, Economics, Physics, Geography, Geology, or Mathematics (Pure and Applied).
OND/HND with at least Lower Credit in Agriculture or Animal Health from recognized Polytechnic or College of Agriculture.
Special Considerations: None specified.
Business Education
O'Level Requirements: Five credits at one sitting or six credits at two sittings in English, Mathematics, and any other three subjects in Social Science or Arts, which must include Economics.
UTME Subjects: Mathematics, Economics, and other Social Science/Arts subjects.
Direct Entry: 
NCE with at least Merit pass in teaching subject.
OND/HND with minimum of Lower Credit in Business Education, Commerce, Accounting, or related disciplines.
JUPEB/IJMB.
Special Considerations: NTC/NBC certificate is acceptable.
3. College of Humanities (COHUM)
Christian Religious Studies and Education 
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language and other subjects.
UTME Subjects: Any three subjects.
Direct Entry: 
At least two 'A' level passes, JUPEB, IJMB, or NCE with Merit in CRS and one other subject in Arts/Social Sciences.
Special Considerations: Credit in Mathematics is compulsory for those with teaching subject options in Science and Social Sciences.
4. College of Science and Information Technology (COSIT)
Computer and Information Sciences 
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Physics, and two other Science subjects.
UTME Subjects: Mathematics, Physics, and one of Biology, Chemistry, Agricultural Science, Economics, or Geography.
Direct Entry: 
NCE with Merit in Computer Science and one other Science subject.
GCE A'Level passes in Mathematics and one other Science subject.
Special Considerations: None specified.
5. College of Management and Social Sciences (COSMAS)
Economics 
O'Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Economics, and two other Social Science or Arts subjects.
UTME Subjects: Economics, Mathematics, and one other Social Science or Arts subject.
Direct Entry: 
NCE with Merit in Economics and one other Social Science subject.
GCE A'Level passes in Economics and one other Social Science subject.
Special Considerations: None specified.
For a detailed breakdown of admission requirements for all courses, including specific subject combinations and any special considerations, please refer to the TASUED Admissions Brochure.
Please note that admission requirements may be updated.

Certainly, here are the detailed admission requirements for the specified courses at Tai Solarin University of Education (TASUED):
1. Biology
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings in WAEC/NECO Senior School Certificate (SSC), General Certificate of Education Ordinary Level (GCE O’Level), or their equivalents. The credits must include English Language, Mathematics, Biology, Chemistry, and one other relevant subject.
UTME Subjects: English Language, Biology, Chemistry, and one other Science subject.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Biology or related fields; or GCE A’ Level passes in Biology and one other Science subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with a strong background in Environmental Biology or related disciplines may be considered.
2. Chemistry
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Chemistry, Physics, and one other Science subject.
UTME Subjects: English Language, Chemistry, Physics, and one other Science subject.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Chemistry or related fields; or GCE A’ Level passes in Chemistry and one other Science subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with a background in Industrial Chemistry may be given special consideration.
3. Computer Science
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Physics, and two other Science subjects.
UTME Subjects: English Language, Mathematics, Physics, and one of Chemistry, Biology, or Economics.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Computer Science or related fields; or GCE A’ Level passes in Mathematics and one other Science subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with certifications in recognized computer programming courses may be considered.
4. Human Kinetics
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Biology, and three other relevant subjects.
UTME Subjects: English Language, Biology, and two other subjects from Arts, Social Sciences, or Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Physical and Health Education or related fields; or GCE A’ Level passes in Biology and one other relevant subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with coaching certificates or significant experience in sports may be given special consideration.
5. Mathematics
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, and three other relevant subjects.
UTME Subjects: English Language, Mathematics, and two other subjects from Physics, Chemistry, Biology, or Economics.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Mathematics or related fields; or GCE A’ Level passes in Mathematics and one other relevant subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with a strong background in Further Mathematics may be considered.
6. Physics
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Physics, Chemistry, and one other Science subject.
UTME Subjects: English Language, Physics, Mathematics, and one other Science subject.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Physics or related fields; or GCE A’ Level passes in Physics and one other Science subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with a background in Electronics or Telecommunications may be given special consideration.
7. Christian Religious Studies
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Christian Religious Studies, and three other relevant subjects.
UTME Subjects: English Language, Christian Religious Studies, and two other subjects from Arts or Social Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Christian Religious Studies or related fields; or GCE A’ Level passes in Christian Religious Studies and one other relevant subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with theological seminary training may be considered.
8. English Language
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Literature in English, and three other relevant subjects.
UTME Subjects: English Language, Literature in English, and two other subjects from Arts or Social Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in English or related fields; or GCE A’ Level passes in English and one other relevant
Certainly, here are the detailed admission requirements for the specified courses at Tai Solarin University of Education (TASUED):
1. French
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, French, and three other relevant subjects.
UTME Subjects: English Language, French, and two other subjects from Arts or Social Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in French or related fields; or GCE A’ Level passes in French and one other relevant subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates without a prior background in French may be required to undertake a remedial programme.
2. History and Diplomatic Studies
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, History or Government, and three other relevant subjects.
UTME Subjects: English Language, History or Government, and two other subjects from Arts or Social Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in History, Government, or related fields; or GCE A’ Level passes in History or Government and one other relevant subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with a background in International Relations or Political Science may be considered.
3. Islamic Studies
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Islamic Religious Studies, and three other relevant subjects.
UTME Subjects: English Language, Islamic Religious Studies, and two other subjects from Arts or Social Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Islamic Studies or related fields; or GCE A’ Level passes in Islamic Studies and one other relevant subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with Arabic language proficiency may be given special consideration.
4. Music
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Music (if available), and three other relevant subjects.
UTME Subjects: English Language, Music (if available), and two other subjects from Arts or Social Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Music or related fields; or GCE A’ Level passes in Music and one other relevant subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates without a formal background in Music may be required to demonstrate practical skills during the admission process.
5. Nigerian Languages (Yoruba)
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Yoruba, and three other relevant subjects.
UTME Subjects: English Language, Yoruba, and two other subjects from Arts or Social Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Yoruba or related fields; or GCE A’ Level passes in Yoruba and one other relevant subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with a strong background in Nigerian literature may be considered.
6. Agricultural Science
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Biology or Agricultural Science, Chemistry, and one other relevant subject.
UTME Subjects: English Language, Biology or Agricultural Science, Chemistry, and one other Science subject.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Agricultural Science or related fields; or GCE A’ Level passes in Biology and one other Science subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with practical farming experience may be given special consideration.
7. Business Education
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Economics or Commerce, and two other relevant subjects.
UTME Subjects: English Language, Mathematics, Economics or Commerce, and one other subject from Arts, Social Sciences, or Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Business Education or related fields; or GCE A’ Level passes in Economics and one other relevant subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with professional business certifications may be considered.
8. Home Economics
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Biology or Agricultural Science, and three other relevant subjects.
UTME Subjects: English Language, Biology or Agricultural Science, and two other subjects from Arts, Social Sciences, or Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Home Economics or related fields; or GCE A’ Level passes in Biology and one other relevant subject; or
Certainly, here are the detailed admission requirements for the specified courses at Tai Solarin University of Education (TASUED):
1. Technical Education
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Physics, and two other relevant subjects.
UTME Subjects: English Language, Mathematics, Physics, and one other subject from Chemistry, Technical Drawing, or any relevant Science subject.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Technical Education or related fields; or GCE A’ Level passes in Physics and Mathematics; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with a background in Engineering or Industrial Technology may be considered.
2. Economics
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Economics, and two other relevant subjects.
UTME Subjects: English Language, Mathematics, Economics, and one other subject from Arts or Social Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Economics or related fields; or GCE A’ Level passes in Economics and one other relevant subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with a strong background in Statistics or Accounting may be given special consideration.
3. Geography and Environmental Management
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Geography, and two other relevant subjects from Social Sciences or Sciences.
UTME Subjects: English Language, Geography, and two other subjects from Arts, Social Sciences, or Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Geography and any other Social Science or Science subject; or GCE A’ Level passes in Geography and one other relevant subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with a background in Environmental Science or Urban Planning may be considered.
4. Political Science
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Government or History, and three other relevant subjects.
UTME Subjects: English Language, Government or History, and two other subjects from Arts or Social Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Political Science, Government, or related fields; or GCE A’ Level passes in Government or History and one other relevant subject; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with a background in International Relations or Public Administration may be given special consideration.
5. Social Studies
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language and any two of Geography, Economics, Government, Commerce, Christian Religious Knowledge, Islamic Religious Knowledge, History, and Yoruba.
UTME Subjects: English Language and any three of the aforementioned subjects.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Social Studies or related fields; or GCE A’ Level passes in any two of the aforementioned subjects; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with a background in Sociology or Anthropology may be considered.
For more detailed information, please refer to the Undergraduate Admission Requirements on the TASUED official website.
Certainly, here are the detailed admission requirements for the following courses at Tai Solarin University of Education (TASUED):
1. Adult Education
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings in WAEC/NECO Senior School Certificate (SSC), General Certificate of Education Ordinary Level (GCE O’ Level), or their equivalents. The credits must include English Language, Mathematics, and three other relevant subjects.
UTME Subjects: English Language and any three subjects from Arts, Social Sciences, or Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Adult Education or related fields; or GCE A’ Level passes in relevant subjects; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with professional qualifications related to Adult Education may be considered.
2. Counselling Psychology
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Biology, and two other relevant subjects.
UTME Subjects: English Language, Biology, and two other subjects from Arts, Social Sciences, or Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Counselling or related fields; or GCE A’ Level passes in relevant subjects; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with relevant professional experience in counseling may be given special consideration.
3. Educational Management
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, Economics, and two other relevant subjects.
UTME Subjects: English Language, Economics, and two other subjects from Arts, Social Sciences, or Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Educational Management or related fields; or GCE A’ Level passes in relevant subjects; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Candidates with professional qualifications in management or administration may be considered.
4. Library and Information Science
UTME (4-Year Programme):
O' Level Requirements: Five credits at one sitting or six credits at two sittings, including English Language, Mathematics, and three other relevant subjects.
UTME Subjects: English Language and any three subjects from Arts, Social Sciences, or Sciences.
Direct Entry (3-Year Programme):
Qualifications: NCE with at least Merit in Library Science or related fields; or GCE A’ Level passes in relevant subjects; or OND/HND with at least Lower Credit in relevant areas.
Special Considerations (Waiver) Remarks:
Credit in Mathematics is compulsory for those with teaching subject options in Science and Social Sciences.
For more detailed information, please refer to the TASUED Admissions Brochure.


`

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the index.html file at the root URL
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post("/ask", async (req, res) => {
  try {
    const { question} = req.body;

    if (!question || !universityData) {
      return res.status(400).json({ error: "Please provide both question and universityData." });
    }

    const prompt = `You are an AI assistant for a university. A student or soon to be student has asked: "${question}". Check if the question relates to the university's information: ${JSON.stringify(universityData)} just answer the question no additional info. If it does, provide a direct answer based on the data. If not, politely ask the user to ask only about the university.`;

    const response = await model.generateContent(prompt);
    const aiResponse = response.response.text();

    res.json({ reply: aiResponse });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Something went wrong. Please try again later." });
  }
});


app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
