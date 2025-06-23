import { images } from '..';

const { teacher1, teacher2, teacher3, teacher4, school1, school2, school3 } =
  images;
export const welcomeScreenData = {
  title: `Let's find the "A" with us`,
  subtitle: `Please Sign in to view personalized recommendations`,
};

export const gradesData = [
  'Grade 1-5',
  'Grade 6-9',
  'Grade 10-11',
  'Grade 12-13',
];

export const provincesData = [
  'Central',
  'Eastern',
  'North Central',
  'northern',
  'north western',
  'sabaragamuwa',
  'southern',
  'uva',
  'western',
];

export const teacherData = [
  {
    name: 'Cassie Valdez',
    subject: 'Biology',
    image: teacher1,
  },
  {
    name: 'Paul Simons',
    subject: 'Chemistry',
    image: teacher2,
  },
  {
    name: 'Simon Patrick',
    subject: 'Computer Science',
    image: teacher4,
  },
  {
    name: 'Graham Osbor',
    subject: 'Physics',
    image: teacher3,
  },
];

export const institutionData = [
  {
    name: 'Victory College',
    field: 'Bio Science',
    description:
      'Studying how CBD awareness and availability as it related to pain management alternatives.',
    rating: '4.5',
    reviews: '413',
    image: school1,
  },
  {
    name: 'New Montana',
    field: 'Bio Science',
    description:
      'Montana Higher Educational Institute. Gampaha montana.gampaha@gmail.com',
    rating: '4.1',
    reviews: '354',
    image: school2,
  },
  {
    name: 'Susipwan College',
    field: 'Bio Science',
    description:
      'This is a private higher education center which conducting classes for GCE AL Students.',
    rating: '3.0',
    reviews: '745',
    image: school3,
  },
  {
    name: `Simon's Rock College`,
    field: 'Computer Science',
    description: 'Early college for gifted high schoolers',
    rating: '4.1',
    reviews: '354',
    image: school2,
  },
];

export const areaFilters = ['Island', 'Province', 'Districts'];

export const subjectFilters = [
  'All Subjects',
  'Biology',
  'Chemistry',
  'Physics',
  'Science for Technology',
];

export const classesData = [
    { id: 'c1', name: '12A1 - Toán', teacher: 'Cô Lan', studentCount: 45, progress: 85 },
    { id: 'c2', name: '12A1 - Vật Lý', teacher: 'Thầy Hùng', studentCount: 45, progress: 72 },
    { id: 'c3', name: '11B2 - Hóa học', teacher: 'Cô Mai', studentCount: 40, progress: 91 },
    { id: 'c4', name: '10C5 - Sinh học', teacher: 'Thầy Nam', studentCount: 38, progress: 65 },
    { id: 'c5', name: '11B2 - Lịch sử', teacher: 'Cô Dung', studentCount: 40, progress: 95 },
    { id: 'c6', name: '10C5 - Địa lý', teacher: 'Cô Hà', studentCount: 38, progress: 88 },
];

export const studentsData = {
    'c1': [ // 12A1 - Toán
        { id: 's1', name: 'Nguyễn Văn An', avatar: teacher1, progress: 95 },
        { id: 's2', name: 'Trần Thị Bình', avatar: teacher2, progress: 88 },
        { id: 's3', name: 'Lê Văn Cường', avatar: teacher3, progress: 70 },
        { id: 's4', name: 'Phạm Thị Dung', avatar: teacher4, progress: 92 },
    ],
    'c2': [ // 12A1 - Vật Lý
        { id: 's1', name: 'Nguyễn Văn An', avatar: teacher1, progress: 80 },
        { id: 's2', name: 'Trần Thị Bình', avatar: teacher2, progress: 65 },
        { id: 's3', name: 'Lê Văn Cường', avatar: teacher3, progress: 75 },
    ],
    'c3': [
        { id: 's5', name: 'Hoàng Thị E', avatar: teacher1, progress: 98 },
    ],
    'c4': [
        { id: 's6', name: 'Vũ Văn F', avatar: teacher2, progress: 62 },
    ],
    'c5': [
        { id: 's5', name: 'Hoàng Thị E', avatar: teacher1, progress: 100 },
    ],
     'c6': [
        { id: 's6', name: 'Vũ Văn F', avatar: teacher2, progress: 90 },
    ],
};

export const assignmentsData = {
    'c1': [ // Assignments for 12A1 - Toán
        { id: 'a1', title: 'Chương 1: Khảo sát hàm số', dueDate: '2024-09-15', subject: 'Toán' },
        { id: 'a2', title: 'Chương 2: Lũy thừa, Mũ & Logarit', dueDate: '2024-09-30', subject: 'Toán' },
        { id: 'a3', title: 'Chương 3: Nguyên hàm & Tích phân', dueDate: '2024-10-15', subject: 'Toán' },
        { id: 'a4', title: 'Bài tập cuối kỳ', dueDate: '2024-10-30', subject: 'Toán' },
    ],
    // ... add assignments for other classes
};

export const studentProgressData = {
    's1-c1': { completed: ['a1', 'a2', 'a3'] }, // An's progress in 12A1 Toán
    's2-c1': { completed: ['a1', 'a2'] },       // Bình's progress
    's3-c1': { completed: ['a1'] },             // Cường's progress
    's4-c1': { completed: ['a1', 'a2', 'a3', 'a4'] },// Dung's progress
};

export const challengesData = [
    { 
        id: 'challenge-1', 
        title: 'Thử thách Cân bằng Lực', 
        description: 'Sử dụng 2 thanh dài và 1 khớp nối, hãy xây dựng một mô hình đòn bẩy cân bằng khi có hai quả nặng 50g ở hai bên.',
        status: 'Đã giao', // Trạng thái: 'Bản nháp', 'Đã giao', 'Đã kết thúc'
        assignedDate: '2024-10-25T09:00:00Z',
        dueDate: '2024-10-30T23:59:00Z',
        assignedTo: ['Lớp 12A1', 'Lớp 12A2'],
        submissions: 45, // Số lượng học sinh đã nộp
        totalStudents: 60, // Tổng số học sinh
    },
    { 
        id: 'challenge-2', 
        title: 'Thử thách Con lắc Đơn', 
        description: 'Xây dựng một con lắc đơn có chiều dài 20cm. Mục tiêu là chu kỳ dao động phải đạt gần 0.9 giây trong mô phỏng.',
        status: 'Đã kết thúc',
        assignedDate: '2024-10-15T09:00:00Z',
        dueDate: '2024-10-20T23:59:00Z',
        assignedTo: ['Lớp 11B1'],
        submissions: 32,
        totalStudents: 32,
    },
    { 
        id: 'challenge-3', 
        title: 'Xây dựng Cây cầu Vững chắc', 
        description: 'Dùng các bộ phận cho trước, xây dựng một cây cầu có thể chịu được lực nén 15N trong mô phỏng mà không bị sụp đổ.',
        status: 'Bản nháp',
        assignedDate: null,
        dueDate: null,
        assignedTo: [],
        submissions: 0,
        totalStudents: 0,
    },
];

export const challengeSubmissionsData = {
    'challenge-1': [
        { id: 'student-1', name: 'Nguyễn Văn An', status: 'Đạt', submittedDate: '2024-10-26T10:00:00Z', avatar: require('../images/teacher1.png') },
        { id: 'student-2', name: 'Trần Thị Bích', status: 'Cần xem lại', submittedDate: '2024-10-27T11:30:00Z', avatar: require('../images/teacher2.png') },
        { id: 'student-3', name: 'Lê Văn Cường', status: 'Chưa nộp', submittedDate: null, avatar: require('../images/teacher3.png') },
        { id: 'student-4', name: 'Phạm Thị Dung', status: 'Đạt', submittedDate: '2024-10-28T09:00:00Z', avatar: require('../images/teacher4.png') },
        { id: 'student-5', name: 'Hoàng Văn E', status: 'Chưa nộp', submittedDate: null, avatar: require('../images/avatar.png') },
    ],
    'challenge-2': [
        { id: 'student-6', name: 'Vũ Thị F', status: 'Đạt', submittedDate: '2024-10-18T14:00:00Z', avatar: require('../images/teacher1.png') },
        { id: 'student-7', name: 'Đặng Văn G', status: 'Đạt', submittedDate: '2024-10-19T15:20:00Z', avatar: require('../images/teacher2.png') },
    ]
};
